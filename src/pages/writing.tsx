import { graphql, Link, PageProps } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import React, { useContext, useEffect } from 'react'
import Image from '../components/image'
import { CurrentClientContext } from '../context/current-client-provider'

interface DataProps {
  allMdx: {
    nodes: [
      {
        excerpt: string
        timeToRead: number
        frontmatter: {
          title: string
          image: {
            childImageSharp: {
              gatsbyImageData: IGatsbyImageData
            }
          }
        }
        fields: {
          date: Date
          url: string
        }
      }
    ]
  }
}

const Writing = ({ data, location }: PageProps<DataProps, Location>) => {
  const { setCurrentClient } = useContext(CurrentClientContext)
  useEffect(() => {
    setCurrentClient(null)
  }, [location])

  return (
    <ul className="blog-index">
      {data.allMdx.nodes.map(
        ({
          excerpt,
          timeToRead,
          fields: { date, url },
          frontmatter: { title, image },
        }) => (
          <li className="blog-index__item">
            <div className="blog-index__item-meta">
              <time className="blog-index__item-date" dateTime={date}>
                {date}
              </time>
              <span className="blog-index__item-time-to-read">
                {timeToRead} min read
              </span>
            </div>

            <div className="blog-index__item-image-wrapper">
              {image && (
                <Image image={image} className="blog-index__item-image" />
              )}
            </div>

            <div className="blog-index__item-content">
              <Link className="blog-index__item-link" to={url}>
                <h1 className="blog-index__item-title">{title}</h1>
              </Link>

              <p>{excerpt}</p>
            </div>
          </li>
        )
      )}
    </ul>
  )
}

export default Writing

export const query = graphql`
  {
    allMdx(
      filter: { fields: { type: { eq: "blog" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        excerpt
        timeToRead
        frontmatter {
          title
          image {
            childImageSharp {
              gatsbyImageData(layout: FIXED)
            }
          }
        }
        fields {
          date
          url
        }
      }
    }
  }
`
