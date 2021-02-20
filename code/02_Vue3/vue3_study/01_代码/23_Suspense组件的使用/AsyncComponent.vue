<template>
  <h3>AsyncComponent子级组件</h3>
  <h3>{{ msg }}</h3>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'AsyncComponent',
  setup() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          msg: 'what are you nong sha lei'
        })
      }, 2000)
    })
    // return {}
  }
})
</script>