import { IGatsbyImageData } from 'gatsby-plugin-image'
import CSS from 'csstype'
import { graphql } from 'gatsby'
import { Modifier } from '../components/layout/header'

interface Study {
  id: string
  slug: string
  body: string
  excerpt: string
  timeToRead: number
  frontmatter: {
    title: string
    client: string
    url: string
    role: string
    year: string
    description: string
    thumbnail: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
    image: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
    embeddedImagesLocal: Array<{
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }>
    order: number
    bgColor: CSS.Property.BackgroundColor
    titleColor: CSS.Property.Color
    ctaFontSize: CSS.Property.FontSize
    ctaMaxWidth: CSS.Property.MaxWidth
    ctaButtonStyles: Array<string>
    headerModifier: Modifier
    headerModifierMobile: Modifier
  }
  fields: {
    url: string
    type: string
  }
}

export const query = graphql`
  fragment Study on Mdx {
    id
    slug
    body
    timeToRead
    frontmatter {
      title
      client
      url
      role
      year
      description
      thumbnail {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      image {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      embeddedImagesLocal {
        publicURL
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      order
      headerModifier
      headerModifierMobile
      bgColor
      titleColor
      ctaFontSize
      ctaMaxWidth
      ctaButtonStyles
    }
    fields {
      url
      type
    }
  }
`

export default Study
