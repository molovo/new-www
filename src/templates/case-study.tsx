/* eslint-disable react/jsx-props-no-spreading */

import React, { useCallback, useContext, useEffect } from 'react'
import { graphql, PageProps } from 'gatsby'

import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Seo from '../components/seo'
import { CurrentClientContext } from '../context/current-client-provider'
import { animator } from '../helpers/animator'
import Study from '../types/study'
import PageHeader, { PageHeaderRef } from '../components/page-header'
import StudySection from '../types/study-section'
import NextCaseStudy from '../components/next-case-study'
import Section from '../components/study/section'
import CaseStudyNav from '../components/study/nav'
import PostSibling from '../types/post-sibling'
import MdxOverrides from '../components/mdx-overrides'

interface DataProps {
  previous?: PostSibling
  next?: PostSibling
  study: Study
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
  }, [location, study.slug, setCurrentClient])

  const setRef = useCallback((ref: PageHeaderRef) => {
    if (ref && 'section' in ref) {
      animator(ref.section)
    }
  }, [])

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
          title={study.frontmatter.client}
          study={study}
          headerModifier={study.frontmatter?.headerModifier || 'white'}
          headerModifierMobile={
            study.frontmatter?.headerModifierMobile || 'white'
          }
        >
          <MDXProvider components={MdxOverrides}>
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

        <CaseStudyNav sections={sections.nodes} />

        {sections.nodes.map(section => (
          <Section section={section} key={section.fields.slug} />
        ))}
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
      ...Study
    }
    previous: mdx(id: { eq: $previousPostId }) {
      ...PostSibling
    }
    next: mdx(id: { eq: $nextPostId }) {
      ...PostSibling
    }
    sections: allMdx(
      sort: { fields: [fields___order], order: ASC }
      filter: {
        fields: { type: { eq: "study-section" }, client: { eq: $slug } }
      }
    ) {
      nodes {
        ...StudySection
      }
    }
  }
`
