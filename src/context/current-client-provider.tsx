import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
  useCallback,
} from 'react'
import { useState } from 'reinspect'

export const CurrentClientContext = createContext({
  currentClient: null as string | null,
  setCurrentClient: ((client: string) => client) as Dispatch<
    SetStateAction<string | null>
  >,
})

export const CurrentClientContextProvider = ({
  children,
}: PropsWithChildren<ReactNode>): JSX.Element => {
  const [client, setClient] = useState<string | null>(null, 'Current client')

  const setCurrentClient = useCallback(slug => {
    setClient(slug)
  }, [])

  return (
    <CurrentClientContext.Provider
      value={{ currentClient: client, setCurrentClient }}
    >
      {children}
    </CurrentClientContext.Provider>
  )
}

export default CurrentClientContextProvider
