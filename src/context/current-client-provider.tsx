import React, { createContext, PropsWithChildren, ReactNode } from 'react'
import { useState } from 'reinspect'

export const CurrentClientContext = createContext({
  currentClient: null,
  setCurrentClient: client => client,
})

export const CurrentClientContextProvider = ({
  children,
}: PropsWithChildren<ReactNode>) => {
  const [client, setClient] = useState(null)

  const setCurrentClient = slug => {
    setClient(slug)
  }

  return (
    <CurrentClientContext.Provider
      value={{ currentClient: client, setCurrentClient }}
    >
      {children}
    </CurrentClientContext.Provider>
  )
}

export default CurrentClientContextProvider
