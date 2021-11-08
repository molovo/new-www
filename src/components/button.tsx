/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import { Link } from 'gatsby'
import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  url?: string
  label_a11y?: string
  className?: string
  onClick?: () => void
  styles?: Array<string>
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({
  label,
  url,
  label_a11y,
  className = '',
  onClick = () => {},
  styles = [],
  type = 'button',
}: Props): JSX.Element => {
  const styleClasses = styles.map(style => `button--${style}`).join(' ')
  const classNameToUse = `button ${styleClasses} ${className}`

  if (url === undefined) {
    return (
      <button type={type} className={classNameToUse} onClick={onClick}>
        {label}
      </button>
    )
  }

  return (
    <Link className={classNameToUse} to={url}>
      {label_a11y && (
        <span className="screenreader-text button__label-a11y">
          {label_a11y}
        </span>
      )}
      <span className="button__label">{label}</span>
    </Link>
  )
}

export default Button
