/* eslint-disable react/jsx-props-no-spreading */

import { GatsbyImage } from 'gatsby-plugin-image'
import React, {
  CSSProperties,
  forwardRef,
  Ref,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react'
import BaseImage from '../types/image'

interface Image extends BaseImage {
  sizes?: string
  width?: string
}

interface Props {
  images: Array<Image>
  alt: string
  caption: string
  style: CSSProperties
  fullWidth: boolean
  withPadding: boolean
  className: string
  sizes: string
  onScroll?: null | ((event: Event, images: Array<HTMLImageElement>) => void) // eslint-disable-line react/require-default-props
}

interface NestedImageProps {
  image: Image
  alt: string
}

export interface ImageGroupRef {
  readonly figure?: HTMLElement | null
  readonly images?: HTMLImageElement[]
}

const NestedImage = forwardRef(
  ({ image, alt }: NestedImageProps, ref: Ref<HTMLDivElement>) => (
    <div className="image__wrapper" ref={ref}>
      {(() => {
        if (image?.childImageSharp?.gatsbyImageData) {
          return (
            <GatsbyImage
              className="image__image"
              image={image.childImageSharp.gatsbyImageData}
              alt={alt}
              sizes={image.sizes ? image.sizes : '100vw'}
              imgStyle={{
                objectFit: 'unset',
                height: 'auto',
              }}
            />
          )
        }

        if (image?.publicURL) {
          return <img src={image.publicURL} alt={alt} />
        }

        return null
      })()}
    </div>
  )
)

const ImageGroup: React.FC<Props> = forwardRef(
  (
    {
      images,
      alt,
      caption = '',
      style = {} as CSSProperties,
      fullWidth = false,
      withPadding = false,
      className = '',
      onScroll = null,
      ...props
    }: Props,
    ref: Ref<ImageGroupRef>
  ) => {
    const figureRef = useRef<HTMLElement | null>(null)
    const imagesRef = useRef<HTMLImageElement[]>([])

    useImperativeHandle(ref, () => ({
      get figure() {
        return figureRef.current
      },

      get images() {
        return imagesRef.current
      },
    }))

    const pushImageRef = useCallback(imageRef => {
      imagesRef.current.push(imageRef)
    }, [])

    const handleScroll = useCallback(
      event => {
        if (onScroll && imagesRef) {
          onScroll(event, imagesRef.current)
        }
      },
      [onScroll]
    )

    useEffect(() => {
      if (onScroll) {
        window.addEventListener('scroll', handleScroll, { passive: true })
      }

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [images, handleScroll, onScroll, ref])

    return (
      <figure
        ref={figureRef}
        className={`image image--group ${
          fullWidth ? 'image--full-width' : ''
        } ${withPadding ? 'image--with-padding' : ''} ${
          caption ? 'image--with-caption' : ''
        } ${className}`}
        style={{
          ...style,
          gridTemplateColumns: images
            .map(image =>
              image.width ? `calc(${image.width} - 1.5em)` : '1fr'
            )
            .join(' '),
        }}
        {...props}
      >
        {images.map(image => (
          <NestedImage
            image={image}
            alt={alt}
            key={image.publicURL}
            ref={pushImageRef}
          />
        ))}

        {caption && (
          <figcaption className="image__caption">{caption}</figcaption>
        )}
      </figure>
    )
  }
)

export default ImageGroup
