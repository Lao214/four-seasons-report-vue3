<template>
  <!-- <v-touch v-on:swipeleft="swiperleft"  v-on:swiperight="swiperright" class="wrapper"> -->
    <div class="body" @touchstart="handleTouchStart" @touchend="hanldeTouchEnd">
      <transition name="sekuai" appear>
        <div class="sekuai2" v-show="page === 1" />
      </transition>
      <transition name="sekuai" appear>
        <div class="sekuai"  v-show="page === 1" />
      </transition>
      <div style="position:absolute;text-align:center;width:100%;bottom: 5%;font-size: 0.7em;" v-show="page <= 5" >上滑屏幕继续</div>

      <!-- 第一页start -->
      <transition name="one" appear>
        <div class="one" v-show="page === 1">
          <div class="notepad">
            <transition name="laptop" appear>
              <div class="top" v-show="page === 1" />
            </transition>
            <transition name="paper" appear>
              <div class="paper" v-show="page === 1" contenteditable="true">
                Hello, this is a paper.<br>
                Click to write your message.
              </div>
            </transition>
          </div>
          <transition name="pencil" appear>
            <div class="pencil" v-show="page === 1">
              <span class="taper"></span>
              <span class="barrel">Think Different</span>
              <span class="eraser"></span>
            </div>
          </transition>
        </div>
      </transition>
      <!-- 第一页end -->
      
      <!-- 第二页start -->
      <transition name="two" appear>
        <div class="two" v-show="page === 2">
          <div class="twoneirong">
            <div class="Carrot">
              <transition name="sekuai" appear>
                <div class="Carrot-header" v-show="page === 2">
                  <div class="carrot-leaf1"></div>
                  <div class="carrot-leaf2"></div>
                  <div class="carrot-leaf3"></div>
                </div>
              </transition>
              <transition name="laptop" appear>
                <div class="Carrot-body"  v-show="page === 2">
                  <div class="eyes-left"></div>
                  <div class="eyes-right"></div>
                  <div class="mouth"></div>
                </div>
              </transition>
            </div>
            <div class="carrot-text">
              <p>Niugaoda is not only beautiful</p>
            </div>
          </div>
        </div>
      </transition>
      <!-- 第二页end -->

      <!-- 第三页start -->
      <transition name="three" appear>
        <div class="three" v-show="page === 3">
          <div class="containers">
          <!-- 电脑与键盘 -->  
            <transition name="screen" appear>
              <div class="screen monitor" v-show="page === 3">
                <div class="content">
                  <div class="pg">
                  </div>
                </div>
                <div class="base">
                  <div class="foot top"></div>
                  <div class="foot bottom"></div>
                  <div class="keyboard">
                    <div class="btm"></div>
                  </div>
                </div>
              </div>
            </transition>
          <!-- 电脑与键盘 -->  
          <!-- 笔记本电脑 -->
            <transition name="laptop" appear>
              <div class="laptop" v-show="page === 3">
                <div class="content">
                </div>
                <div class="btm"></div>
              </div>
            </transition>
          <!-- 笔记本电脑 -->
          <!-- 手机 -->
            <transition name="phone" appear>
              <div class="phone" v-show="page === 3">
                <div class="screen">
                  <div class="content">
                  </div>
                </div>       
              </div>
            </transition>
          <!-- 手机 -->
          </div>
        </div>
      </transition>
      <!-- 第三页end -->

      <!-- 第四页start -->
      <transition name="four" appear>
        <div class="four" v-show="page === 4">

          <transition name="clock" appear>
            <div v-show="page === 4">
              <clock />
              <div style="padding-left: 10%;width: 85%;font-size: 1.2rem;">
                明月几时有，把酒问青天，不知天上宫阙，今夕是何年。但愿人长久，千里共婵娟
              </div>
            </div>
          </transition>

          <transition name="book" appear>
            <div v-show="page === 4">
              <book />
              <div style="padding-left: 10%;width: 85%;font-size: 1.2rem;">
                嘴里挑灯看剑，梦回吹角连营。八百里分麾下炙，五十弦翻塞外声，沙场秋点兵
              </div>
            </div>
          </transition>
        </div>
      </transition>
      <!-- 第四页end -->

       <!-- 第五页start -->
       <transition name="five" appear>
        <div class="five" v-show="page === 5">
          <div class="outer">
            <div class="inter">
              <el-tree :data="data" :default-expanded-keys="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]" ref="tree"  show-checkbox  node-key="id"  :props="defaultProps"  @check-change="handleCheckChange"></el-tree>
            </div>
          </div>
        </div>
      </transition>
      <!-- 第五页end -->
    </div>
