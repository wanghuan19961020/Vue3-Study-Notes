<template>
  <h2>shallowReactive和shallowRef</h2>
  <h3>m1:{{ m1 }}</h3>
  <h3>m2:{{ m2 }}</h3>
  <h3>m3:{{ m3 }}</h3>
  <h3>m4:{{ m4 }}</h3>
  <hr />
  <button @click="update">更新数据</button>
</template>
<script lang='ts'>
import {
  defineComponent,
  reactive,
  ref,
  shallowReactive,
  shallowRef
} from 'vue'
/*
  shallowReactive : 只处理了对象内最外层属性的响应式(也就是浅响应式)

  shallowRef: 只处理了value的响应式, 不进行对象的reactive处理

  什么时候用浅响应式呢?
    一般情况下使用ref和reactive即可
    如果有一个对象数据, 结构比较深, 但变化时只是外层属性变化 ===> shallowReactive
    如果有一个对象数据, 后面会产生新的对象来替换 ===> shallowRef
*/
export default defineComponent({
  name: 'App',
  setup() {
    // 深度劫持（深监视）---- 深度响应式
    const m1 = reactive({
      name: '鸣人',
      age: 20,
      car: {
        name: '奔驰',
        color: '红色'
      }
    })
    // 浅劫持（浅监视）---- 浅响应式
    const m2 = shallowReactive({
      name: '鸣人',
      age: 20,
      car: {
        name: '奔驰',
        color: '红色'
      }
    })
    // 深度劫持（深监视）---- 深度响应式
    const m3 = ref({
      name: '鸣人',
      age: 20,
      car: {
        name: '奔驰',
        color: '红色'
      }
    })
    // 浅劫持（浅监视）---- 浅响应式
    const m4 = shallowRef({
      name: '鸣人',
      age: 20,
      car: {
        name: '奔驰',
        color: '红色'
      }
    })

    const update = () => {
      // 更改m1的数据 ----> reactive 方式
      // m1.name += '=='
      // m1.car.name += '=='
      // 更改m2的数据
      // m2.name += '=='
      // m2.car.name += '=='
      // 更改m3的数据
      // m3.value.name += '=='
      // m3.value.car.name += '=='
      // 更改m4的数据
      // m4.value.name += '=='
      // m4.value.car.name += '=='
      console.log(m3, m4)
    }
    return {
      m1,
      m2,
      m3,
      m4,
      update
    }
  }
})
</script>