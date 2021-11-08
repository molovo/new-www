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
  caption?: string
  className?: string
}

const ImageWall: React.FC<Props> = ({
  images,
  caption = '',
  className = '',
}: Props) => (
  <section
    className={`image image--full-width ${
      caption ? 'image--with-caption' : ''
    } image-wall ${className}`}
  >
    {images.map(image => (
      <Image
        className="image-wall__image"
        image={image}
        alt=""
        key={
          image.publicURL ||
          image.childImageSharp?.gatsbyImageData?.images?.fallback?.src
        }
      />
    ))}

    {caption && <figcaption className="image__caption">{caption}</figcaption>}
  </section>
)

export default ImageWall
