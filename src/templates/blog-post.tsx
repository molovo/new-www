import React, { useContext, useEffect } from 'react'
import { graphql, PageProps } from 'gatsby'

import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Image from '../components/image'
import Seo from '../components/seo'
import { CurrentClientContext } from '../context/current-client-provider'
import Article from '../types/article'
import PostSibling from '../types/post-sibling'
import MdxOverrides from '../components/mdx-overrides'
import { TitleContext } from '../context/title-context'
import NextPost from '../components/next-post'

interface DataProps {
  previous?: PostSibling
  next?: PostSibling
  mdx: Article
}

const BlogPostTemplate = ({
  data,
  location,
}: PageProps<DataProps, Location>): JSX.Element => {
  const post = data.mdx
  const { next } = data

  const { setTitle } = useContext(TitleContext)
  setTitle(post.frontmatter.title)

  const { setCurrentClient } = useContext(CurrentClientContext)
  useEffect(() => {
    setCurrentClient(null)
  }, [location, post.slug, setCurrentClient])

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
        data-header-modifier={post.frontmatter.headerModifier || 'red'}
        data-header-modifier-mobile={
          post.frontmatter.headerModifierMobile || 'red'
        }
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
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...(post.frontmatter.imageFullSize && {
              'data-header-modifier': post.frontmatter.headerModifier,
              'data-header-modifier-mobile':
                post.frontmatter.headerModifierMobile,
            })}
          />
        )}

        <header className="blog-post__header">
          <h1 itemProp="headline" className="blog-post__title">
            {post.frontmatter.title}
          </h1>
          {/* <p>{post.frontmatter.date}</p> */}
        </header>

        <div className="blog-post__content">
          <MDXProvider components={MdxOverrides}>
            <MDXRenderer
              frontmatter={post.frontmatter}
              images={post.frontmatter.embeddedImagesLocal}
            >
              {post.body}
            </MDXRenderer>
          </MDXProvider>
        </div>
      </article>

      {next ? <NextPost post={next} /> : null}

      {/* <nav className="blog-post-nav">
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
      </nav> */}
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
      ...Article
    }
    previous: mdx(id: { eq: $previousPostId }) {
      ...PostSibling
    }
    next: mdx(id: { eq: $nextPostId }) {
      ...PostSibling
    }
  }
`
