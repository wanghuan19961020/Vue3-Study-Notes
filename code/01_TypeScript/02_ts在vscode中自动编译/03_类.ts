// ts 中书写 js 中的类

;(() => {
  // 定义一个接口
  interface IPerson {
    firstName: string // 姓氏
    lastName: string // 名字
  }

  // 定义一个类
  class Person {
    // 定义公共的字段（属性）
    firstName: string // 姓氏
    lastName: string // 名字
    fullName: string // 姓名
    // 定义一个构造器函数
    constructor(firstName: string, lastName: string) {
      // 更新属性数据
      this.firstName = firstName
      this.lastName = lastName
      // 姓名
      this.fullName = firstName + ' ' + lastName
    }
  }
  // 定义一个函数
  function showFullName(person: Person) {
    return person.firstName + '_' + person.lastName
  }
  // 实例化对象
  const person = new Person('诸葛', '孔明')
  console.log(showFullName(person))
})()
