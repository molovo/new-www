/**
 * Smoothly scroll to an element on the page
 *
 * @param {Element} element
 *
 * @return {void}
 */
export default function scrollToElement(element: Element): void {
  const to = element.getBoundingClientRect().top + window.pageYOffset

  window.scrollTo({
    top: to,
    left: 0,
    behavior: 'smooth',
  })
}
