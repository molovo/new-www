import { graphql, Link, PageProps } from 'gatsby'
import React, { useContext, useEffect } from 'react'
import Image from '../components/image'
import { CurrentClientContext } from '../context/current-client-provider'
import Article from '../types/article'

interface DataProps {
  allMdx: {
    nodes: Article[]
  }
}

const Writing = ({
  data,
  location,
}: PageProps<DataProps, Location>): JSX.Element => {
  const { setCurrentClient } = useContext(CurrentClientContext)
  useEffect(() => {
    setCurrentClient(null)
  }, [location, setCurrentClient])

  return (
    <ul className="blog-index">
      {data.allMdx.nodes.map(
        ({
          excerpt,
          timeToRead,
          slug,
          fields: { date, url },
          frontmatter: { title, image, imageAltText },
        }) => (
          <li className="blog-index__item" key={slug}>
            <div className="blog-index__item-meta">
              <time
                className="blog-index__item-date"
                dateTime={new Date(date).toISOString()}
              >
                {date}
              </time>
              <span className="blog-index__item-time-to-read">
                {timeToRead} min read
              </span>
            </div>

            <div className="blog-index__item-image-wrapper">
              {image && (
                <Image
                  image={image}
                  alt={imageAltText}
                  className="blog-index__item-image"
                />
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
        ...Article
      }
    }
  }
`
