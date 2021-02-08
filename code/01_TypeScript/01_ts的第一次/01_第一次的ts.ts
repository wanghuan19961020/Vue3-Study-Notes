(() => {
  // str 这个参数是 string 类型的
  function sayHi(str: string) {
    return '您好啊' + str
  }
  let text = '小甜甜'
  console.log(sayHi(text))
})()
// 总结：ts的文件如果直接书写js语法的代码，那么在html文件中直接引入ts文件，在谷歌的浏览器中使用是可以直接使用的

// 如果ts文件中有了ts的语法代码，那么就需要把这个ts文件编译成js文化，在HTML文件引入js的文件中来使用

// ts文件中的函数中的形参，如果使用了某个类型进行修饰，那么最终在编译的js文件中是没有这个类型的

// ts 文件中的遍历使用的是let进行修饰，编译的js文件中的修饰符就变成了var了