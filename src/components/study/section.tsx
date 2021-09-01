import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import StudySection from '../../types/study-section'
import Image from '../image'
import ImageWall from '../image-wall'

interface Props {
  section: StudySection
}

const shortcodes = { Image, ImageWall }

const Section = ({ section }: Props) => {
  const title = section.frontmatter.title.replace(
    /_([^_]+)_/g,
    '<span class="swash">$1</span>'
  )

  return (
    <section
      className={`case-study__section case-study__section--${section.fields.slug}`}
      key={section.fields.slug}
      style={{
        background: section.frontmatter.bgColor,
      }}
      data-header-modifier={section.frontmatter.headerModifier}
      data-header-modifier-mobile={section.frontmatter.headerModifierMobile}
    >
      {section.frontmatter.bgImage && (
        <div
          className="case-study__section-background"
          style={{
            backgroundImage: `url(
              ${section.frontmatter.bgImage?.childImageSharp?.gatsbyImageData?.images?.fallback?.src}
            )`,
            opacity: section.frontmatter.bgImageOpacity || '1',
            backgroundPosition: section.frontmatter.bgImagePosition || 'center',
            backgroundRepeat: section.frontmatter.bgImageRepeat || 'no-repeat',
            backgroundSize: section.frontmatter.bgImageSize || 'cover',
            mixBlendMode: section.frontmatter.bgImageBlendMode || 'normal',
          }}
        />
      )}

      <h2
        className="case-study__section-title"
        style={{
          color: section.frontmatter.titleColor,
        }}
        dangerouslySetInnerHTML={{ __html: title }}
      />

      <div className="case-study__section-content">
        <MDXProvider components={shortcodes}>
          <MDXRenderer
            frontmatter={section.frontmatter}
            images={section.frontmatter.embeddedImagesLocal}
          >
            {section.body}
          </MDXRenderer>
        </MDXProvider>
      </div>
    </section>
  )
}

export default Section
