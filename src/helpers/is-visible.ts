// -- Cross browser method to get style properties:
function getStyle(element: Element, property: string): string | undefined {
  if (window.getComputedStyle) {
    return document.defaultView.getComputedStyle(element, null)[property]
  }

  return undefined
}

function elementInDocument(element: Element): boolean {
  let el = element
  while (el) {
    if (el === document.documentElement) {
      return true
    }

    el = el.parentElement
  }
  return false
}

/**
 * Author: Jason Farrell
 * Author URI: http://useallfive.com/
 *
 * Description: Checks if a DOM element is truly visible.
 * Package URL: https://github.com/UseAllFive/true-visibility
 *
 * Checks if a DOM element is visible. Takes into
 * consideration its parents and overflow.
 */
const isVisible = (
  element: HTMLElement,
  t: number = element.offsetTop,
  l: number = element.offsetLeft,
  w: number = element.offsetWidth,
  h: number = element.offsetHeight,
  r: number = l + w,
  b: number = t + h
): boolean => {
  const p = element.parentElement
  const VISIBLE_PADDING = 2

  if (!elementInDocument(element)) {
    return false
  }

  // -- Return true for document node
  if (p && p.nodeType === 9) {
    return true
  }

  // -- Return false if our element is invisible
  if (
    getStyle(element, 'opacity') === '0' ||
    getStyle(element, 'display') === 'none' ||
    getStyle(element, 'visibility') === 'hidden'
  ) {
    return false
  }

  // -- If we have a parent, let's continue:
  if (p) {
    // -- Check if the parent can hide its children.
    if (
      getStyle(p, 'overflow') === 'hidden' ||
      getStyle(p, 'overflow') === 'scroll'
    ) {
      // -- Only check if the offset is different for the parent
      if (
        // -- If the target element is to the right of the parent elm
        l + VISIBLE_PADDING > p.offsetWidth + p.scrollLeft ||
        // -- If the target element is to the left of the parent elm
        l + w - VISIBLE_PADDING < p.scrollLeft ||
        // -- If the target element is under the parent elm
        t + VISIBLE_PADDING > p.offsetHeight + p.scrollTop ||
        // -- If the target element is above the parent elm
        t + h - VISIBLE_PADDING < p.scrollTop
      ) {
        // -- Our target element is out of bounds:
        return false
      }
    }

    // -- Add the offset parent's left/top coords to our element's offset:
    if (element.offsetParent === p) {
      l += p.offsetLeft
      t += p.offsetTop
    }

    // -- Let's recursively check upwards:
    return isVisible(p, t, l, w, h, r, b)
  }

  return true
}

export default isVisible
