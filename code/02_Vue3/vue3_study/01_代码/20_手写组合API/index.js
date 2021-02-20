// shallowReactive(浅的劫持，浅的监视，浅的响应式数据) 与 reactive(深的)

// 定义一个 reactiveHandler 对象
const reactiveHandler = {
  // 获取属性值
  get(target, prop) {
    if (prop === '_is_reactive') return true
    const result = Reflect.get(target, prop)
    console.log('拦截了读取数据', prop, result)
    return result
  },
  // 修改属性值或者是添加属性
  set(target, prop, value) {
    const result = Reflect.set(target, prop, value)
    console.log('拦截了修改数据或者是添加属性', prop, value, result)
    return result
  },
  // 删除某个属性
  deleteProperty(target, prop) {
    const result = Reflect.deleteProperty(target, prop)
    console.log('拦截了删除属性', prop, result)
    return result
  }
}

// 定义一个 shallowReactive 函数，传入一个目标对象
function shallowReactive(target) {
  // 判断当前的目标对象是不是 object类型（对象，数组）
  if (target && typeof target === 'object') {
    return new Proxy(target, reactiveHandler)
  }
  // 如果传入的数据是基本类型的数据，那么直接返回
  return target
}

// 定义一个  reactive 传入一个目标对象
function reactive(target) {
  // 判断当前的目标对象是不是 object类型（对象，数组）
  if (target && typeof target === 'object') {
    // 对数组或者对象中所有的数据进行reactive的递归处理
    // 先判断当前的数据是不是数组
    if (Array.isArray(target)) {
      // 数组的数据要进行遍历操作
      target.forEach((item, index) => {
        target[index] = reactive(item)
      })
    } else {
      // 当前的数据是对象
      // 对象的数据要进行遍历操作
      Object.keys(target).forEach((key) => {
        target[key] = reactive(target[key])
      })
    }
    return new Proxy(target, reactiveHandler)
  }
  // 如果传入的数据是基本类型的数据，那么直接返回
  return target
}

// ==============================================================================================
// 定义了一个readonlyHandler处理器
const readonlyHandler = {
  get(target, prop) {
    if (prop === '_is_readonly') return true
    const result = Reflect.get(target, prop)
    console.log('拦截了读取数据', prop, result)
    return result
  },
  set(target, prop, value) {
    console.warn('只能读取数据，不能修改或者添加数据')
    return true
  },
  deleteProperty(target, prop) {
    console.warn('只能读取数据，不能删除数据')
    return true
  }
}

// 定义一个 shallowReadonly 函数
function shallowReadonly(target) {
  // 需要判断当前的数组是不是对象
  if (target && typeof target === 'object') {
    return new Proxy(target, readonlyHandler)
  }

  return target
}

// 定义一个 readonly 函数
function readonly(target) {
  // 需要判断当前的数组是不是对象
  if (target && typeof target === 'object') {
    // 判断 target 是不是数组
    if (Array.isArray(target)) {
      // 数组的数据要进行遍历操作
      target.forEach((item, index) => {
        target[index] = readonly(item)
      })
    } else {
      // 判断 target 是不是对象
      // 对象的数据要进行遍历操作
      Object.keys(target).forEach((key) => {
        target[key] = readonly(target[key])
      })
    }
    return new Proxy(target, readonlyHandler)
  }
  // 如果不是对象或者数组，直接返回
  return target
}

// ===============================================================================================
// shallowRef 与 ref

// 定义一个 shallowRef 函数
function shallowRef(target) {
  return {
    // 把target数据保存起来
    _value: target,
    get value() {
      console.log('劫持到了读取数据')
      return this._value
    },
    set value(val) {
      console.log('劫持到了修改数据，准备更新界面', val)
      this._value = val
    }
  }
}

// 定义一个 ref 函数
function ref(target) {
  target = reactive(target)
  return {
    _is_ref: true, // 表示当前的对象是 ref 对象
    // 把target数据保存起来
    _value: target,
    get value() {
      console.log('劫持到了读取数据')
      return this._value
    },
    set value(val) {
      console.log('劫持到了修改数据，准备更新界面', val)
      this._value = val
    }
  }
}

// ===============================================================================================
// isRef, isReactive，isReadonly，isProxy
// 定义一个函数 isRef，判断当前的对象是不是 ref 对象
function isRef(obj) {
  return obj && obj._is_ref
}
// 定义一个函数 isReactive，判断当前的对象是不是 reactive 对象
function isReactive(obj) {
  return obj && obj._is_reactive
}
// 定义一个函数 isReadonly，判断当前的对象是不是 readonly 对象
function isReadonly(obj) {
  return obj && obj._is_readonly
}
// 定义一个函数 isProxy，判断当前的对象是不是 isProxy 对象
function isProxy(obj) {
  return isReactive(obj) || isReadonly(obj)
}
