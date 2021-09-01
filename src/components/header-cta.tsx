import React, { Component, forwardRef, Ref } from 'react'
import Study from '../types/study'
import Button from './button'
import Image from './image'
import { path } from './images/icons/anglepoise'

interface Props {
  study: Study
  includeLink: boolean
  className: string
}

const HeaderCta: React.FC<Props> = forwardRef(
  (
    { study, includeLink = false, className = '' }: Props,
    ref: Ref<Component>
  ) => {
    const {
      frontmatter: {
        title,
        client,
        thumbnail,
        image,
        bgColor,
        titleColor,
        ctaFontSize,
        ctaMaxWidth,
        ctaButtonStyles = [],
      },
      fields: { url },
    } = study

    return (
      <section
        ref={ref}
        className={`${className} header-cta`}
        style={bgColor && { backgroundColor: bgColor }}
      >
        <Image
          className="header-cta__image"
          image={includeLink ? thumbnail : image}
          alt={client}
        />

        <div className="header-cta__content">
          <>
            <h1
              className="header-cta__title"
              style={{
                color: titleColor,
                fontSize: ctaFontSize,
                maxWidth: ctaMaxWidth,
              }}
            >
              <span>{title}</span>
            </h1>

            {includeLink && (
              <Button
                className="header-cta__button"
                url={url}
                styles={ctaButtonStyles || []}
                label="Read the case study"
              />
            )}
          </>
        </div>
      </section>
    )
  }
)

export default HeaderCta
