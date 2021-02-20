<template>
  <h2>Child 子级组件</h2>
  <h4>msg:{{ msg }}</h4>
  <button @click="update">更新数据</button>
</template>
<script lang='ts'>
import {
  defineComponent,
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue'
export default defineComponent({
  name: 'Child',
  // vue2.x 的生命周期钩子
  beforeCreate() {
    console.log('2.x 中的 beforeCreate ... ')
  },
  created() {
    console.log('2.x 中的 created ... ')
  },
  beforeMount() {
    console.log('2.x 中的 beforeMount ... ')
  },
  mounted() {
    console.log('2.x 中的 mounted ... ')
  },
  beforeUpdate() {
    console.log('2.x 中的 beforeUpdate ... ')
  },
  updated() {
    console.log('2.x 中的 updated ... ')
  },
  beforeUnmount() {
    console.log('2.x 中的 beforeUnmount ... ')
  },
  unmounted() {
    console.log('2.x 中的 unmounted ... ')
  },
  // vue2.x 中的 beforeDestroy 和 destroyed 这 2 个生命周期回调早 vue3 中改名了，左移，不能再使用了
  // beforeDestroy() {
  //   console.log('2.x 中的 beforeDestroy ... ')
  // },
  // destroyed() {
  //   console.log('2.x 中的 destroyed ... ')
  // }
  setup() {
    console.log('3.0 中的 setup ...')

    // 响应式的数据
    const msg = ref('abc')
    // 按钮点击事件的回调
    const update = () => {
      msg.value += '==='
    }

    onBeforeMount(() => {
      console.log('3.0 中的 onBeforeMount ...')
    })
    onMounted(() => {
      console.log('3.0 中的 onMounted ...')
    })
    onBeforeUpdate(() => {
      console.log('3.0 中的 onBeforeUpdate ...')
    })
    onUpdated(() => {
      console.log('3.0 中的 onUpdated ...')
    })
    onBeforeUnmount(() => {
      console.log('3.0 中的 onBeforeUnmount ...')
    })
    onUnmounted(() => {
      console.log('3.0 中的 onUnmounted ...')
    })
    return {
      msg,
      update
    }
  }
  /*
    3.0 中的 setup ...
    2.x 中的 beforeCreate ... 
    2.x 中的 created ... 
    3.0 中的 onBeforeMount ...
    2.x 中的 beforeMount ... 
    3.0 中的 onMounted ...
    2.x 中的 mounted ... 
    3.0 中的 onBeforeUpdate ...
    2.x 中的 beforeUpdate ... 
    3.0 中的 onUpdated ...
    2.x 中的 updated ... 
    3.0 中的 onBeforeUnmount ...
    2.x 中的 beforeUnmount ... 
    3.0 中的 onUnmounted ...
    2.x 中的 unmounted ... 
  */
})
</script>
