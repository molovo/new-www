import React, {
  createContext,
  PropsWithChildren,
  ReactNode,
  useCallback,
} from 'react'
import { useState } from 'reinspect'

export const NavContext = createContext({
  navOpen: false,
  toggleNav: () => {},
  closeNav: () => {},
})

export const NavContextProvider = ({
  children,
}: PropsWithChildren<ReactNode>): JSX.Element => {
  const [navOpen, setNavOpen] = useState(false, 'Nav Open')

  const toggleNav = useCallback(() => {
    setNavOpen(open => !open)
  }, [])

  const closeNav = useCallback(() => {
    // Blur all links to ensure focus-within styles aren't applied
    // after closing the nav
    const link: HTMLElement = document.activeElement as HTMLElement
    if (link.closest('.nav') && 'blur' in link) {
      link.blur()
    }

    setNavOpen(false)
  }, [])

  return (
    <NavContext.Provider value={{ navOpen, toggleNav, closeNav }}>
      {children}
    </NavContext.Provider>
  )
}

export default NavContextProvider
