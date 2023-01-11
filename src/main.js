//引入的是一个名为createApp的工厂函数。
import { createApp } from 'vue'
import App from './App.vue'
// import vueTouch from 'vue-touch'

// createApp(App).mount('#app')


// 创建应用实例对象——app（类似vue2 中的 vm）
// 但app比vm更加轻量化
const app = createApp(App)

app.mount('#app')

//vue2 
  // const vm = new Vue({
  //   render:h => h(App)
  // })
  // vm.$mount('#app')