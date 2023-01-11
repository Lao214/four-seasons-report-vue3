<template>
  <div class="body">
    第一页
    <div class="notepad">
      <div class="top"></div>
      <transition name="paper" appear>
      <div class="paper" v-show="showPageOne" contenteditable="true">
        Hello, this is a paper.<br>
        Click to write your message.
      </div>
      </transition>
    </div>
    <div class="sekuai2">
    </div>
    <div class="sekuai"> 
    </div>
    <transition name="pencil" appear>
      <div class="pencil" v-show="showPageOne">
        <span class="taper"></span>
        <span class="barrel">Think Different</span>
        <span class="eraser"></span>
      </div>
    </transition>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  props: {
    showPageOne: {
      type: Boolean,
      default: true
    },
  },
  components: {

  },
  setup() {

    return {

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

.pencil-enter-active {
  animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both 0.5s;
}
.pencil-leave-active {
  animation: slide-in-top-reverse 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.paper-enter-active {
  animation: swing-in-top-bck 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both .8s;
}
.paper-leave-active {
  animation: swing-in-top-bck-reverse 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
}

</style>
