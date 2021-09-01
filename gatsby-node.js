const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const slugify = require(`slugify`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const templates = {
    blog: path.resolve(`./src/templates/blog-post.tsx`),
    study: path.resolve(`./src/templates/case-study.tsx`),
  }

  // Get all markdown blog posts sorted by date
  const result = await graphql(`
    query MyQuery {
      allMdx {
        nodes {
          id
          slug
          fields {
            url
            type
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMdx.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    const studies = []
    const articles = []

    posts.forEach((post, index) => {
      if (['study-section', 'project'].includes(post.fields.type)) {
        return
      }

      if (post.fields.type === 'study') {
        studies.push(post)
      }

      if (post.fields.type === 'blog') {
        articles.push(post)
      }
    })

    studies.forEach((study, index) => {
      const previousPostId = index === 0 ? null : studies[index - 1].id
      const nextPostId =
        index === studies.length - 1 ? null : studies[index + 1].id

      createPage({
        path: study.fields.url,
        component: templates[study.fields.type] || templates.blog,
        context: {
          id: study.id,
          slug: study.slug,
          previousPostId,
          nextPostId,
        },
      })
    })

    articles.forEach((article, index) => {
      const previousPostId = index === 0 ? null : articles[index - 1].id
      const nextPostId =
        index === articles.length - 1 ? null : articles[index + 1].id

      createPage({
        path: article.fields.url,
        component: templates[article.fields.type] || templates.blog,
        context: {
          id: article.id,
          slug: article.slug,
          previousPostId,
          nextPostId,
        },
      })
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'Mdx') {
    if (node.fileAbsolutePath.includes('content/blog')) {
      const filename = createFilePath({
        node,
        getNode,
        basePath: `content/blog`,
      })

      // get the date and title from the file name
      const [, date, slug] = filename.match(
        /^\/([\d]{4}-[\d]{2}-[\d]{2})-{1}(.+)\/$/
      )

      // set the type
      createNodeField({ node, name: `type`, value: `blog` })

      // create a new slug concatenating everything
      const url = `/writing/${slug}`
      createNodeField({ node, name: `url`, value: url })

      // save the date for later use
      createNodeField({ node, name: `date`, value: date })
    }

    if (node.fileAbsolutePath.includes('content/studies')) {
      if (node.fileAbsolutePath.includes('content/studies/sections')) {
        const filename = createFilePath({
          node,
          getNode,
          basePath: `content/studies/sections`,
        })

        const [, client, order, slug] = filename.match(
          /^\/sections\/([a-z-]+)\/([\d]{2})\.{1}([^/]+)\/$/
        )

        createNodeField({ node, name: `client`, value: client })
        createNodeField({ node, name: `order`, value: parseInt(order, 10) })
        createNodeField({ node, name: `slug`, value: slug })

        // set the type
        createNodeField({ node, name: `type`, value: `study-section` })

        return
      }

      const filename = createFilePath({
        node,
        getNode,
        basePath: `content/studies`,
      })

      // get the date and title from the file name
      const [, slug] = filename.match(/^\/{1}(.+)\/$/)

      // set the type
      createNodeField({ node, name: `type`, value: `study` })

      // create a new slug concatenating everything
      const url = `/work/${slug}`
      createNodeField({ node, name: `url`, value: url })
    }

    if (node.fileAbsolutePath.includes('content/projects')) {
      const filename = createFilePath({
        node,
        getNode,
        basePath: `content/projects`,
      })

      // get the date and title from the file name
      const [, slug] = filename.match(/^\/{1}(.+)\/$/)

      // set the type
      createNodeField({ node, name: `type`, value: `project` })
    }
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type Mdx implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      featured: Boolean
      order: Int
      thumbnail: File @fileByRelativePath
      image: File @fileByRelativePath
      bgImage: File @fileByRelativePath
      images: [File] @fileByRelativePath
      embeddedImagesLocal: [File] @fileByRelativePath
      color: String
      bgColor: String
      titleColor: String
      headerModifier: String
      headerModiferMobile: String
    }

    type Fields {
      url: String
      date: Date @dateformat
      type: String
    }
  `)
}
