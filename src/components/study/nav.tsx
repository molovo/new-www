import React, { useCallback, useEffect, useRef } from 'react'
import { useState } from 'reinspect'
import { LiveNodeList } from 'live-node-list'
import StudySection from '../../types/study-section'

interface Props {
  sections: Array<StudySection>
}

const CaseStudyNav = ({ sections = [] }: Props): JSX.Element => {
  const sectionElements = useRef<typeof LiveNodeList | null>(null)
  const [active, setActive] = useState<string>(
    sections[0]?.fields?.slug,
    'Active section'
  )

  const setActiveSection = useCallback(() => {
    if (!sectionElements.current) {
      return
    }

    const elements: Array<Element> = Array.from(sectionElements.current.items)

    let i = elements.length - 1
    let el: Element | null = elements[i]
    let { top } = el?.getBoundingClientRect() || { top: 0 }
    while (top > window.innerHeight / 2) {
      i -= 1
      el = elements[i]
      top = el?.getBoundingClientRect()?.top || 0
    }

    if (el) {
      setActive(el.id)
    }
  }, [setActive])

  useEffect(() => {
    if (!sectionElements.current) {
      sectionElements.current = new LiveNodeList('.case-study__section')
    }

    const elements = sectionElements.current

    elements.addDelegatedEventListener(window, 'scroll', setActiveSection, {
      passive: true,
    })

    return () => {
      if (!elements) {
        return
      }

      elements.removeDelegatedEventListener(window, 'scroll', setActiveSection)
    }
  }, [setActiveSection])

  return (
    <nav className="case-study-nav">
      <ol className="case-study-nav__list">
        {sections.map(({ fields: { slug }, frontmatter: { name } }) => (
          <li key={slug} className="case-study-nav__item">
            <a
              href={`#${slug}`}
              className={`case-study-nav__link ${
                active === slug ? 'case-study-nav__link--active' : ''
              }`}
            >
              {name.split(' ').shift()}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default CaseStudyNav
