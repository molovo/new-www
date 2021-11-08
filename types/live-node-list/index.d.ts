declare module 'live-node-list' {
  type LiveElementUpdateCallback = (
    newItem: HTMLElement,
    oldItem: HTMLElement
  ) => void
  type LiveNodeListUpdateCallback = (
    newItems: HTMLElement[],
    oldItems: HTMLElement[]
  ) => void

  interface Events {
    start: Array<() => void>
    pause: Array<() => void>
    resume: Array<() => void>
    'eventListeners:add': Array<() => void>
    'eventListeners:remove': Array<() => void>
    'eventListeners:attach': Array<() => void>
    'eventListeners:detach': Array<() => void>
    'eventListeners:purge': Array<() => void>
    'delegatedEventListeners:add': Array<() => void>
    'delegatedEventListeners:remove': Array<() => void>
    'delegatedEventListeners:attach': Array<() => void>
    'delegatedEventListeners:detach': Array<() => void>
    'delegatedEventListeners:purge': Array<() => void>
  }

  interface LiveElementEvents extends Events {
    update: Array<LiveElementUpdateCallback>
  }
  interface LiveNodeListEvents extends Events {
    update: Array<LiveNodeListUpdateCallback>
  }

  interface Observable {
    observerConfig: MutationObserverInit
    selector: string
    parent: HTMLElement

    events: LiveNodeListEvents
    eventListeners: {
      [key: string]: EventListener[]
    }
    delegatedEvents: {
      [key: string]: EventListener[]
    }

    addEventListener(
      event: string,
      listener: EventListener,
      options?: boolean | AddEventListenerOptions
    ): Observable
    removeEventListener(event: string, listener: EventListener): void

    addDelegatedEventListener(
      target: HTMLElement | Window | Document,
      event: string,
      listener: EventListener,
      options?: boolean | AddEventListenerOptions
    ): Observable
    removeDelegatedEventListener(
      target: HTMLElement | Window | Document,
      event: string,
      listener: EventListener
    ): void

    pause(): void
    resume(): void
    refresh(): void
  }

  interface LiveElement extends Observable {
    item: HTMLElement | null

    new (
      selector: string,
      parent?: HTMLElement,
      config?: MutationObserverInit
    ): LiveElement

    on(event: keyof LiveElementEvents, listener: EventListener): LiveElement
    off(event: keyof LiveElementEvents, listener: EventListener): LiveElement
  }

  interface LiveNodeList extends Observable {
    items: HTMLElement[]

    new (
      selector: string,
      parent?: HTMLElement,
      config?: MutationObserverInit
    ): LiveNodeList

    on(event: keyof LiveNodeListEvents, listener: EventListener): LiveNodeList
    off(event: keyof LiveNodeListEvents, listener: EventListener): LiveNodeList

    forEach(callback: (item: HTMLElement) => void): void
    forEach(callback: (item: HTMLElement) => void, thisArg): void
    map(callback: (item: HTMLElement) => any): any[]
  }

  const LiveElement: LiveElement
  const LiveNodeList: LiveNodeList
  export = { LiveElement, LiveNodeList }
  export default LiveNodeList
}
