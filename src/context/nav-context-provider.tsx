import React, {
  createContext,
  PropsWithChildren,
  ReactNode,
  useEffect,
} from 'react'
import { useState } from 'reinspect'

export const NavContext = createContext({
  navOpen: false,
  toggleNav: () => {},
  closeNav: () => {},
})

export const NavContextProvider = ({
  children,
}: PropsWithChildren<ReactNode>) => {
  const [navOpen, setNavOpen] = useState(false, 'Nav Open')

  const toggleNav = () => {
    setNavOpen(open => !open)
  }

  const closeNav = () => {
    // Blur all links to ensure focus-within styles aren't applied
    // after closing the nav
    const link = document.activeElement
    if (link.closest('.nav')) {
      link.blur()
    }

    setNavOpen(false)
  }

  return (
    <NavContext.Provider value={{ navOpen, toggleNav, closeNav }}>
      {children}
    </NavContext.Provider>
  )
}

export default NavContextProvider
