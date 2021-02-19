<template>
  <div>哈哈，我有变帅了</div>
  <!-- <h1>{{ number }}</h1> -->
</template>

<script lang="ts">
// defineComponent函数，目的是定义一个组件，内部可以传入一个配置对象
import { defineComponent } from 'vue'

// 暴露出去一个定义好的组件
/*
  新的option, 所有的组合API函数都在此使用, 只在初始化时执行一次
  函数如果返回对象, 对象中的属性或方法, 模板中可以直接使用
*/
export default defineComponent({
  // 当前组件的名字是 App
  name: 'App'
  // 测试代码 setup 是组合API中第一个要使用的函数
  /*
  setup() {
    const number = 10
    console.log('我来了')
    return {
      number
    }
  }
  */
})
</script>

<style>
</style>
