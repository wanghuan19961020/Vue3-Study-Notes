// 继承：类与类之间的关系
// 继承后类与类之间的叫法：
// A类继承了B这个类，那么此时A类叫子类，B类叫基类
// 子类 ---> 派生类
// 基类 ---> 超类|父类
// 一旦发生了继承关系，就出现了父子类的关系（叫法）
;(() => {
  // 定义一个类
  class Person {
    // 属性
    name: string // 姓名
    age: number // 年龄
    gender: string //性别
    // 构造函数
    constructor(name: string, age: number, gender: string) {
      // 更新属性数据
      this.name = name
      this.age = age
      this.gender = gender
    }
    // 实例方法
    sayHi(str: string) {
      console.log(`我是:${this.name}, ${str}`)
    }
  }

  // 定义一个类，继承自 Person
  class Student extends Person {
    constructor(
      name: string = '小明',
      age: number = 18,
      gender: string = '男'
    ) {
      // 调用的是父类的构造函数，使用的 super
      super(name, age, gender)
    }

    // 可以调用父类中的方法
    sayHi() {
      console.log('我是学生类中的sayHi方法')
      // 调用父类中的sayHi方法
      super.sayHi('哈哈')
    }
  }
  // 实例化 Person
  const person = new Person('大明明', 89, '男')
  person.sayHi('嘎嘎')

  // 实例化 Student
  const student = new Student('小甜甜', 19, '女')
  student.sayHi()
})()

/**
 * 总结：类和类之间如果要有继承关系，需要使用 extends 关键字
 * 子类中可以调用父类中的构造函数，使用的是 super 关键字（包括调用父类中的实例方法，也可以使用 super）
 * 子类可以重写父类方法
 */
