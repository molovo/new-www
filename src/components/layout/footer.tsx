import { Link } from 'gatsby'
import React, { useCallback, useContext, useEffect, useRef } from 'react'
import { ContactFormContext } from '../../context/contact-form-context-provider'
import Button from '../button'
import Logo from '../images/icons/logo'
import Social from '../social'

const ROUTES = {
  '/work': 'Work',
  '/writing': 'Writing',
  // '/projects': 'Open Source',
}

type Route = keyof typeof ROUTES

const Footer = (): JSX.Element => {
  const ref = useRef<HTMLElement>(null)

  const {
    contactFormOpen,
    toggleContactForm,
    closeContactForm,
    openContactForm,
  } = useContext(ContactFormContext)

  const handleScroll = useCallback(() => {
    if (!ref.current) {
      return
    }

    const rect = ref.current.getBoundingClientRect()
    if (rect.bottom > window.innerHeight) {
      toggleContactForm()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [closeContactForm]) as EventListener // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (contactFormOpen) {
      setTimeout(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
      }, 750)

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }

    window.removeEventListener('scroll', handleScroll)

    return () => {}
  }, [contactFormOpen, handleScroll])

  return (
    <footer
      ref={ref}
      className={`footer ${contactFormOpen ? 'footer--show-contact' : ''}`}
      data-header-modifier="red"
    >
      <div className="footer__content">
        <h2 className="footer__title">
          Let&apos;s make something great together.
        </h2>

        <Button
          className="footer__contact-form-toggle"
          onClick={openContactForm}
          aria-expanded={contactFormOpen}
          label="Get in touch"
        />
      </div>

      <nav className="footer__nav">
        <Link to="/" className="footer__home">
          <Logo />
        </Link>
        <ul className="footer__links">
          {Object.keys(ROUTES).map((route: string) => (
            <li className="footer__item" key={route}>
              <Link className="footer__link" to={route}>
                {ROUTES[route as Route]}
              </Link>
            </li>
          ))}

          <li className="footer__item">
            <span className="footer__link">|</span>
          </li>

          <li className="footer__item">
            <span className="footer__link">
              &copy; {new Date().getFullYear()} molovo.
            </span>
          </li>

          <li className="footer__item">
            <Link className="footer__link" to="/legal">
              Legal
            </Link>
          </li>
        </ul>

        <Social className="footer__social" />

        <div className="footer__end" data-header-modifier="white" />
      </nav>
    </footer>
  )
}

export default Footer
