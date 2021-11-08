import React, { ReactNode, useContext, useEffect } from 'react'
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'
import Helmet from 'react-helmet'
import Header from './layout/header'
import Nav from './layout/nav'
import Footer from './layout/footer'
import ContactForm from './contact-form'
import { NavContext } from '../context/nav-context-provider'
import smoothScroll from '../helpers/smooth-scroll'

void deckDeckGoHighlightElement()

interface Props {
  location: Location
  children: Array<ReactNode>
}

const Layout = ({ location, children }: Props): JSX.Element => {
  const { closeNav } = useContext(NavContext)
  const { pathname } = location

  useEffect(() => {
    smoothScroll()
  }, [])

  useEffect(() => {
    closeNav()
  }, [location, closeNav])

  const getBodyClassName = () => {
    let path = pathname

    if (path === '/') {
      path = 'home'
    }

    let base = `page`
    return `${base} ${[
      ...path
        .split('/')
        .filter(x => !!x)
        .map(slug => {
          const className = `${base}--${slug}`

          if (base === 'page' && slug === 'writing') {
            base = 'article'
          }

          return className
        }),
    ].join(' ')}`
  }

  return (
    <>
      <Helmet
        bodyAttributes={{
          class: getBodyClassName(),
        }}
      />
      <Header />
      <Nav />

      <main className="main" role="main" data-header-modifier="red">
        {children}
      </main>

      <Footer />
      <ContactForm />
    </>
  )
}

export default Layout
