import { StandardProperties } from 'csstype'
import React, { ReactNode } from 'react'
import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group'

type TransitionStatus = 'entering' | 'entered' | 'exiting'
interface TransitionStyles {
  entering: StandardProperties
  entered: StandardProperties
  exiting: StandardProperties
}

const timeout = 500
const getTransitionStyles: TransitionStyles = {
  entering: {
    position: 'absolute',
    opacity: '0',
    transform: 'translateY(3em)',
  },
  entered: {
    transition: `opacity ${timeout}ms ease-in-out, transform ${timeout}ms ease-in-out`,
    opacity: '1',
    transform: 'translateY(0)',
  },
  exiting: {
    transition: `opacity ${timeout}ms ease-in-out, transform ${timeout}ms ease-in-out`,
    opacity: '0',
    transform: 'translateY(-3em)',
  },
}

interface Props {
  children: Array<ReactNode>
  location: Location
}

const Transition: React.FC<Props> = ({ children, location }: Props) => (
  <TransitionGroup>
    <ReactTransition
      key={location.pathname}
      timeout={{
        enter: timeout,
        exit: timeout,
      }}
    >
      {(status: TransitionStatus) => (
        <div
          style={{
            ...getTransitionStyles[status],
          }}
        >
          {children}
        </div>
      )}
    </ReactTransition>
  </TransitionGroup>
)

export default Transition
