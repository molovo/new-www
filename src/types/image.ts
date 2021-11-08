import { graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

interface Image {
  publicURL?: string
  childImageSharp?: {
    gatsbyImageData: IGatsbyImageData
  }
}

export const query = graphql`
  fragment Image on File {
    publicURL
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
`

export default Image
