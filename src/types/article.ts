import { graphql } from 'gatsby'
import Image from './image'
import { Modifier } from '../components/layout/header'

interface Article {
  id: string
  slug: string
  excerpt: string
  body: string
  timeToRead: number
  frontmatter: {
    title: string
    date: Date
    description: string
    embeddedImagesLocal: Array<Image>
    image: Image
    imageAltText: string
    imageFullSize: boolean
    headerModifier: Modifier
    headerModifierMobile: Modifier
  }
  fields: {
    url: string
    date: Date
    type: string
  }
}

export const query = graphql`
  fragment Article on Mdx {
    id
    excerpt(pruneLength: 160)
    body
    timeToRead
    frontmatter {
      title
      date(formatString: "MMMM DD, YYYY")
      description
      embeddedImagesLocal {
        ...Image
      }
      image {
        ...Image
      }
      imageAltText
      imageFullSize
      headerModifier
      headerModifierMobile
    }
    fields {
      url
      date
      type
    }
  }
`

export default Article
