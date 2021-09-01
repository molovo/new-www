import { Link } from 'gatsby'
import React, { useContext, useEffect, useRef } from 'react'
import { ContactFormContext } from '../../context/contact-form-context-provider'
import animate from '../../helpers/animate'
import { easeOutQuad } from '../../helpers/easing-functions'
import getMaxScroll from '../../helpers/get-max-scroll'
import Button from '../button'
import Logo from '../images/icons/logo'

const routes = {
  '/work': 'Work',
  '/writing': 'Writing',
  '/projects': 'Open Source',
}

const Footer: React.FC = () => {
  const ref = useRef(null)

  const { contactFormOpen, toggleContactForm, openContactForm } = useContext(
    ContactFormContext
  )

  const handleScroll = () => {
    const rect = ref.current.getBoundingClientRect()
    if (rect.bottom > window.innerHeight) {
      toggleContactForm()
      window.removeEventListener('scroll', handleScroll)
    }
  }

  // useEffect(() => {
  //   if (contactFormOpen) {
  //     window.addEventListener('scroll', handleScroll, { passive: true })
  //   }
  // }, [contactFormOpen])

  return (
    <footer
      ref={ref}
      className={`footer ${contactFormOpen && 'footer--show-contact'}`}
      data-header-modifier="red"
    >
      <div className="footer__content">
        <h2 className="footer__title">Let&apos;s build something awesome.</h2>

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
          {Object.keys(routes).map(route => (
            <li className="footer__item" key={route}>
              <Link className="footer__link" to={route}>
                {routes[route]}
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
      </nav>

      <div className="footer__end" data-header-modifier="white" />
    </footer>
  )
}

export default Footer
