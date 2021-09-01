import { IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'
import Image from './image'

interface Props {
  images: Array<{
    publicURL?: string
    childImageSharp?: {
      gatsbyImageData: IGatsbyImageData
    }
  }>
}

const ImageWall: React.FC<Props> = ({ images }: Props) => (
  <section className="image-wall">
    {images.map((image, i) => (
      <Image className="image-wall__image" image={image} alt="" key={i} />
    ))}
  </section>
)

export default ImageWall
