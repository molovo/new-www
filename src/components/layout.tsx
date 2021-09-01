import React, { ReactNode, useContext, useEffect } from 'react'
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'
import Helmet from 'react-helmet'
import Header from './layout/header'
import Nav from './layout/nav'
import Transition from '../assets/styles/layout/transition'
import Footer from './layout/footer'
import ContactForm from './contact-form'
import { NavContext } from '../context/nav-context-provider'

deckDeckGoHighlightElement()

interface Props {
  location: Location
  children: Array<ReactNode>
  pageContext: PageContext
}

const Layout: React.FC<Props> = ({
  location,
  children,
  pageContext,
}: Props) => {
  const { closeNav } = useContext(NavContext)
  const { pathname } = location

  const crumbs = pageContext.breadcrumbs?.crumbs

  useEffect(() => {
    closeNav()
  }, [location])

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
      <Header location={location} crumbs={crumbs} />
      <Nav />

      <main className="main" role="main" data-header-modifier="red">
        {/* <Transition location={location}>{children}</Transition> */}
        {children}
      </main>

      <Footer />
      <ContactForm />
    </>
  )
}

export default Layout
