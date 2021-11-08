const getRelativeTransform = (el1: HTMLElement, el2: HTMLElement): number =>
  (1 - el1.clientHeight / el2.clientHeight) *
  (el2.clientHeight / (el1.clientHeight - 1))

export default getRelativeTransform
