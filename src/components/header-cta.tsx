import React, { forwardRef, Ref } from 'react'
import { animator } from '../helpers/animator'
import Study from '../types/study'
import Button from './button'
import Image from './image'

interface Props {
  study: Study
  includeLink: boolean
  className: string
  title: string | null
}

const HeaderCta = forwardRef(
  (
    { study, title, includeLink = false, className = '' }: Props,
    ref: Ref<HTMLElement>
  ) => {
    const {
      frontmatter: {
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
          ref={animator}
          image={includeLink ? thumbnail : image}
          alt={client}
          sizes="(min-width: 63.75em) 50vw, 100vw"
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
              <span>{title || study.frontmatter.title}</span>
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
