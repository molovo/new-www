import React, { useContext, useEffect } from 'react'
import { Link, graphql, PageProps } from 'gatsby'

import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import Image from '../components/image'
import Seo from '../components/seo'
import { CurrentClientContext } from '../context/current-client-provider'

const shortcodes = { Image }

interface SiblingDataProps {
  frontmatter: {
    title: string
  }
  fields: {
    url: string
  }
}

interface DataProps {
  previous?: SiblingDataProps
  next?: SiblingDataProps
  mdx: {
    id: string
    excerpt: string
    body: string
    frontmatter: {
      title: string
      date: Date
      description: string
      embeddedImagesLocal: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
      image: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
      imageAltText: string
      imageFullSize: boolean
    }
  }
}

const BlogPostTemplate = ({
  data,
  location,
}: PageProps<DataProps, Location>) => {
  const post = data.mdx
  const { previous, next } = data

  const { setCurrentClient } = useContext(CurrentClientContext)
  useEffect(() => {
    setCurrentClient(null)
  }, [location, post.slug])

  return (
    <>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <article
        className="blog-post"
        itemScope
        itemType="https://schema.org/Article"
      >
        {post.frontmatter.image && (
          <Image
            image={post.frontmatter.image}
            alt={post.frontmatter.imageAltText}
            className={`blog-post__header-image ${
              post.frontmatter.imageFullSize
                ? 'blog-post__header-image--full-size'
                : ''
            }`}
          />
        )}

        <header className="blog-post__header">
          <h1 itemProp="headline" className="blog-post__title">
            {post.frontmatter.title}
          </h1>
          {/* <p>{post.frontmatter.date}</p> */}
        </header>

        <div className="blog-post__content">
          <MDXProvider components={shortcodes}>
            <MDXRenderer
              frontmatter={post.frontmatter}
              images={post.frontmatter.embeddedImagesLocal}
            >
              {post.body}
            </MDXRenderer>
          </MDXProvider>
        </div>
      </article>

      <nav className="blog-post-nav">
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.url} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.url} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        embeddedImagesLocal {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        imageAltText
        imageFullSize
        headerModifier
        headerModifierMobile
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      frontmatter {
        title
      }
      fields {
        url
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      frontmatter {
        title
      }
      fields {
        url
      }
    }
  }
`
