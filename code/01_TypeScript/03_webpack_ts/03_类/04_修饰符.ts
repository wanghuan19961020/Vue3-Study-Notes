// 修饰符（类中的成员的修饰符）：主要描述类中成员（属性、构造函数、方法）的可访问性
// 类中的成员都有自己默认的修饰符，public
// public 修饰符 --- 公共的 类中成员默认的修饰符，代表的是公共的，任何位置都可以访问类中的成员
// private 修饰符 --- 私有的 类中成员如果使用 private 来修饰，那么外部是无法访问这个成员数据的,当然子类中也是无法访问该成员数据的
// protected 修饰符 --- 受保护的 类中成员如果使用 protected 来修饰,那么外部是无法访问这个成员数据的,当然子类中是可以访问该成员数据的
;(() => {
  // 定义一个类
  class Person {
    // 属性
    // name: string
    // public 修饰了属性成员
    // public name: string
    // private 修饰了属性成员
    // private name: string // Property 'name' is private and only accessible within class 'Person'
    // protected 修饰了属性成员
    protected name: string
    // 构造函数
    constructor(name: string) {
      // 更新属性值
      this.name = name
    }
    // 方法
    eat() {
      console.log('嗯，这个骨头真好吃', this.name)
    }
  }

  // 定义一个子类
  class Student extends Person {
    constructor(name: string) {
      super(name)
    }
    play() {
      console.log('我就喜欢玩布娃娃', this.name)
    }
  }

  // 实例化对象
  const per = new Person('蛇叔')
  // 类的外部可以访问类中的属性成员
  // console.log(per.name)
  per.eat()
  const stu = new Student('红豆')
  stu.play()
  // console.log(stu.name)
})()
