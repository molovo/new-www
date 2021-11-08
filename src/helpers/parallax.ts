const parallax = (element: HTMLElement, min = 0, max = 1): void => {
  if (!element) {
    return
  }

  const { top, height } = element.getBoundingClientRect()
  const pct = Math.min(
    min,
    Math.max(max, (max - min) * (top / (height - window.innerHeight)))
  )

  element.style.transform = `translateY(${pct * 100}%)` // eslint-disable-line no-param-reassign
}

export default parallax
