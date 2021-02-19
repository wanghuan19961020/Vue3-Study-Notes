// readonly 修饰符：首先是一个关键字，对类中的属性成员进行修饰，修饰后，该属性成员，就不能再外部随意修改了
// 构造函数中，可以对只读属性成员数据进行修改
// 如果构造函数中没有任何参数，类中的属性成员已经使用readonly进行修饰了，那么外部也是不能对这个属性进行修改
// 构造函数中的参数可以使用 readonly 进行修饰，一旦修饰了，那么该类中就有了这个只读的成员属性了，外部可以访问，但是不能修改
// 构造函数中的参数可以使用 public private protected 进行修饰，无论是哪个进行修饰，那么该类中就会自动添加这么一个属性成员
;(() => {
  // readonly修饰类中的属性
  /*
    // 定义一个类
    class Person {
      // 属性
      readonly name: string = '大甜甜' // 初始值
      // 构造函数
      constructor(name: string) {
        // 更新属性值
        this.name = name
      }
      // 方法
      sayHi() {
        console.log('靠你七娃', this.name)
        // 类中的普通方法中国，也是不能修改 readonly 修饰的成员属性值
        // this.name = '大甜甜'
      }
    }

    // 实例化对象
    const person: Person = new Person('小甜甜')
    console.log(person)
    console.log(person.name)
    // 此时无法修改，因为name属性是只读的
    // person.name = '大甜甜'
    // console.log(person.name)
    person.sayHi()
  */

  // readonly 修饰类中的构造函数的参数（参数属性）
  // 定义一个类
  class Person {
    // 构造函数
    // 构造函数中的 name 参数，一旦使用 readonly 进行修饰后，那么该 name 参数可以叫参数属性
    // 构造函数中的 name 参数，一旦使用 readonly 进行修饰后，那么 Person 中就有了一个name 的属性成员
    // 构造函数中的 name 参数，一旦使用 readonly 进行修饰后，外部也是无法修改类中的name属性成员值的
    /*
    constructor(readonly name: string = '大甜甜') {
      // 更新属性值
      // this.name = name
    }
    */
    //  构造函数中的 name 参数，一旦使用 public 进行修饰后，那么 Person 类中就有了一个公共的 name 属性成员了
    constructor(public name: string = '大甜甜') {
      // 更新属性值
      // this.name = name
    }
    //  构造函数中的 name 参数，一旦使用 private 进行修饰后，那么 Person 类中就有了一个私有的 name 属性成员了
    /*
    constructor(private name: string = '大甜甜') {
      // 更新属性值
      // this.name = name
    }
    */
    //  构造函数中的 name 参数，一旦使用 protected 进行修饰后，那么 Person 类中就有了一个受保护的 name 属性成员了（只能在本类和派生类中访问和使用）
    // constructor(protected name: string = '大甜甜') {
    //   // 更新属性值
    //   // this.name = name
    // }
    // 方法
    sayHi() {
      console.log('靠你七娃', this.name)
      // 类中的普通方法中国，也是不能修改 readonly 修饰的成员属性值
      // this.name = '大甜甜'
    }
  }

  // 实例化对象
  const person: Person = new Person('小甜甜')
  console.log(person)
  person.name = '佐助'
  console.log(person.name)
})()