</template> 

<script>
import {ref} from 'vue'
import clock from './clock.vue'
import book from './book.vue'

export default {
  props: {
    showPageOne: {
      type: Boolean,
      default: true
    }
  },
  components: {
    clock,
    book
  },
  watch: {
    showPageOne(newDF, oldDF) {
      if(newDF === true) {
        console.log(newDF)
        this.page = 1
      }
    }
  },
  setup() {
    let startTime = ref(0)
    let endTime = ref(0)
    let touchStartX = ref(0)
    let touchEndX = ref(0)
    let touchStartY = ref(0)
    let touchEndY = ref(0)
    let interval = ref(3000)
    let distance = ref(20)
    let oneShow = ref(true)
    let page = ref(0)
    const value = ref()
    const valueStrictly = ref()
    const defaultProps = ref({children: 'children',label: 'label'})
    const tree = ref()
    const data = [
  {
    value: '1',
    label: 'Level one 1',
    children: [
      {
        value: '1-1',
        label: 'Level two 1-1',
        children: [
          {
            value: '1-1-1',
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    value: '2',
    label: 'Level one 2',
    children: [
      {
        value: '2-1',
        label: 'Level two 2-1',
        children: [
          {
            value: '2-1-1',
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        value: '2-2',
        label: 'Level two 2-2',
        children: [
          {
            value: '2-2-1',
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    value: '3',
    label: 'Level one 3',
    children: [
      {
        value: '3-1',
        label: 'Level two 3-1',
        children: [
          {
            value: '3-1-1',
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        value: '3-2',
        label: 'Level two 3-2',
        children: [
          {
            value: '3-2-1',
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
]

    function handleTouchStart(e) {
      this.startTime = Date.now()
      this.touchStartX = e.changedTouches[0].clientX
      this.touchStartY = e.changedTouches[0].clientY
    }

    function handleCheckChange(data, checked, indeterminate) {
      // let array = this.tree.value.getCheckedNodes()
      console.log(data)
      console.log(checked)
    }


    function sumbitTree() {
      // this.studyList = ''
      let array = this.$refs.tree.getCheckedNodes()
      console.log(array)
      // for (let i = 0; i < array.length; i++) {
      //   if(!array[i].children) {
      //     this.studyList =  this.studyList + ',' + array[i].class + array[i].label
      //   }
      // }
      // const view = {
      //   comment: this.comment,
      //   studyList: this.studyList
      // }
      // this.$emit('sumbit',view)
      // console.log('提交我的留言' + this.comment)
    }

    function hanldeTouchEnd(e) {
      this.endTime = Date.now()
      this.touchEndX = e.changedTouches[0].clientX
      this.touchEndY = e.changedTouches[0].clientY
      // 判断是否超时
      // if (this.endTime - this.startTime > this.interval) {
      //   return
      // }
      // 判断是否超过一定滑动距离
      // if (Math.abs(this.touchEndX - this.touchStartX) < this.distance || Math.abs(this.touchEndY - this.touchStartY) > this.distance) {
      //   return 
      // }
      // 判断是否超过一定滑动距离
      if (Math.abs(this.touchEndY - this.touchStartY) < this.distance) {
          return 
      }
      // 判断滑动的方向
      // const direction = this.touchEndX - this.touchStartX < 0 ? 'right' : 'left'
      const direction2 = this.touchEndY - this.touchStartY < 0 ? 'up' : 'down'
      // console.log(direction)
      // console.log(direction2)

      if(direction2 === 'up' && this.page < 5) {
        this.page = this.page + 1
      }
      else if(direction2 === 'down' && this.page > 1) {
        this.page = this.page - 1
      }
    }



    return {
      startTime,
      endTime,
      touchStartX,
      touchEndX,
      touchStartY,
      touchEndY,
      interval,
      distance,
      handleTouchStart,
      hanldeTouchEnd,
      oneShow,
      page,
      data,
      value,
      valueStrictly,
      defaultProps,
      handleCheckChange,
      sumbitTree,
      tree
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
  background: #EDF6E5;
  color: #34495e;
  font-family: "Lato", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.2;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
}

.sekuai {
  position: absolute;
  width: 360px;
  height: 240px;
  bottom: 0;
  right: 0;
  overflow: hidden;
  background: #B5EAEA;
  border-radius: 100% 0% 100% 0% / 100% 51% 49% 0% ;

}

.sekuai2 {
  position: absolute;
  width: 217px;
  height: 217px;
  top: -5%;
  left: -4%;
  overflow: hidden;
  background: #B5EAEA;
  border-radius: 46% 54% 46% 54% / 30% 87% 13% 70% ;
}

.pencil {
  position: absolute;
  bottom:77%;
  width: 50vh;
  height: 3.5vh;
  font-size: 10px;
  filter: drop-shadow(5px 10px 3px gray);
  transform: rotate(-17deg);
  z-index: 117;
}

.pencil .barrel {
  position: absolute;
  width: 40vh;
  left: 4em;
  background-color: green;
  border-top: 1em solid forestgreen;
  border-bottom: 1em solid darkgreen;
  color: silver;
  line-height: 1.5em;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.pencil .taper::before,
.pencil .taper::after {
  content: "";
  position: absolute;
  left: -4em;
  border-style: solid;
  border-width: calc(3.5em / 2) 4em;
}

.pencil .taper::before {
  border-color: transparent burlywood transparent transparent;
}

.pencil .taper::after {
  border-color: transparent black transparent transparent;
  transform: scale(0.3);
}

.pencil .eraser {
  position: absolute;
  right: 0;
  width: 6vh;
  height: 1.5em;
  background-color: lightpink;
  border-top: 1em solid pink;
  border-bottom: 1em solid lightcoral;
  border-top-right-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
}

.pencil .eraser::before {
  content: "";
  position: absolute;
  top: -1em;
  left: 0;
  width: 1.5em;
  height: 1.5em;
  background-color: silver;
  border-top: 1em solid lightgray;
  border-bottom: 1em solid gray;
}


.notepad {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 20vh;
  width: 80%;
  max-width: 600px;
  box-shadow: 10px 10px 40px rgba(black, 0.15);
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  z-index: 111;
}

.top {
  margin: 0 auto;
  width: 100%;
  height: 50px;
  background: #FFBCBC;
  border-radius: 5px 5px 0 0;
}

.paper {
  margin: 0 auto;
  width:  90%;
  height: 100%;
  min-height: 27vh;
  padding: 35px 20px;
  background: repeating-linear-gradient(
    #f1ede9,
    #f1ede9 31px,
    #94acd4 31px,
    #94acd4 32px
  );
  font-family: "Shadows Into Light", cursive;
  line-height: 32px;
  outline: 0;
  font-size: 22px;
}


@keyframes slide-in-top {
  0% {
    transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-top-reverse {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-1000px);
    opacity: 0;
  }
}

@keyframes swing-in-top-bck {
  0% {
    transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes swing-in-top-bck-reverse {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-1000px);
    opacity: 0;
  }
}
@keyframes text-blur-out {
  0% {
    filter: blur(0.01);
  }
  100% {
    filter: blur(12px) opacity(0%);
  }
}

@keyframes jello-horizontal {
  0% {
    transform: scale3d(0.41, 0.17, 0.27);
  }
  30% {
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    transform: scale3d(0.75, 1.25, 1);
    
  }
  50% {
    transform: scale3d(1.15, 0.85, 1);
    
  }
  65% {
    transform: scale3d(0.95, 1.05, 1);
  
  }
  75% {
    transform: scale3d(1.05, 0.95, 1);
  
  }
  100% {
    transform: scale3d(1, 1, 1);
    
  }
}

@keyframes jello-horizontal-laptop {
  0% {
    transform: scale3d(0, 0, 0);
  }
  30% {
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    transform: scale3d(0.75, 1.25, 1);
    
  }
  50% {
    transform: scale3d(1.15, 0.85, 1);
    
  }
  65% {
    transform: scale3d(0.95, 1.05, 1);
  
  }
  75% {
    transform: scale3d(1.05, 0.95, 1);
  
  }
  100% {
    transform: scale3d(1, 1, 1);
    
  }
}


@keyframes jello-horizontal-out {
  0% {
    transform: skew(0deg 0deg);
  }
  30% {
    transform: skew(25deg 25deg);
  }
  40% {
    transform: skew(-15deg, -15deg);
  }
  50% {
    transform: skew(15deg, 15deg);
    transform: scale3d(00.75, 00.75, 0.75);
  }
  65% {
    transform: skew(-5deg, -5deg);
    transform: scale3d(0.5, 0.5, 0.5);
  }
  75% {
    transform: skew(5deg, 5deg);
    transform: scale3d(0.25, 0.25, 0.25);
  }
  100% {
    transform: skew(0deg 0deg);
    transform: scale3d(0, 0, 0);
  }
}

.pencil-enter-active {
  animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both 0.5s;
}
.pencil-leave-active {
  animation: text-blur-out .7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}
.paper-enter-active {
  animation: swing-in-top-bck 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both .8s;
}
.paper-leave-active {
  animation: text-blur-out .7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}
.one-leave-active {
  animation: text-blur-out .7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}
.sekuai-enter-active {
  animation: jello-horizontal-out .5s reverse;
}
.sekuai-leave-active {
  animation: jello-horizontal-out .5s both;
}
.screen-enter-active {
  animation: jello-horizontal 0.7s both;
}
.screen-leave-active {
  animation: text-blur-out .7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}

.laptop-enter-active {
  animation: jello-horizontal-laptop .7s both .4s;
}
.laptop-leave-active {
  animation: text-blur-out .7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}

.phone-enter-active{
	animation: jello-horizontal-laptop .7s both .7s;
}

.phone-leave-active{
  animation: text-blur-out .7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}
.book-enter-active{
  animation: slide-in-right .9s cubic-bezier(.25,.46,.45,.94) both
}

.book-leave-active{
  animation: text-blur-out .7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}

.clock-enter-active{
  animation: slide-in-left .9s cubic-bezier(.25,.46,.45,.94) both
}

.clock-leave-active{
  animation: text-blur-out .7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}
@keyframes slide-in-left{
  0%{transform:translateX(-1000px);opacity:0}100%{transform:translateX(0);opacity:1}
}
@keyframes slide-in-right{
  0%{transform:translateX(1000px);opacity:0}100%{transform:translateX(0);opacity:1}
}
@keyframes slide-out-right{
  0%{transform:translateX(0);opacity:1}100%{transform:translateX(1000px);opacity:0}
}


/* 第二页 */
.three {
  display: flex;
  /* height: 100vh; */
  transform: translateY(317px);
  /* position: absolute; */
  justify-content: center;
}
.containers {
  width: 700px;
  /* HAVE SCALED TO FIT THE WINDOW */
  transform: scale(0.47);
}

.containers > .screen {
  width: 460px;
  height: 280px;
  position: relative;  
  background: #ff6860;
  border: 20px solid #474e5d;
  border-radius: 10px;
}

.monitor > div {
  position: absolute;
}

.monitor:before,
.monitor:after,
.laptop:before{
   content: "";
   position: absolute;
   left: 50%;
 }

.monitor:before,
.laptop:before {
  top: -10px;
  margin: -3px 0 0 -3px;
  width: 6px;
  height: 6px;
  border-radius: 6px;
  background: #a5adbd;
}

.screen:after {
  width: 8px;
  height: 8px;
  border-radius: 8px;
  bottom: -10px;
  margin: 0 0 -4px -4px;
  background: #e8ebf0;
}

.content {
  width: 420px;
  height: 240px;
  left: 50%;
  margin-left: -210px;
  overflow: hidden;
}

.content:before {
  content: "";
  position: absolute;
  right: -90px;
  width: 200px;
  height: 300px;
  transform: rotate(45deg);
  background: linear-gradient(to bottom, rgba(255,255,255,0.1) 0%,rgba(255,255,255,0) 100%);
  z-index: 5;
}

.pg {
  width: 240px;
  height: 180px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -90px 0 0 -120px;
  background: #ffffff;
  border: 1px solid #f4f5f7;
  border-top: 20px solid #f4f5f7;
  border-radius: 5px;
  box-shadow: 0 5px 0 #e0625e;
}

.base {
  width: 90px;
  height: 50px;
  bottom: -70px;
  left: 50%;
  margin-left: -45px;
  background: #e8ebf0;
}

.base:before,
.base:after,
.grey-shadow:before,
.grey-shadow:after{
  content: "";
  position: absolute;
  top: 0;
}

.base:before {
  border-left: 13px solid transparent;
  border-right: 0px solid transparent;
  border-bottom: 50px solid #e8ebf0;
  left: -13px;
}

.base:after {
  border-right: 13px solid transparent;
  border-left: 0px solid transparent;
  border-bottom: 50px solid #e8ebf0;
  right: -13px;
}

.base > div {
   position: absolute; 
}


.foot {
  background: #e8ebf0;
  z-index: 1;
}

.foot.top {
  width: 116px;
  height: 5px;
  bottom: -5px;
  left: 50%;
  margin-left: -58px;
}

.foot.top:before,
.foot.top:after,
.foot.bottom:before {
  content: "";
  position: absolute;
  top: 0px;
}

.foot.top:before {
  border-left: 16px solid transparent;
  border-right: 0px solid transparent;
  border-bottom: 5px solid #e8ebf0;
  left: -16px;
}

.foot.top:after {
  border-right: 16px solid transparent;
  border-left: 0px solid transparent;
  border-bottom: 5px solid #e8ebf0;
  right: -16px;
}


.foot.bottom {
  width: 150px;
  height: 5px;
  bottom: -10px;
  left: 50%;
  margin-left: -75px;
  z-index: 999;
}

.laptop {
  width: 235px;
  height: 155px;
  background: #fc9252;
  border: 12px solid #e8ebf0;
  border-radius: 10px 10px 0 0;
  position: absolute;
  top: 200px;
  left: 47vh;
}

.laptop:before {
 top: -6px;
}

.laptop > div {
  position: absolute; 
}

.laptop > .content {
  width: 211px;
  height: 131px;
  left: 0;
  margin-left: 0;
}

.btm {
  width: 296px;
  height: 7px;
  bottom: -19px;
  left: 50%;
  margin-left: -148px;
  border-radius: 0 0 20px 20px;
  background: #f4f5f7;
  z-index: 1;
}

.btm:before {
  content: "";
  position: absolute;
  width: 42px;
  height: 3px;
  left: 50%; 
  top: 0;
  margin-left: -21px;
  border-radius: 0 0 5px 5px;
  background: #d8dbe1;
}

.keyboard {
  width: 216px;
  height: 35px;
  bottom: -70px;
  left: 50%;
  margin-left: -108px;
  background: #e8ebf0;
  box-shadow: 0 4px 0 #d8dbe1;
  z-index: 2;
}

.keyboard:before,
.keyboard:after {
  content: "";
  position: absolute;
  top: 0;
  z-index: 2;
}

.keyboard > div {
   position: absolute; 
}

.keyboard .btm {
  background: #d8dbe1;
  width: 244px;
  height: 4px;
  border-radius: 0;
  bottom: -4px;
  left: 50%;
  margin-left: -122px;
}


.keyboard:before {
  border-left: 14px solid transparent;
  border-right: 0px solid transparent;
  border-bottom: 35px solid #e8ebf0;
  left: -14px;
}

.keyboard:after {
  border-right: 14px solid transparent;
  border-left: 0px solid transparent;
  border-bottom: 35px solid #e8ebf0; 
  right: -14px;
}

.phone {
  width: 70px;
  height: 120px;
  position: absolute;
  bottom: -90px;
  left: -10px;
  border-radius: 5px;
  background: #000;
  border: 25px solid #2f343e;
  border-left: 5px solid #2f343e;
  border-right: 5px solid #2f343e;
}

.phone:before,
.phone:after {
  content: "";
  position: absolute;
  left: 50%;
  background: #474e5d;
}

.phone:before {
  background: #474e5d;
  width: 20px;
  height: 4px;
  margin-left: -10px;
  top: -12px;
  border-radius: 2px;
}

.phone:after {
  width: 10px;
  height: 10px;
  border-radius: 10px;
  bottom: -18px;
  margin-left: -5px;
}

.phone .screen {
  width: 70px;
  height: 117px;
  position: relative;
  overflow: hidden;
}

.phone .content {
  background: #fff;
  width: 80px;
  left: 0%;
  margin-left: 0px;
}

/** 胡萝卜 **/
.twoneirong {
  margin: 27vh auto;
  display: flex;
  /* height: 100vh; */
}
.carrot-text {
  display: flex;
  padding-right: 17px;
  align-items: center;
}
.Carrot {
    display: flex;
    width:150px;
    flex-wrap: wrap;
    justify-content: center;
    /* transform: scale(0.5); */
  }
  .Carrot-header {
    height: 50px;
    width: 150px;
    display: flex;
    transform: translateY(10px);
  }
  .carrot-leaf1 {
    border-radius: 0% 100% 1% 99% / 0% 100% 0% 100%;
    background-color: forestgreen;
    width: 50px;
    height: 50px;
    position: relative;
    left: 20%;
  }
  .carrot-leaf2 {
    border-radius: 0% 100% 1% 99% / 0% 100% 0% 100%;
    transform: rotate(45deg);
    background-color: forestgreen;
    width: 50px;
    height: 50px;
  }
  .carrot-leaf3 {
    border-radius: 100% 0% 100% 0% / 100% 0% 100% 0%;
    background-color: forestgreen;
    width: 50px;
    height: 50px;
    position: relative;
    right: 20%;
  }
  .Carrot-body {
    background-color: rgb(243, 129, 57);
    height: 150px;
    width: 50px;
    border-radius: 70% 70% 90% 90%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    z-index: 17;
  }
  .eyes-left {
    width: 10px;
    height: 10px;
    background-color: black;
    border-radius: 50%;
    border: 4px white solid;
    position: relative;
    top: 21%;
    margin-right: 5px;
    animation: blinking  1.7s infinite;
  }
  .eyes-right {
    width: 10px;
    height: 10px;
    background-color: black;
    border-radius: 50%;
    border: 4px white solid;
    position: relative;
    top: 21%;
    margin-left: 5px;
    animation: blinking  1.7s infinite;
  }
  .mouth {
    border-radius: 0% 100% 50% 50% / 0% 0% 100% 100% ;
    background-color: rgb(62, 0, 0);
    width: 40px;
    height: 17px;
  }

  /* 眨眼特效 */
  @keyframes blinking {
    0%,
    40%,
    60% {
      clip-path: ellipse(100% 100% at 50% 48%);
    }
    75%,
    90% {
      clip-path: ellipse(100% 2% at 50% 48%);
    }
    100% {
      clip-path: ellipse(100% 100% at 50% 48%);
    }
  }

</style>
