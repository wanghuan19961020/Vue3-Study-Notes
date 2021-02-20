<template>
  <h2>自定义 hook 函数</h2>
  <h2>x:{{ x }}, y:{{ y }}</h2>
  <h2 v-if="loading">正在加载中 ......</h2>
  <h2 v-else-if="errorMsg">错误信息: {{ errorMsg }}</h2>
  <ul v-else>
    <li>id: {{ data.id }}</li>
    <li>address: {{ data.address }}</li>
    <li>distance: {{ data.distance }}</li>
  </ul>
  <hr />
  <!-- 数组数据 -->
  <ul v-for="item in data" :key="item.id">
    <li>id: {{ item.id }}</li>
    <li>title: {{ item.title }}</li>
    <li>price: {{ item.price }}</li>
  </ul>
</template>
<script lang='ts'>
import { defineComponent, watch } from 'vue'
import useMousePosition from './hooks/useMousePosition'
import useRequest from './hooks/useRequest'

// 定义接口，约束对象的类型
interface AddressData {
  id: number
  address: string
  distance: string
}

interface ProductData {
  id: string
  title: string
  price: number
}
export default defineComponent({
  name: 'App',
  // 需求1：用户在页面中点击页面，把点击位置的横纵坐标收集起来并展示出来
  setup() {
    const { x, y } = useMousePosition()
    // const { loading, data, errorMsg } = useRequest<AddressData>('/data/address.json') // 获取对象数据
    const { loading, data, errorMsg } = useRequest<ProductData[]>(
      '/data/products.json'
    )

    // 监视
    watch(data, () => {
      if (data.value) {
        console.log(data.value.length)
      }
    })

    return {
      x,
      y,
      loading,
      data,
      errorMsg
    }
  }
})
</script>