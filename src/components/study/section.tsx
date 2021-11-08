import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import StudySection from '../../types/study-section'
import MdxOverrides from '../mdx-overrides'

interface Props {
  section: StudySection
}

const Section = ({ section }: Props): JSX.Element => {
  const title = section.frontmatter.title.replace(
    /_([^_]+)_/g,
    '<span class="swash">$1</span>'
  )

  return (
    <section
      className={`case-study__section case-study__section--${section.fields.slug}`}
      id={section.fields.slug}
      key={section.fields.slug}
      style={{
        background: section.frontmatter.bgColor,
        color: section.frontmatter.color,
        ...(section.frontmatter.removeBottomPadding && { paddingBottom: 0 }),
      }}
      data-header-modifier={section.frontmatter.headerModifier}
      data-header-modifier-mobile={section.frontmatter.headerModifierMobile}
    >
      {section.frontmatter.bgImage && (
        <div
          className="case-study__section-background"
          style={{
            backgroundImage: `url(
              ${
                section.frontmatter.bgImage?.childImageSharp?.gatsbyImageData
                  ?.images?.fallback?.src || ''
              }
            )`,
            opacity: section.frontmatter.bgImageOpacity || '1',
            backgroundPosition: section.frontmatter.bgImagePosition || 'center',
            backgroundRepeat: section.frontmatter.bgImageRepeat || 'no-repeat',
            backgroundSize: section.frontmatter.bgImageSize || 'cover',
            mixBlendMode: section.frontmatter.bgImageBlendMode || 'normal',
          }}
        />
      )}

      <span className="case-study__section-name">
        {section.frontmatter.name}
      </span>

      <h2
        className="case-study__section-title"
        style={{
          color: section.frontmatter.titleColor,
        }}
        dangerouslySetInnerHTML={{ __html: title }} // eslint-disable-line react/no-danger
      />

      <div className="case-study__section-content">
        <MDXProvider components={MdxOverrides}>
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
