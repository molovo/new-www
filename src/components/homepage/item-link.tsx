import React from 'react'
import TextLink from '../text-link'

interface Props {
  title: string
  text: string
  url: string
  linkText: string
  className: string
}

const ItemLink: React.FC<Props> = ({
  title,
  text,
  url,
  linkText,
  className = '',
}: Props) => (
  <article className={`${className} item-link`}>
    <h3 className="item-link__title">{title}</h3>
    <p className="item-link__text">{text}</p>

    <TextLink url={url} label={linkText} className="item-link__button" />
  </article>
)

export default ItemLink
