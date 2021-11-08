/* eslint-disable react/jsx-filename-extension */

import React from 'react'

// custom CSS styles
import './src/assets/styles/main.styl'

// Highlighting for code blocks
import 'prismjs/themes/prism.css'
import { StateInspector } from 'reinspect'
import { NavContextProvider } from './src/context/nav-context-provider'
import { CurrentClientContextProvider } from './src/context/current-client-provider'
import { ContactFormContextProvider } from './src/context/contact-form-context-provider'
import Layout from './src/components/layout'

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout> // eslint-disable-line react/jsx-props-no-spreading
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
