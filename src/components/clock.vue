<template>
  <!-- <div class="line"> -->
    <div id="clock" >
      <div id="hours" />
      <div id="minutes" />
      <div id="seconds" />
    </div>
  <!-- </div> -->
</template>

<script>


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

    return {

    }

  },
  components: {
    
  }
}
</script>

<style scoped>
  .line {
    display: flex;
    align-items: center;
  }
  #clock {
    box-sizing: border-box;
    width: 225px;
    height: 225px;
    border: 17px solid cadetblue;
    border-radius: 50%;
    margin: 0;
    transform: rotate(-90deg);
  }
  @media screen and (min-width: 1201px) {
      #clock {
      box-sizing: border-box;
      width: 225px;
      height: 225px;
      border: 17px solid cadetblue;
      border-radius: 50%;
      margin: 0;
      transform: rotate(-90deg);
    }
  }
  @media screen and (max-width: 1201px) {
      #clock {
      box-sizing: border-box;
      width: 225px;
      height: 225px;
      border: 17px solid cadetblue;
      border-radius: 50%;
      margin: 0;
      transform: rotate(-90deg);
      scale: 0.8;
    }
  }
  @media screen and (max-width: 701px) {
      #clock {
      box-sizing: border-box;
      width: 225px;
      height: 225px;
      border: 17px solid cadetblue;
      border-radius: 50%;
      margin: 0;
      transform: rotate(-90deg);
      scale: 0.74;
    }
  }
  @media screen and (max-width: 501px) {
      #clock {
      /* box-sizing: border-box; */
      width: 225px;
      height: 225px;
      border: 17px solid cadetblue;
      border-radius: 50%;
      margin: 0;
      transform: rotate(-90deg);
      scale: 0.64;
    }
  }
  @media screen and (max-width: 301px) {
      #clock {
      /* box-sizing: border-box; */
      width: 225px;
      height: 225px;
      border: 17px solid cadetblue;
      border-radius: 50%;
      margin: 0;
      transform: rotate(-90deg);
      scale: 0.51;
    }
  }
  #clock:after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    background: black;
    border: 12px solid cadetblue;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  #hours,
  #minutes,
  #seconds {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  #hours {
    transform: rotate(70deg);
  }
  #minutes {
    transform: rotate(110deg);
  }
  #hours:after, #hours:after, #hours:after,
  #minutes:after,
  #minutes:after,
  #minutes:after,
  #seconds:after,
  #seconds:after,
  #seconds:after {
    content: "";
    display: block;
    margin: 50% 50%;
    width: 50%;
    transform-origin: left top;
    -webkit-animation: clock linear infinite;
            animation: clock linear infinite;
  }

  #hours:after {
    width: 30%;
    outline: 8px solid cadetblue;
    -webkit-animation-duration: 86400s;
            animation-duration: 86400s;
  }

  #minutes:after {
    width: 40%;
    outline: 4px solid cadetblue;
    -webkit-animation-duration: 3600s;
            animation-duration: 3600s;
  }

  #seconds:after {
    width: 48%;
    outline: 2px solid cadetblue;
    -webkit-animation-duration: 60s;
            animation-duration: 60s;
  }

  @-webkit-keyframes clock {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes clock {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
