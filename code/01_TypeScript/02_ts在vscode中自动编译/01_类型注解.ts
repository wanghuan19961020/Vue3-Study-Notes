// 类型注解是一种轻量级的为函数或变量添加约束的方式
;(() => {
  // str 是 string 类型
  function showMsg(str: string) {
    return '床前明月光，' + str
  }
  let msg = '疑是地上霜'
  // msg 是一个数组
  // let msg = [10, 20, 30]
  // 智能的错误提示信息
  console.log(showMsg(msg))
})()
