let intersectionObserver: IntersectionObserver | null = null
let animatorFunction = (element: HTMLElement | null | undefined): void =>
  element?.classList.add('animated')

if (typeof IntersectionObserver !== 'undefined') {
  const onIntersect = (entries: Array<IntersectionObserverEntry>) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > 0) {
        entry.target.classList.add('animated')
        intersectionObserver?.unobserve(entry.target)
      }
    })
  }

  intersectionObserver = new IntersectionObserver(onIntersect, {
    rootMargin: '0px 0px',
    threshold: [0, 0.25, 0.5, 0.75, 1],
  })

  animatorFunction = (element: HTMLElement | null | undefined): void => {
    if (!element || typeof element !== 'object') {
      return
    }

    if (intersectionObserver) {
      intersectionObserver?.observe(element)
    }
  }
}

export const animator = animatorFunction

export const observer = intersectionObserver
