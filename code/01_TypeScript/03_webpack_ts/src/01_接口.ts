/**
 * TypeScript 的核心原则之一是对值所具有的结构进行类型检查。
 * 我们使用接口（Interfaces）来定义对象的类型。
 * 接口是对象的状态(属性)和行为(方法)的抽象(描述)
 */

// 接口
// 接口：是一种类型 还是一种规范 是一种规则  是一种能力 是一种约束
;(() => {
  /*
    需求: 创建人的对象, 需要对人的属性进行一定的约束
      id是number类型, 必须有, 只读的
      name是string类型, 必须有
      age是number类型, 必须有
      sex是string类型, 可以没有
  */
  // 定义一个接口，改接口作为 person 对象的类型使用，限定或者是约束该对象中的属性数据
  interface IPerson {
    // id 是只读的，是number类型
    readonly id: number
    name: string
    age: number
    // sex 没有也是可以的
    sex?: string
  }
  //  定义一个对象，该对象的类型就是我定义的接口
  const person: IPerson = {
    id: 1,
    name: '小甜甜',
    age: 18
    // sex: '女'
  }
  console.log(person)
  // id 属性此时是可读可写
  // person.id = 100
  // console.log(person)
  person.sex = '女'
  // person.money = 1000 //报错
  console.log(person)
})()

/*
readonly vs const
  最简单判断该用 readonly 还是 const 的方法是看要把它做为变量使用还是做为一个属性。 
  做为变量使用的话用 const，若做为属性则使用 readonly。
*/
