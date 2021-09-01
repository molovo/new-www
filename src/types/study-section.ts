import { IGatsbyImageData } from 'gatsby-plugin-image'

interface StudySection {
  body: string
  frontmatter: {
    title: string
    bgColor?: string
    bgImage?: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
    bgImageBlendMode?: string
    bgImageOpacity?: number
    bgImagePosition?: string
    bgImageRepeat?: string
    bgImageSize?: string
    color?: string
    titleColor?: string
    headerModifier?: string
    headerModifierMobile?: string
    embeddedImagesLocal: Array<{
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }>
  }
  fields: {
    slug: string
  }
}

export default StudySection
