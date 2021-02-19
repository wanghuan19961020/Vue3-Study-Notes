// 泛型约束
// 如果我们直接对一个泛型参数取 length 属性, 会报错, 因为这个泛型根本就不知道它有这个属性
;(() => {
  // 定义一个接口，用来约束将来某个类型中必须要有 length 这个属性
  interface ILlength {
    // 接口中有一个属性 length
    length: number
  }
  function getLength<T extends ILlength>(x: T): number {
    return x.length
  }

  console.log(getLength<string>('what are you no sha lei'))
  // console.log(getLength<number>(123)) // 报错
})()
