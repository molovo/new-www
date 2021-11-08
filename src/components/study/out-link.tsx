import React from 'react'
import Study from '../../types/study'
import ArrowUpRight from '../images/icons/arrow-up-right'

interface Props {
  study: Study
}

const CaseStudyOutLink: React.FC<Props> = ({
  study: {
    frontmatter: { url, client },
  },
}: Props) => {
  if (!url) {
    return null
  }

  return (
    <div className="case-study__out-link-wrapper">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="case-study__out-link"
      >
        <span className="case-study__out-link-label">Visit {client}</span>
        <ArrowUpRight />
      </a>
    </div>
  )
}

export default CaseStudyOutLink
