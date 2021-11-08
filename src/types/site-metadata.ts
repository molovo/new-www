import { graphql } from 'gatsby'

interface SiteMetadata {
  site: {
    siteMetadata: {
      title: string
      description: string
      siteUrl: string
      author: {
        name: string
        summary: string
      }
      social: {
        github: string
        twitter: string
        dribbble: string
      }
    }
  }
}

export const query = graphql`
  fragment SiteMetadata on Query {
    site {
      siteMetadata {
        title
        description
        siteUrl
        author {
          name
          summary
        }
        social {
          github
          twitter
          dribbble
        }
      }
    }
  }
`

export default SiteMetadata
