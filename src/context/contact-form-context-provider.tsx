import React, { createContext, PropsWithChildren, ReactNode } from 'react'
import { useState } from 'reinspect'
import animate from '../helpers/animate'
import { easeOutQuad } from '../helpers/easing-functions'
import getMaxScroll from '../helpers/get-max-scroll'

export const ContactFormContext = createContext({
  contactFormOpen: false,
  toggleContactForm: () => {},
  openContactForm: () => {},
  closeContactForm: () => {},
})

export const ContactFormContextProvider = ({
  children,
}: PropsWithChildren<ReactNode>) => {
  const [contactFormOpen, setContactFormOpen] = useState(
    false,
    'Contact Form Open'
  )

  const toggleContactForm = () => {
    setContactFormOpen(open => !open)
  }

  const openContactForm = () => {
    setContactFormOpen(true)
    setTimeout(() => {
      animate(
        window.scrollY,
        getMaxScroll(),
        t => {
          window.scrollTo(0, t)
        },
        1500,
        easeOutQuad
      )

      const messageField = document.getElementById('contact-form-message')
      if (messageField) {
        messageField.focus()
      }
    }, 10)
  }

  const closeContactForm = () => {
    const contactForm = document.getElementById('contact-form')

    if (contactForm) {
      animate(
        window.pageYOffset,
        getMaxScroll() - window.innerHeight * 2 - 1,
        t => {
          window.scrollTo(0, t)
        },
        750,
        easeOutQuad
      ).then(_ => {
        setContactFormOpen(false)
      })
    }
  }

  return (
    <ContactFormContext.Provider
      value={{
        contactFormOpen,
        toggleContactForm,
        openContactForm,
        closeContactForm,
      }}
    >
      {children}
    </ContactFormContext.Provider>
  )
}

export default ContactFormContextProvider
