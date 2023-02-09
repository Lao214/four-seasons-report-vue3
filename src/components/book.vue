<template>
  <!-- <div class="body"> -->
    <div class="book">
      <div class="page">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
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
    // MainView
  }
}
</script>

<style scoped>
* {
	box-sizing: border-box;
}

.book {
	--sw: 0.4em; /* stroke width */
	width: 300px;
	height: 200px;
	background-color: lightyellow;
	border: var(--sw) solid cadetblue;
	border-radius: var(--sw);
	font-size: 20px;
	position: relative;
  margin-left: auto;
  margin-top: 35px;
  margin-bottom: 27px;
}

@media screen and (min-width: 1201px) {
    .book {
    --sw: 0.4em; /* stroke width */
    width: 300px;
    height: 200px;
    background-color: lightyellow;
    border: var(--sw) solid cadetblue;
    border-radius: var(--sw);
    font-size: 20px;
    position: relative;
    margin-top: 35px;
    margin-bottom: 27px;
  }
}
  @media screen and (max-width: 1201px) {
      .book {
      --sw: 0.4em; /* stroke width */
      width: 300px;
      height: 200px;
      background-color: lightyellow;
      border: var(--sw) solid cadetblue;
      border-radius: var(--sw);
      font-size: 20px;
      position: relative;
      scale: 0.8;
      margin-top: 35px;
      margin-bottom: 27px;
    }
  }
  @media screen and (max-width: 701px) {
    .book {
      --sw: 0.4em; /* stroke width */
      width: 300px;
      height: 200px;
      background-color: lightyellow;
      border: var(--sw) solid cadetblue;
      border-radius: var(--sw);
      font-size: 20px;
      position: relative;
      scale: 0.74;
      margin-top: 35px;
      margin-bottom: 27px;
    }
  }
  @media screen and (max-width: 501px) {
      .book {
      --sw: 0.4em; /* stroke width */
      width: 11em;
      height: 7.2em;
      background-color: lightyellow;
      border: var(--sw) solid cadetblue;
      border-radius: var(--sw);
      font-size: 20px;
      position: relative;
      margin-top: 35px;
      margin-bottom: 17px;
      margin-left: auto;
      /* scale: 0.51; */
    }
  }
  @media screen and (max-width: 301px) {
    .book {
    --sw: 0.4em; /* stroke width */
    width: 12em;
    height: 7em;
    background-color: lightyellow;
    border: var(--sw) solid cadetblue;
    border-radius: var(--sw);
    font-size: 20px;
    position: relative;
    margin-left: auto;
    margin-top: 27px;
    margin-bottom: 7px;
  }
  }


.book .page {
	height: inherit;
	width: calc(50% + var(--sw) + var(--sw) / 2);
	background-color: inherit;
	border: inherit;
	border-radius: inherit;
	position: absolute;
	top: calc(-1 * var(--sw));
	right: calc(-1 * var(--sw));
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 8% 5%;
	/* animation: flip 4s linear both; */
	transform-origin: left;
	transform-style: preserve-3d;
}

.book .page span {
	display: block;
	width: 100%;
	border-top: var(--sw) solid cadetblue;
	border-radius: inherit;
	animation: 4s linear both;
	transform-origin: left;
	transform: scaleX(0);
	backface-visibility: hidden;
}

.book .page span:nth-child(1) {
	animation-name: stroke-1;
}

.book .page span:nth-child(2) {
	animation-name: stroke-2;
}

.book .page span:nth-child(3) {
	animation-name: stroke-3;
}

.book .page span:nth-child(4) {
	animation-name: stroke-4;
}

.book .page span:nth-child(5) {
	animation-name: stroke-5;
}

@keyframes stroke-1 {
	0% {
		transform: scaleX(0);
	}

	10%, 100% {
		transform: scaleX(1);
	}
}

@keyframes stroke-2 {
	10% {
		transform: scaleX(0);
	}

	20%, 100% {
		transform: scaleX(1);
	}
}

@keyframes stroke-3 {
	20% {
		transform: scaleX(0);
	}

	30%, 100% {
		transform: scaleX(1);
	}
}

@keyframes stroke-4 {
	30% {
		transform: scaleX(0);
	}

	40%, 100% {
		transform: scaleX(1);
	}
}

@keyframes stroke-5 {
	40% {
		transform: scaleX(0);
	}

	50%, 100% {
		transform: scaleX(1);
	}
}

</style>
