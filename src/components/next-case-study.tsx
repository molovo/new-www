import { Link } from 'gatsby'
import React from 'react'
import PostSibling from '../types/post-sibling'
import Study from '../types/study'
import StudyLogos from './study/logos'

interface Props {
  study: Study | PostSibling
}

const NextCaseStudy = ({ study }: Props): JSX.Element => {
  const maskImage = study.frontmatter?.image?.childImageSharp?.gatsbyImageData
    ?.images?.fallback?.src
    ? `image(url(${study.frontmatter?.image?.childImageSharp?.gatsbyImageData?.images?.fallback?.src}))`
    : null
  return (
    <Link to={study.fields.url} className="next-case-study">
      <span
        className="next-case-study__client"
        style={{
          maskImage: maskImage || undefined,
        }}
      >
        {[1, 2, 3].map(i => (
          <span
            className="next-case-study__client-name"
            aria-hidden={i > 1}
            key={i}
          >
            {study.frontmatter.client}
          </span>
        ))}
      </span>

      <div className="next-case-study__content">
        <span className="next-case-study__label">Next Project</span>

        <StudyLogos client={study.slug} />

        <span className="next-case-study__title">
          {study.frontmatter.title}
        </span>
      </div>
    </Link>
  )
}

export default NextCaseStudy
