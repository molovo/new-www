import React, { PropsWithChildren, useContext } from 'react'
import { NavContext } from '../context/nav-context-provider'

interface Props {
  className: string
}

const NavToggle: React.FC<Props> = ({ className = '' }: Props) => {
  const { navOpen, toggleNav } = useContext(NavContext)

  return (
    <button
      type="button"
      className={`${className} nav-toggle`}
      onClick={toggleNav}
      aria-controls="nav"
      aria-expanded={navOpen}
    >
      <span className="screenreader-text">
        {navOpen ? 'Close nav' : 'Open nav'}
      </span>
    </button>
  )
}

export default NavToggle
