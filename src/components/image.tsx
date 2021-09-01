/* eslint-disable react/jsx-props-no-spreading */

import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'

interface Props {
  image: {
    publicURL?: string
    childImageSharp?: {
      gatsbyImageData: IGatsbyImageData
    }
  }
  alt: string
  caption: string
  fullWidth: boolean
  className: string
  sizes: string
}

const Image: React.FC<Props> = ({
  image,
  alt,
  caption = '',
  fullWidth = false,
  className = '',
  sizes = '100vw',
  ...props
}: Props) => (
  <figure
    className={`image ${fullWidth ? 'image--full-width' : ''} ${className}`}
    {...props}
  >
    {(() => {
      if (image?.childImageSharp?.gatsbyImageData) {
        return (
          <GatsbyImage
            className="image__image"
            image={image.childImageSharp.gatsbyImageData}
            alt={alt}
            sizes={sizes}
          />
        )
      }

      if (image?.publicURL) {
        return <img src={image.publicURL} alt={alt} />
      }

      return null
    })()}

    {caption && <figcaption className="image__caption">{caption}</figcaption>}
  </figure>
)

export default Image
