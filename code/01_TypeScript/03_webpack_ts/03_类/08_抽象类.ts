// 抽象类：包含抽象方法（抽象方法一般没有任何具体内容的实现），也可以包含实例方法，抽象类是不能被实例化，为了能够让自雷进行实例化及实现内部的抽象方法
// 抽象类的作用和目的最终都是为子类服务
;(() => {
  // 定义一个类
  abstract class Animal {
    // 抽象属性
    // abstract name: string = '小甜甜'
    // 抽象方法
    abstract eat()
    // 报错的，抽象方法不能有具体的实现
    // abstract eat(){
    //   console.log('趴着吃，跳着吃');
    // }
    // 实例方法
    sayHi() {
      console.log('您好啊')
    }
  }
  // 定义一个子类（派生类）Dog
  class Dog extends Animal {
    // name: string = '小黄'
    // 重新实现抽象类中的方法，此时这个方法就是当前 Dog 类的实例方法了
    eat() {
      console.log('舔着吃，真好吃')
    }
  }

  // 实例化Dog的对象
  const dog: Dog = new Dog()

  dog.eat()
  // console.log(dog.name)

  // 不能实例化抽象类的对象
  // const animal: Animal = new Animal()
})()
