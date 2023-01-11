<template>
  <main-view></main-view>
</template>

<script>
import MainView from '@/components/MainView.vue'
import {ref} from 'vue'

export default {
  name: 'App',
  setup(){
    //数据 ref 响应式数据
    // let name = ref('劳克斯')
    // let age = ref(28)

    //方法
    // function changeInfo() {
    //   name.value = '兰克斯'
    //   age.value = 24
    //   alert(`我是${name.value},今年${age.value}`)
    // }

    // 返回对象（常用）
    return {
      // name,
      // age,
      // changeInfo
    }

    // 返回渲染函数
    // return () =>  h('h1','看历史')
  },
  components: {
    MainView
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
