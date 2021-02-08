// 基础类型
// 基本语法
// let 变量名: 数据类型 = 值
;(() => {
  // 布尔类型
  let flag: boolean = true
  console.log(flag)
  // 数字类型
  let a1: number = 10 // 十进制
  let a2: number = 0b1010 // 二进制
  let a3: number = 0o12 // 八进制
  let a4: number = 0xa // 十六进制
  console.log(a1, a2, a3, a4) // 10 10 10 10
  // 字符串
  let str1: string = '床前明月光'
  let str2: string = '小明去开窗'
  let str3: string = '遇到一耳光'
  let str4: string = '牙齿掉光光'
  console.log(`${str1},${str2},${str3},${str4}`)
  // 字符串和数字能够一起拼接
  let str5: string = '我有这么多的钱'
  let num: number = 1000
  console.log(str5 + num)

  // 总结：ts 中遍历一开始是什么类型，那么后期赋值的时候，只能用这个类型的数据，是不允许用其他类型的数据赋值给当前这个变量
  // 如：let str: string = '真香'  str = 100 ,没有武德（不允许）

  console.log('=====================================')

  let und: undefined = undefined
  let nll: null = null
  console.log(und, nll)

  console.log('=====================================')

  // undefined 和 null 都可以作为其他类型的子类型，把 undefined 和 null 赋值给掐他类型的变量的，如：number类型的变量
  // let num2: number = undefined
  let num2: number = null
  console.log(num2)

  console.log('=====================================')

  // 数组类型
  // 数组定义方式1
  // 语法：let 变量名: 数据类型[] = [值1, 值2, 值3]
  let arr1: number[] = [10, 20, 30, 40, 50]
  console.log(arr1)
  // 数组定义方式2: 泛型的写法
  // 语法：let 变量名: Array<数据类型> = [值1, 值2, 值3]
  let arr2: Array<number> = [100, 200, 300]
  console.log(arr2)

  // 注意问题：数组定义之后，里面的数据的类型和定义数组的时候的类型是一致的，否则有错误提示信息，也不会编译通过的

  // 元组类型: 在定义数组的时候，类型和数据的个数一来是就已经限定了
  let arr3: [string, number, boolean] = ['小甜甜', 100.12345, true]
  console.log(arr3)
  // 注意问题：元组类型在使用的时候，数组的类型和数据的个数 应该在定义元组的时候的数据类型和位置应该是一致的
  console.log(arr3[0].split(''))
  console.log(arr3[1].toFixed(2))

  console.log('=====================================')

  // 枚举类型
  // 枚举里面的每个数据值都可以叫元素，每个元素都有自己的编号，编号是从0开始的，依次的递增加1
  enum Color {
    red = 10,
    green,
    blue
  }
  // 定义一个 Color 的枚举类型的变量来接收枚举的值
  let color: Color = Color.red
  console.log(color) // 0  10
  console.log(Color.red, Color.green, Color.blue) // 0 1 2   10 11 12
  console.log(Color[11]) // green
  // 小例子 枚举中的元素可以是中文的数据值，但是不推荐
  enum Gender {
    女,
    男
  }
  console.log(Gender.男)

  console.log('=====================================')

  // any 类型
  // let str: any = 100
  // str = '年少不知富婆好，错把少女当成宝'
  // console.log(str)
  // 当一个数组中要存储多个数据，个数不确定，类型不确定，此时也可以使用 any 类型来定义数组
  let arr: any[] = [100, '年少不知软饭香，错把青春插稻秧', true]
  console.log(arr)
  // 这种情况下也没有错误的提示信息，any类型有优点，也有缺点
  // console.log(arr[0].split(''))

  // void 类型 在函数声明的时候，小括号的后面还是用 void，代表的是该函数没有任何的返回值
  function showMsg(): void {
    console.log('只要富婆把握住, 连夜住进大别墅')
    // return
    // return undefined
    return null
  }
  console.log(showMsg())
  // 定义 void 类型的变量 可以接受一个 undefined 的值，但是意义不大
  let vd: void = undefined
  console.log(vd)

  console.log('=====================================')

  // object 类型
  // 定义一个函数，参数是object，返回值也是 object 类型
  function getObj(obj: object): object {
    console.log(obj)
    return {
      name: '卡卡西',
      age: 27
    }
  }
  console.log(getObj({ name: '佐助', sex: '男' }))
  // console.log(getObj('123')) // 错误的
  console.log(getObj(new String('123')))
  console.log(getObj(String))

  console.log('=====================================')

  // 联合类型（Union Types）表示取值可以为多种类型中的一种
  // 需求1：定义一个函数得到的一个数字或字符串值的字符串形式值
  function getString(str: number | string): string {
    return str.toString()
  }
  console.log(getString(123))
  console.log(getString('123'))
  // 需求2: 定义一个一个函数得到一个数字或字符串值的长度
  // 类型断言：告诉编译器，我知道我自己是什么类型，也知道自己在干什么
  // 类型断言的语法方式1：<类型>变量名
  // 类型断言的语法方式2：值 as 类型
  function getStringLength(str: number | string): number {
    // return str.toString().length
    // 如果str本身就是 string 类型，那么是没有必要调用 toString 方法
    /*
        <string>str 类型断言
        通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 
        类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 
        它没有运行时的影响，只是在编译阶段起作用。 
        TypeScript 会假设你，程序员，已经进行了必须的检查。
    */
    if ((<string>str).length) {
      // error 报错
      // str.length 存在吗？如果存在也就说明 str 是 string类型
      // return (<string>str).length
      return (str as string).length
    } else {
      // 此时说明 str 是number类型
      return str.toString().length
    }
  }
  console.log(getStringLength(12345))
  console.log(getStringLength('12345'))

  // 类型推断
  // let txt = 100 // number类型
  // txt = '小甜甜好帅' // 报错
  // console.log(txt)
  let txt2 // any 类型
  console.log(txt2)
})()
