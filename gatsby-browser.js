import React from 'react'

// custom CSS styles
import './src/assets/styles/main.styl'

// Highlighting for code blocks
import 'prismjs/themes/prism.css'
import { StateInspector } from 'reinspect'
import NavContextProvider from './src/context/nav-context-provider'
import Layout from './src/components/layout'
import ContactFormContextProvider from './src/context/contact-form-context-provider'
import CurrentClientContextProvider from './src/context/current-client-provider'

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

export const wrapRootElement = ({ element }) => (
  <StateInspector name="App">
    <CurrentClientContextProvider>
      <NavContextProvider>
        <ContactFormContextProvider>{element}</ContactFormContextProvider>
      </NavContextProvider>
    </CurrentClientContextProvider>
  </StateInspector>
)

export const onRouteUpdate = ({ location: { pathname }, prevLocation }) => {
  // if (typeof window.closeNav === 'function') {
  //   window.closeNav()
  // }
}
