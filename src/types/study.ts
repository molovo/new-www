import { IGatsbyImageData } from 'gatsby-plugin-image'

interface Study {
  id: string
  slug: string
  body: string
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
    bgColor: string
    titleColor: string
    ctaFontSize: string
    ctaMaxWidth: string
    ctaButtonStyles: Array<string>
    headerModifer: string
    headerModifierMobile: string
  }
  fields: {
    url: string
    type: string
  }
}

export default Study
