import React from 'react'
import Blockquote from './blockquote'
import Image from './image'
import ImageGroup from './image-group'
import ImageWall from './image-wall'

interface Props {
  src: string
  alt: string
}

const MdxOverrides = {
  Image,
  ImageGroup,
  ImageWall,
  img: ({ src, alt }: Props): JSX.Element => (
    <Image image={{ publicURL: src }} alt={alt} caption={alt} />
  ),
  blockquote: Blockquote,
}

export default MdxOverrides
