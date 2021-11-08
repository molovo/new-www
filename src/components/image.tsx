/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */

import { StandardProperties } from 'csstype'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React, { forwardRef, Ref } from 'react'

interface Props {
  image: {
    publicURL?: string
    childImageSharp?: {
      gatsbyImageData: IGatsbyImageData
    }
  }
  alt: string
  caption?: string
  fullWidth?: boolean
  withPadding?: boolean
  className?: string
  sizes?: string
  style?: StandardProperties
}

const Image = forwardRef(
  (
    {
      image,
      alt,
      caption = '',
      fullWidth = false,
      withPadding = false,
      className = '',
      sizes = '100vw',
      style = {},
      ...props
    }: Props,
    ref: Ref<HTMLElement>
  ) => (
    <figure
      ref={ref}
      className={`image ${fullWidth ? 'image--full-width' : ''} ${
        withPadding ? 'image--with-padding' : ''
      } ${caption ? 'image--with-caption' : ''} ${className}`}
      style={style}
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
)

export default Image
