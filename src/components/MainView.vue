<template>
  <div class="view">
    <transition name="index" appear>
      <!-- 工号页的层级为121 -->
      <index style="z-index: 121;" v-show="showIndex" @startMyYear="showIndex = false,showPageOne = true" />
    </transition>
    <!-- 第一页的最低层级为111 最高层级为117 -->
    <pageOne v-show="showPageOne" :showPageOne="showPageOne" />
  </div>
</template>

<script>
import index from '@/components/index.vue'
import pageOne from '@/components/PageOne.vue'
import {ref} from 'vue'

export default {
  components: {
    index,
    pageOne
  },
  setup() {
    let showIndex = ref(true)
    let showPageOne = ref(false)


    return {
      showIndex,
      showPageOne
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@keyframes text-focus-in {
  0% {
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    filter: blur(0px);
    opacity: 1;
  }
}

@keyframes puff-in-center-reverse {
  0% {
    transform: scale(1);
    filter: blur(0px);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    filter: blur(4px);
    opacity: 0;
  }
}

.index-enter-active {
  animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}
.index-leave-active {
  animation: puff-in-center-reverse 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}
</style>
