import { Link, useStaticQuery, graphql } from 'gatsby'
import React, { useCallback, useContext, useEffect, useRef } from 'react'
import Scrollbar from 'react-scrollbars-custom'
import { useState } from 'reinspect'
import { ContactFormContext } from '../../context/contact-form-context-provider'
import { NavContext } from '../../context/nav-context-provider'
import useLockBodyScroll from '../../hooks/use-lock-body-scroll'
import Study from '../../types/study'
import Image from '../image'
import StudyLogos from '../study/logos'

const ROUTES = {
  '/': 'Home',
  '/work': 'Work',
  '/writing': 'Writing',
}

type Route = keyof typeof ROUTES

interface StudyLinkProps {
  slug: string
  study: Study
  scrollerWidth: number
  scrollPosition: number
}

const StudyLink = ({
  slug,
  study: { fields, frontmatter },
  scrollerWidth,
  scrollPosition,
}: StudyLinkProps) => {
  const pos = -12.5 + (scrollPosition / scrollerWidth) * 25

  return (
    <Link
      to={fields.url}
      className="nav__study-link"
      style={
        frontmatter.bgColor && {
          backgroundColor: frontmatter.bgColor,
        }
      }
    >
      <Image
        className="nav__study-image"
        image={frontmatter.thumbnail}
        alt={frontmatter.client}
        style={{ transform: `translate3d(${pos}%, 0, 0)` }}
        sizes="(min-width: 45em) 60vh, 60vw"
        data-pos={scrollPosition}
      />

      <StudyLogos client={slug} />
      <h2 className="nav__study-client">{frontmatter.client}</h2>
      <h3
        className="nav__study-title"
        style={
          frontmatter.titleColor && {
            color: frontmatter.titleColor,
          }
        }
      >
        {frontmatter.title}
      </h3>
    </Link>
  )
}

const ContactLink = () => {
  const { closeNav } = useContext(NavContext)
  const { openContactForm } = useContext(ContactFormContext)

  return (
    <button
      type="button"
      onClick={() => {
        openContactForm()
        closeNav()
      }}
      className="nav__study-link nav__study-link--contact"
    >
      <StudyLogos client="contact" />
      <h2 className="nav__study-client">Get in touch</h2>
      <h3 className="nav__study-title">Let&apos;s work together</h3>
    </button>
  )
}

const Nav: React.FC = () => {
  const scrollbar = useRef(null)
  const menu = useRef<HTMLUListElement | null>(null)

  const { navOpen, closeNav } = useContext(NavContext)
  const { openContactForm } = useContext(ContactFormContext)
  const [caseStudiesVisible, setCaseStudiesVisible] = useState(
    false,
    'Case studies visible'
  )

  const [scrollerWidth, setScrollerWidth] = useState<number>(
    0,
    'Scroller width'
  )
  const [scrollPosition, setScrollPosition] = useState<number>(
    0,
    'Scroll position'
  )

  const transformImage = useCallback(() => {
    const scroller = ((scrollbar.current as unknown) as Scrollbar)
      ?.scrollerElement

    if (scroller) {
      setScrollerWidth(scroller.scrollWidth - scroller.clientWidth)
      setScrollPosition(scroller.scrollLeft || 0)
    }
  }, [setScrollerWidth, setScrollPosition, scrollbar])

  useEffect(() => {
    const scroller = ((scrollbar.current as unknown) as Scrollbar)
      ?.scrollerElement

    if (!scroller) {
      return () => {}
    }

    scroller.addEventListener('resize', transformImage)
    scroller.addEventListener('scroll', transformImage)

    return () => {
      scroller.removeEventListener('resize', transformImage)
      scroller.removeEventListener('scroll', transformImage)
    }
  }, [scrollbar, navOpen, transformImage])

  const toggleCaseStudies = () => {
    setCaseStudiesVisible(visible => !visible)
  }

  useLockBodyScroll(navOpen)

  useEffect(() => {
    if (!navOpen && scrollbar.current) {
      ;((scrollbar.current as unknown) as Scrollbar).scrollToLeft()
      setTimeout(() => {
        setCaseStudiesVisible(false)
      }, 500)
    }
  }, [navOpen])

  useEffect(() => {
    if (scrollbar.current) {
      ;((scrollbar.current as unknown) as Scrollbar).scrollToLeft()
    }
  }, [caseStudiesVisible])

  type QueryResult = {
    studies: {
      nodes: Study[]
    }
  }
  const query: QueryResult = useStaticQuery(graphql`
    {
      studies: allMdx(
        filter: { fields: { type: { eq: "study" } } }
      ) # sort: { fields: [frontmatter___order], order: ASC }
      {
        nodes {
          ...Study
        }
      }
    }
  `)
  const studies: Study[] = query?.studies?.nodes || []

  return (
    <nav
      className={`nav ${caseStudiesVisible ? 'nav--case-studies-visible' : ''}`}
      aria-hidden={!navOpen}
    >
      <div className="nav__container">
        <ul className="nav__list" aria-hidden={caseStudiesVisible} ref={menu}>
          {Object.keys(ROUTES).map(route => (
            <li className="nav__item" key={route}>
              <Link className="nav__link" to={route}>
                {ROUTES[route as Route]}
              </Link>
            </li>
          ))}

          <li className="nav__item" key="contact">
            <button
              type="button"
              className="nav__link"
              onClick={() => {
                closeNav()
                setTimeout(openContactForm, 250)
              }}
            >
              Contact
            </button>
          </li>
        </ul>

        <div className="nav__studies">
          <Scrollbar
            ref={scrollbar}
            disableTracksWidthCompensation
            style={{ width: '100%', height: '100%' }}
          >
            <ul className="nav__studies-list">
              {studies.map((study: Study) => (
                <li
                  className={`nav__study nav__study--${study.slug}`}
                  key={study.slug}
                >
                  <StudyLink
                    slug={study.slug}
                    study={study}
                    scrollerWidth={scrollerWidth}
                    scrollPosition={scrollPosition}
                  />
                </li>
              ))}

              <li className="nav__study nav__study--contact" key="contact">
                <ContactLink />
              </li>
            </ul>
          </Scrollbar>

          <button
            type="button"
            className="nav__studies-link"
            onClick={toggleCaseStudies}
          >
            {caseStudiesVisible ? '⟵ Back to menu' : 'See all case studies ⟶'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Nav
