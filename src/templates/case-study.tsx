/* eslint-disable react/jsx-props-no-spreading */

import React, { useCallback, useContext, useEffect } from 'react'
import { Link, graphql, PageProps } from 'gatsby'

import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import Image from '../components/image'
import Seo from '../components/seo'
import { CurrentClientContext } from '../context/current-client-provider'
import { animator } from '../helpers/animator'
import Study from '../types/study'
import PageHeader from '../components/page-header'
import StudySection from '../types/study-section'
import StudyLogos from '../components/study/logos'
import NextCaseStudy from '../components/next-case-study'
import Section from '../components/study/section'
import CaseStudyOutLink from '../components/study/out-link'

const shortcodes = { Image }

interface SiblingDataProps {
  slug
  frontmatter: {
    client: string
    title: string
    image: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
  fields: {
    url: string
  }
}

interface DataProps {
  previous?: SiblingDataProps
  next?: SiblingDataProps
  mdx: Study
  sections: {
    nodes: Array<StudySection>
  }
}

const CaseStudyTemplate: React.FC<PageProps<DataProps, Location>> = ({
  data,
  location,
}: PageProps<DataProps, Location>) => {
  const { study, next, sections } = data

  const { setCurrentClient } = useContext(CurrentClientContext)
  useEffect(() => {
    setCurrentClient(study.slug)
  }, [location, study.slug])

  const setRef = ref => {
    if (ref && 'section' in ref) {
      animator(ref.section)
    }
  }

  return (
    <>
      <Seo
        title={study.frontmatter.title}
        description={study.frontmatter.description || study.excerpt}
      />

      <article
        className="case-study"
        itemScope
        itemType="https://schema.org/Article"
      >
        <PageHeader
          ref={setRef}
          study={study}
          headerModifier={study.frontmatter?.headerModifier || 'white'}
          headerModifierMobile={
            study.frontmatter?.headerModifierMobile || 'white'
          }
        >
          <MDXProvider components={shortcodes}>
            <MDXRenderer
              frontmatter={study.frontmatter}
              images={study.frontmatter.embeddedImagesLocal}
            >
              {study.body}
            </MDXRenderer>
          </MDXProvider>

          <dl className="case-study__meta">
            <dt>Client</dt>
            <dd>{study.frontmatter.client}</dd>

            <dt>Role</dt>
            <dd>{study.frontmatter.role}</dd>

            <dt>Year</dt>
            <dd>{study.frontmatter.year}</dd>
          </dl>
        </PageHeader>

        {sections.nodes.map(section => (
          <Section section={section} key={section.slug} />
        ))}

        <CaseStudyOutLink study={study} />
      </article>

      {next && <NextCaseStudy study={next} />}
    </>
  )
}

export default CaseStudyTemplate

export const pageQuery = graphql`
  query CaseStudyById(
    $id: String!
    $slug: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    study: mdx(id: { eq: $id }) {
      slug
      body
      timeToRead
      frontmatter {
        title
        client
        url
        role
        year
        description
        thumbnail {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        embeddedImagesLocal {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        order
        headerModifier
        headerModifierMobile
        bgColor
        titleColor
        ctaFontSize
        ctaMaxWidth
        ctaButtonStyles
      }
      fields {
        url
        type
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      slug
      frontmatter {
        title
        client
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      fields {
        url
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      slug
      frontmatter {
        title
        client
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      fields {
        url
      }
    }
    sections: allMdx(
      sort: { fields: [fields___order], order: ASC }
      filter: {
        fields: { type: { eq: "study-section" }, client: { eq: $slug } }
      }
    ) {
      nodes {
        body
        frontmatter {
          title
          client
          embeddedImagesLocal {
            publicURL
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
          bgColor
          bgImage {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
          bgImageBlendMode
          bgImageOpacity
          bgImagePosition
          bgImageSize
          bgImageRepeat
          color
          titleColor
          headerModifier
          headerModifierMobile
        }
        fields {
          slug
        }
      }
    }
  }
`
