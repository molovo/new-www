import React, { useContext } from 'react'
import { ContactFormContext } from '../context/contact-form-context-provider'
import Button from './button'

const ContactForm: React.FC = () => {
  const { contactFormOpen } = useContext(ContactFormContext)

  return (
    <section
      className="contact-form"
      id="contact-form"
      aria-hidden={!contactFormOpen}
      aria-labelledby="contact-form-title"
    >
      <h2
        className="contact-form__title screenreader-text"
        id="contact-form-title"
      >
        Contact
      </h2>

      <form className="form contact-form__form">
        <div className="form__group">
          <label className="form__label" htmlFor="contact-form-message">
            Dear James,
          </label>
          <textarea
            name="message"
            id="contact-form-message"
            className="form__input"
            placeholder="What can I do for you?"
          />
        </div>

        <div className="form__row">
          <div className="form__group form__group--inline">
            <label className="form__label" htmlFor="contact-form-email">
              What&apos;s your email?
            </label>

            <input
              name="email"
              type="email"
              id="contact-form-email"
              className="form__input"
              placeholder="joe@bloggs.com"
            />
          </div>

          <Button type="submit" label="Send message" />
        </div>
      </form>
    </section>
  )
}

export default ContactForm
