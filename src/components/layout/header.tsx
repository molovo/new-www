import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'gatsby'
import { LiveNodeList } from 'live-node-list'
import Logo from '../images/icons/logo'
import NavToggle from '../nav-toggle'
import { NavContext } from '../../context/nav-context-provider'
import { CurrentClientContext } from '../../context/current-client-provider'
import StudyLogos from '../study/logos'
import { ContactFormContext } from '../../context/contact-form-context-provider'

export const Modifiers = {
  black: 'black',
  'black-red': 'black-red',
  'black-white': 'black-white',
  red: 'red',
  'red-white': 'red-white',
  white: 'white',
  'white-red': 'white-red',
}

export type Modifier = keyof typeof Modifiers

const Header = (): JSX.Element => {
  const { navOpen, closeNav } = useContext(NavContext)
  const { currentClient } = useContext(CurrentClientContext)
  const { contactFormOpen, closeContactForm } = useContext(ContactFormContext)

  const [padding, setPadding] = useState(4.5)
  const [modifier, setModifier] = useState(Modifiers.red)

  const ref = useRef<HTMLElement>(null)
  const modifierElements = useRef<typeof LiveNodeList | null>(null)

  const setHeaderModifier = () => {
    if (navOpen) {
      setModifier(Modifiers.white)

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
          50 +
            parseInt(
              (element.dataset.headerModifierOffset as string) || '0',
              10
            )
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
            Modifiers[element.dataset.headerModifierMobile as Modifier] ||
              Modifiers.red
          )

          return
        }

        setModifier(
          Modifiers[element.dataset.headerModifier as Modifier] || Modifiers.red
        )
      }
    })
  }

  const setHeaderPadding = () => {
    const pct = window.pageYOffset / (window.innerHeight / 2)
    const newPadding = Math.max(1.5, 4.5 - 3 * pct)

    if (newPadding !== padding) {
      setPadding(newPadding)
    }
  }

  useEffect(() => {
    setHeaderPadding()
    window.addEventListener('scroll', setHeaderPadding, { passive: true })

    if (!modifierElements.current) {
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
    }

    return () => {
      window.removeEventListener('scroll', setHeaderPadding)
    }
  })

  return (
    <header
      className={`header header--${modifier} ${navOpen ? 'header--white' : ''}`}
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
