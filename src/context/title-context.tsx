import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
} from 'react'
import { useState } from 'reinspect'

export const TitleContext = createContext({
  title: null as string | null,
  setTitle: ((title: string | null) => title) as Dispatch<
    SetStateAction<string | null>
  >,
})

export const TitleContextProvider = ({
  children,
}: PropsWithChildren<ReactNode>): JSX.Element => {
  const [title, setTitle] = useState<string | null>(null, 'Page Title')

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  )
}

export default TitleContextProvider
