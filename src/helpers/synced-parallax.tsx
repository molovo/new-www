import getRelativeTransform from './get-relative-transform'
import parallax from './parallax'

const syncedParallax = (elements: HTMLElement[]): void => {
  if (elements.length === 0) {
    return
  }

  // Sort elements by height
  const sorted = elements
    .map(a => a)
    .sort((a, b) => {
      if (a.clientHeight > b.clientHeight) {
        return -1
      }

      if (a.clientHeight <= b.clientHeight) {
        return 1
      }

      return 0
    })

  // Grab the tallest element
  const tallest = sorted.shift()

  if (!tallest) {
    return
  }

  // Sync the position of other elements so the top and bottom match the tallest element
  sorted.forEach(element => {
    parallax(element, getRelativeTransform(element, tallest), 0)
  })
}

export default syncedParallax
