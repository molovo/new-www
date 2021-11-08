import React, {
  createContext,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
} from 'react'
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
}: PropsWithChildren<ReactNode>): JSX.Element => {
  const contactForm = useRef<HTMLElement | null>(null)
  const [contactFormOpen, setContactFormOpen] = useState(
    false,
    'Contact Form Open'
  )

  useEffect(() => {
    if (!contactForm.current) {
      contactForm.current = document.getElementById('contact-form')
    }
  }, [contactForm])

  const toggleContactForm = () => {
    setContactFormOpen(open => !open)
  }

  const openContactForm = useCallback(async () => {
    window.scrollTo(0, getMaxScroll())
    setContactFormOpen(true)

    await animate(
      window.scrollY,
      getMaxScroll(),
      (t: number) => {
        window.scrollTo(0, t)
      },
      750,
      easeOutQuad
    )

    const messageField = document.getElementById('contact-form-message')
    if (messageField) {
      messageField.focus()
    }
  }, [])

  const closeContactForm = useCallback(async () => {
    if (contactForm.current) {
      await animate(
        window.scrollY,
        getMaxScroll() - window.innerHeight * 2 - 1,
        (t: number) => {
          window.scrollTo(0, t)
        },
        750,
        easeOutQuad
      ).then(() => {
        setContactFormOpen(false)
      })
    }
  }, [])

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
