/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import { Link } from 'gatsby'
import React from 'react'

interface Props {
  url: string
  label: string
  label_a11y?: string
  className?: string
  styles?: Array<string>
  type?: 'button' | 'submit' | 'reset'
}

const TextLink = ({
  url,
  label,
  label_a11y = undefined,
  className = '',
  styles = [],
  type = 'button',
  ...props
}: Props): JSX.Element => {
  const styleClasses = styles.map(style => `text-link--${style}`).join(' ')
  const classNameToUse = `text-link ${styleClasses} ${className}`

  if (url === undefined) {
    return (
      <button type={type} className={classNameToUse} {...props}>
        {label}
      </button>
    )
  }

  return (
    <Link className={classNameToUse} to={url} {...props}>
      {label_a11y && (
        <span className="screenreader-text text-link__label-a11y">
          {label_a11y}
        </span>
      )}
      <span className="text-link__label">{label}</span>
    </Link>
  )
}

export default TextLink
