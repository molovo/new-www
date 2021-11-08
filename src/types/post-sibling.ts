import { graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

interface PostSibling {
  slug: string
  frontmatter: {
    client: string
    title: string
    image: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
  fields: {
    url: string
  }
}

export const query = graphql`
  fragment PostSibling on Mdx {
    slug
    frontmatter {
      title
      client
      image {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
    fields {
      url
    }
  }
`

export default PostSibling
