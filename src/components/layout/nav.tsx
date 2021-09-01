import { Link, useStaticQuery, graphql } from 'gatsby'
import React, { useContext, useEffect, useRef } from 'react'
import Scrollbar from 'react-scrollbars-custom'
import { useState } from 'reinspect'
import { ContactFormContext } from '../../context/contact-form-context-provider'
import { NavContext } from '../../context/nav-context-provider'
import Image from '../image'
import StudyLogos from '../study/logos'

const routes = {
  '/': 'Home',
  '/work': 'Work',
  '/writing': 'Writing',
  '/projects': 'Open Source',
}

const Nav: React.FC = () => {
  const { navOpen, closeNav } = useContext(NavContext)
  const { contactFormOpen, openContactForm } = useContext(ContactFormContext)
  const [caseStudiesVisible, setCaseStudiesVisible] = useState(
    false,
    'Case studies visible'
  )

  const scrollbarRef = useRef(null)

  const setScrollbarRef = ref => {
    scrollbarRef.current = ref
  }

  const toggleCaseStudies = () => {
    setCaseStudiesVisible(visible => !visible)
  }

  useEffect(() => {
    if (!navOpen) {
      scrollbarRef.current.scrollToLeft()
      setTimeout(() => {
        setCaseStudiesVisible(false)
      }, 500)
    }
  }, [navOpen])

  useEffect(() => {
    if (!caseStudiesVisible) {
      scrollbarRef.current.scrollToLeft()
    }
  }, [caseStudiesVisible])

  const studies = useStaticQuery(graphql`
    {
      allMdx(filter: { fields: { type: { eq: "study" } } }) {
        nodes {
          slug
          fields {
            url
          }
          frontmatter {
            client
            title
            thumbnail {
              childImageSharp {
                gatsbyImageData(layout: FIXED)
              }
            }
            bgColor
            titleColor
          }
        }
      }
    }
  `)

  return (
    <nav
      className={`nav ${caseStudiesVisible && 'nav--case-studies-visible'}`}
      aria-hidden={!navOpen}
    >
      <div className="nav__container">
        <ul className="nav__list" aria-hidden={caseStudiesVisible}>
          {Object.keys(routes).map(route => (
            <li className="nav__item" key={route}>
              <Link className="nav__link" onClick={closeNav} to={route}>
                {routes[route]}
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
            ref={setScrollbarRef}
            disableTracksWidthCompensation
            style={{ width: '100%', height: '100%' }}
          >
            <ul className="nav__studies-list">
              {studies.allMdx.nodes.map(({ slug, fields, frontmatter }) => (
                <li className={`nav__study nav__study--${slug}`} key={slug}>
                  <Link
                    to={fields.url}
                    onClick={closeNav}
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
                </li>
              ))}
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
