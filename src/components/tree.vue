<template>
  <div v-for="(item,index) in newOptions" :key="index">
    <span>
      <div style="display: flex; padding: 5px;">
      <label class="checkBox" :id="item.id" @click.stop="isChecked(item)">
        <input id="ch1" type="checkbox">
        <div class="transition"></div>
      </label>
      <span style="margin-left: 5px;line-height: 36px;font-weight: 700;font-size: 1.1rem;color: #16a085;font-family:cursive;"  @click.stop="isOpen(item)">{{ item.label }}</span>
      </div>
      <transition name="slide-fade">
        <ul v-show="item.isOpened" v-if="item.children && item.children.length">
          <tree :options="item.children"></tree>
        </ul>
      </transition>
    </span>
  </div>
</template>

<script>
import tree from './tree.vue'
import {ref} from 'vue'

  export default {
    props: {
      options: {
        type: Array,
        default: []
      }
    },
    components: {
      tree
    },
    data() {
      return {
        newOptions: this.options
      }
    },
    methods: {
      isOpen(item) {
        item.isOpened = !item.isOpened
        console.log(item)
      },
      isChecked(item) {
        if(!item.isCheckedNum) {
          item.isCheckedNum = 0
        }
        item.isCheckedNum = item.isCheckedNum+1
        if(item.isCheckedNum%4 === 2) {
          item.isChecked = true
        } else {
          item.isChecked = false
        }
        if(item.isChecked === true && item.children && item.children.length) {
          for (let i = 0; i < item.children.length; i++) {
            
          }
        }
        // console.log(item.isChecked)
      }
    },
    setup() {
      
    }
  }
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active{
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.content{
  display: flex;
}

.clear {
  clear: both;
}

.checkBox {
  display: block;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border: 3px solid rgba(255, 255, 255, 0);
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 0px 0px 2px  #abe8e8;
  
}

.checkBox div {
  width: 60px;
  height: 60px;
  background-color:  #abe8e8;
  top: -52px;
  left: -52px;
  position: absolute;
  transform: rotateZ(45deg);
  z-index: 100;
}

.checkBox input[type=checkbox]:checked + div {
  left: -10px;
  top: -10px;
}

.checkBox input[type=checkbox] {
  position: absolute;
  left: 50px;
  visibility: hidden;
}

.transition {
  transition: 300ms ease;
}
</style>