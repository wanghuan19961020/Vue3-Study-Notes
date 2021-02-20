import { onBeforeUnmount, onMounted, ref } from 'vue'
export default function() {
  const x = ref(-1)
  const y = ref(-1)
  const clickHandlder = (event: MouseEvent) => {
    x.value = event.pageX
    y.value = event.pageY
  }

  // 页面已经加载完毕了，再进行点击的操作
  // 页面加载完毕的生命周期组合 API
  onMounted(() => {
    window.addEventListener('click', clickHandlder)
  })

  // 页面卸载之前的声明周期组合 API
  onBeforeUnmount(() => {
    window.removeEventListener('click', clickHandlder)
  })

  return {
    x,
    y
  }
}
