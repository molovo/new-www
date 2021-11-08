import { LiveNodeList } from 'live-node-list'
import scrollToElement from './scroll-to-element'

const smoothScroll = (): void => {
  if (typeof window === 'undefined') {
    return
  }

  const SELECTOR = 'a[href^="#"]'
  const links = new LiveNodeList(SELECTOR)

  links.addEventListener('click', (evt: Event) => {
    evt.preventDefault()

    const link = (evt.currentTarget || evt.target) as HTMLAnchorElement
    const element = document.getElementById(
      link.href?.split('#').pop() as string
    )

    if (element) {
      scrollToElement(element)
    }
  })
}

export default smoothScroll
