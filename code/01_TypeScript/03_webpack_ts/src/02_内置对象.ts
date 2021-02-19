/*
JavaScript 中有很多内置对象，它们可以直接在 TypeScript 中当做定义好了的类型。
内置对象是指根据标准在全局作用域（Global）上存在的对象。这里的标准是指 ECMAScript 和其他环境（比如 DOM）的标准。
*/
;(() => {
  /* 1. ECMAScript 的内置对象 */
  let b: Boolean = new Boolean(1)
  let n: Number = new Number(true)
  let s: String = new String('abc')
  let d: Date = new Date()
  let r: RegExp = /^1/
  let e: Error = new Error('error message')
  b = true
  // let bb: boolean = new Boolean(2)  // error
  /* 2. BOM 和 DOM 的内置对象 */
  // Window
  // Document
  // HTMLElement
  // DocumentFragment
  // Event
  // NodeList
  const div: HTMLElement = document.getElementById('test')
  const divs: NodeList = document.querySelectorAll('div')
  document.addEventListener('click', (event: MouseEvent) => {
    console.dir(event.target)
  })
  const fragment: DocumentFragment = document.createDocumentFragment()
})()
