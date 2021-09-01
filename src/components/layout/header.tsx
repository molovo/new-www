import React, { useContext, useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import { LiveNodeList } from 'live-node-list'
import { useState } from 'reinspect'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
// eslint-disable-next-line import/no-extraneous-dependencies
import { sentenceCase } from 'sentence-case'
import Logo from '../images/icons/logo'
import NavToggle from '../nav-toggle'
import { NavContext } from '../../context/nav-context-provider'
import { CurrentClientContext } from '../../context/current-client-provider'
import StudyLogos from '../study/logos'
import { ContactFormContext } from '../../context/contact-form-context-provider'

interface PageProps {
  location: Location
  crumbs: Array<{ pathname: string, crumbLabel: string }>
}

const modifiers = {
  red: 'red',
  'white-red': 'white-red',
  'red-white': 'red-white',
  'black-red': 'black-red',
  'black-white': 'black-white',
  black: 'black',
  white: 'white',
}

const Header: React.FC<PageProps> = ({ location, crumbs }: PageProps) => {
  const { navOpen, closeNav } = useContext(NavContext)
  const { currentClient } = useContext(CurrentClientContext)
  const { contactFormOpen, closeContactForm } = useContext(ContactFormContext)

  const [, setState] = useState(false, 'Header render trigger')
  const [padding, setPadding] = useState(4.5, 'Header padding')
  const [modifier, setModifier] = useState(modifiers.red, 'Header modifier')

  const ref = useRef()
  const modifierElements = useRef()

  if (crumbs) {
    // eslint-disable-next-line no-param-reassign
    crumbs = crumbs.map(({ pathname, crumbLabel }) => ({
      pathname,
      crumbLabel: sentenceCase(crumbLabel),
    }))
  }

  const setHeaderModifier = () => {
    if (navOpen) {
      setModifier(modifiers.white)

      return
    }

    if (
      !modifierElements.current ||
      modifierElements.current.items.length === 0
    ) {
      return
    }

    const { items } = modifierElements.current

    requestAnimationFrame(() => {
      let i = items.length - 1
      let element = items[i]
      while (
        element &&
        element.getBoundingClientRect().top >
          50 + parseInt(element.dataset.headerModifierOffset || 0, 10)
      ) {
        i -= 1
        element = items[i]
      }

      if (element) {
        if (
          'headerModifierMobile' in element.dataset &&
          window.matchMedia('(max-width: 60em)').matches
        ) {
          setModifier(
            modifiers[element.dataset.headerModifierMobile] || modifiers.red
          )

          return
        }

        setModifier(modifiers[element.dataset.headerModifier] || modifiers.red)
      }
    })
  }

  const setHeaderPadding = () => {
    const pct = window.pageYOffset / (window.innerHeight / 2)
    setPadding(Math.max(1.5, 4.5 - 3 * pct))
  }

  useEffect(() => {
    setHeaderPadding()
    window.addEventListener('scroll', setHeaderPadding, { passive: true })

    modifierElements.current = new LiveNodeList('[data-header-modifier]')
    modifierElements.current.on('update', () => {
      setHeaderModifier()
    })

    setHeaderModifier()
    modifierElements.current.addDelegatedEventListener(
      window,
      'scroll',
      setHeaderModifier
    )
  })

  useEffect(() => {
    setState(value => !value)
  }, [location, currentClient, setState])

  return (
    <header
      className={`header header--${modifier} ${
        navOpen ? 'header--white' : null
      }`}
      role="banner"
      ref={ref}
      style={{ paddingTop: `${padding}em` }}
    >
      <Link className="header__home" to="/" onClick={closeNav}>
        {currentClient && !navOpen && !contactFormOpen ? (
          <StudyLogos client={currentClient} className="header__study-logos" />
        ) : (
          <Logo />
        )}
      </Link>

      {crumbs && !navOpen && !contactFormOpen && (
        <Breadcrumb location={location} crumbs={crumbs} hiddenCrumbs={['/']} />
      )}

      {contactFormOpen ? (
        <button
          type="button"
          onClick={closeContactForm}
          className="header__contact-form-close"
        >
          ⇡
        </button>
      ) : (
        <NavToggle className="header__nav-toggle" />
      )}
    </header>
  )
}

export default Header
