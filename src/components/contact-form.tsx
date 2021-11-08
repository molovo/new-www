import { MessageSendingResponse } from 'postmark/dist/client/models'
import React, { useCallback, useContext, useRef } from 'react'
import { useState } from 'reinspect'
import { ContactFormContext } from '../context/contact-form-context-provider'
import useAsync from '../hooks/use-async'
import Button from './button'
import Social from './social'

const getLabel = (status = 'idle') => {
  switch (status) {
    case 'pending':
      return 'Processing ⋯'

    case 'success':
      return '✓'

    default:
      return 'Send message'
  }
}

const ContactForm = (): JSX.Element => {
  const { contactFormOpen } = useContext(ContactFormContext)

  const formRef = useRef<HTMLFormElement>(null)

  const [email, setEmail] = useState<string | null>(null, 'Contact form email')
  const [message, setMessage] = useState<string | null>(
    null,
    'Contact form message'
  )

  const submit = useCallback(
    async (event: Event) => {
      event.preventDefault()

      try {
        const data = (await fetch('/api/contact', {
          headers: {
            contentType: 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({ email, message }),
        }).then((response: Response) =>
          response.json()
        )) as MessageSendingResponse

        return data.Message === 'OK'
      } catch (err) {
        console.error(err)

        throw err
      }
    },
    [email, message]
  )

  const { execute, status, error } = useAsync<boolean, string>(submit, false, [
    contactFormOpen,
  ])

  const inputId = 'contact-form-message'
  const emailId = 'contact-form-email'

  return (
    <section
      className="contact-form"
      id="contact-form"
      aria-hidden={!contactFormOpen}
      aria-labelledby="contact-form-title"
    >
      {status === 'success' && (
        <div className="form contact-form__form">
          <h2 className="contact-form__title">Thanks for getting in touch.</h2>
          <p className="contact-form__success-message">
            I&apos;ll get back to you soon.
          </p>
          <Social className="contact-form__social" />
        </div>
      )}

      {status !== 'success' && (
        <>
          <h2
            className="contact-form__title screenreader-text"
            id="contact-form-title"
          >
            Contact
          </h2>

          <form
            className="form contact-form__form"
            ref={formRef}
            onSubmit={execute}
          >
            <div className="form__group">
              <label htmlFor={inputId}>
                <span className="form__label">Dear James,</span>

                <textarea
                  name="message"
                  id={inputId}
                  value={message as string}
                  className="form__input"
                  placeholder="What can I do for you?"
                  disabled={status === 'pending'}
                  onChange={event =>
                    setMessage((event.target as HTMLTextAreaElement).value)
                  }
                />
              </label>
            </div>

            <div className="form__row">
              <div className="form__group form__group--inline">
                <label htmlFor={emailId}>
                  <span className="form__label">What&apos;s your email?</span>

                  <input
                    name="email"
                    type="email"
                    id={emailId}
                    value={email as string}
                    className="form__input"
                    placeholder="joe@bloggs.com"
                    disabled={status === 'pending'}
                    onChange={event =>
                      setEmail((event.target as HTMLInputElement).value)
                    }
                  />
                </label>
              </div>

              <Button
                type="submit"
                label={getLabel(status)}
                disabled={status === 'pending'}
              />
            </div>

            {error && (
              <span className="form__error">
                Sorry, something went wrong. Please try again
              </span>
            )}
          </form>
        </>
      )}
    </section>
  )
}

export default ContactForm
