/** let throttled = debounce(10, console.log); */
const debounce = (fn: Function, delay: number): Function => {
  let args: any[]
  let context: Function
  let timer: NodeJS.Timeout

  return (...a: any[]) => {
    args = a
    context = this
    if (!timer)
      timer = setTimeout(() => {
        // DevSkim: reviewed DS172411 on 2021-08-19 by @molovo
        fn.apply(context, args)

        args = null
        context = null
        timer = null
      }, delay)
  }
}

export default debounce
