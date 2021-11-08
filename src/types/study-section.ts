import { IGatsbyImageData } from 'gatsby-plugin-image'
import { Property } from 'csstype'
import { graphql } from 'gatsby'
import { Modifier } from '../components/layout/header'
import Image from './image'

interface StudySection {
  body: string
  frontmatter: {
    name: string
    title: string
    bgColor?: Property.BackgroundColor
    bgImage?: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
    bgImageBlendMode?: Property.MixBlendMode
    bgImageOpacity?: Property.Opacity
    bgImagePosition?: Property.BackgroundPosition
    bgImageRepeat?: Property.BackgroundRepeat
    bgImageSize?: Property.BackgroundSize
    color?: Property.Color
    titleColor?: Property.Color
    headerModifier?: Modifier
    headerModifierMobile?: Modifier
    removeBottomPadding?: boolean
    embeddedImagesLocal: Array<Image>
  }
  fields: {
    slug: string
  }
}

export const query = graphql`
  fragment StudySection on Mdx {
    body
    frontmatter {
      name
      title
      client
      embeddedImagesLocal {
        ...Image
      }
      bgColor
      bgImage {
        ...Image
      }
      bgImageBlendMode
      bgImageOpacity
      bgImagePosition
      bgImageSize
      bgImageRepeat
      color
      titleColor
      headerModifier
      headerModifierMobile
      removeBottomPadding
    }
    fields {
      slug
    }
  }
`

export default StudySection
