<template>
<div class="body">
 <div class="component">
    <ul class="align">
      <li>
        <figure class='book'>

          <!-- Front -->

          <ul id="cover" class='hardcover_front'>
            <li>
              <div class="coverDesign bookcolor">
                <h1>富学宝典</h1>
                <p>一月个人学习报告</p>
              </div>
            </li>
            <li></li>
          </ul>

          <!-- Pages -->

          <ul class='page'>
            <li id='page1'></li>
            <li id="page2">
              <a class="btn" href="#" @click="$emit('startMyYear')">开始查看</a>
            </li>
            <li id="page3"></li>
            <li id="page4"></li>
            <li id="page5"></li>
          </ul>

          <!-- Back -->

          <ul class='hardcover_back'>
            <li></li>
            <li></li>
          </ul>
          <ul class='book_spine'>
            <li></li>
            <li></li>
          </ul>
          <div class="titles">
            <h1>春光应不负今年</h1>
            <span>—— 白居易《会昌元年春五绝句·赠举之仆射》</span>
            <div class="search-box" v-show="inputShow">
              <input type="text" placeholder="请输入工号" />
              <span class="fa" @click="sumbit">✔</span>
            </div>
          </div>
        </figure>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import {ref} from 'vue'

export default {
  emits: ['startMyYear'],
  setup(){
    //数据 ref 响应式数据
    function sumbit() {
      var doc = document.querySelector('#cover')
      var page1 = document.querySelector('.page li:nth-child(1)')
      var page2 = document.querySelector('.page li:nth-child(2)')
      var page3 = document.querySelector('.page li:nth-child(3)')
      var page4 = document.querySelector('.page li:nth-child(4)')
      var page5 = document.querySelector('.page li:nth-child(5)')
      doc.classList.add('fanye1')
      page1.classList.add('fanye2')
      page2.classList.add('fanye3')
      page3.classList.add('fanye4')
      page4.classList.add('fanye5')
      page5.classList.add('fanye6')
      this.inputShow = false
    }

    let  inputShow = ref(true)

     // 返回对象（常用）
     return {
      inputShow,
      sumbit
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
::before,
::after {
  content: "";
}

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

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: #2c3e50;
  text-decoration: none;
}

.btn {
  display: inline-block;
  text-transform: uppercase;
  border: 2px solid #2c3e50;
  margin-top: 100px;
  font-size: 0.9em;
  font-weight: 700;
  padding: 0.1em 0.4em;
  text-align: center;
  -webkit-transition: color 0.3s, border-color 0.3s;
  -moz-transition: color 0.3s, border-color 0.3s;
  transition: color 0.3s, border-color 0.3s;
}

.btn:hover {
  border-color: #16a085;
  color: #16a085;
}

/* basic grid, only for this demo */

.align {
  clear: both;
  margin: 90px auto 20px;
  width: 100%;
  max-width: 1170px;
  text-align: center;
}

.align > li {
  width: 500px;
  min-height: 300px;
  display: inline-block;
  margin: 30px 20px 30px 30px;
  padding: 0 0 0 60px;
  vertical-align: top;
}

/* ///////////////////////////////////////////////////

色调：
主：  #EDF6E5
次：  #F38BA0
点缀：#B5EAEA
点缀：#FFBCBC

/////////////////////////////////////////////////////*/

/*
	1. container
*/

.book {
  position: relative;
  width: 160px;
  height: 220px;
  -webkit-perspective: 1000px;
  -moz-perspective: 1000px;
  perspective: 1000px;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

/*
	2. background & color
*/

/* HARDCOVER FRONT */
.hardcover_front li:first-child {
  background-color: #eee;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
}

/* reverse */
.hardcover_front li:last-child {
  background: #fffbec;
}

/* HARDCOVER BACK */
.hardcover_back li:first-child {
  background: #fffbec;
}

/* reverse */
.hardcover_back li:last-child {
  background: #fffbec;
}

.book_spine li:first-child {
  background: #eee;
}
.book_spine li:last-child {
  background: #333;
}

/* thickness of cover */

.hardcover_front li:first-child:after,
.hardcover_front li:first-child:before,
.hardcover_front li:last-child:after,
.hardcover_front li:last-child:before,
.hardcover_back li:first-child:after,
.hardcover_back li:first-child:before,
.hardcover_back li:last-child:after,
.hardcover_back li:last-child:before,
.book_spine li:first-child:after,
.book_spine li:first-child:before,
.book_spine li:last-child:after,
.book_spine li:last-child:before {
  background: #FFBCBC;
}

/* page */

.page > li {
  background: -webkit-linear-gradient(to left, #e1ddd8 0%, #fffbf6 100%);
  background: -moz-linear-gradient(to left, #e1ddd8 0%, #fffbf6 100%);
  background: -ms-linear-gradient(to left, #e1ddd8 0%, #fffbf6 100%);
  background: linear-gradient(to left, #e1ddd8 0%, #fffbf6 100%);
  box-shadow: inset 0px -1px 2px rgba(50, 50, 50, 0.1),
    inset -1px 0px 1px rgba(150, 150, 150, 0.2);
  border-radius: 0px 5px 5px 0px;
}

/*
	3. opening cover, back cover and pages
*/

.hardcover_front {
  -webkit-transform: rotateY(-34deg) translateZ(8px);
  -moz-transform: rotateY(-34deg) translateZ(8px);
  transform: rotateY(-34deg) translateZ(8px);
  z-index: 100;
}

.hardcover_back {
  -webkit-transform: rotateY(-15deg) translateZ(-8px);
  -moz-transform: rotateY(-15deg) translateZ(-8px);
  transform: rotateY(-15deg) translateZ(-8px);
}

.page li:nth-child(1) {
  -webkit-transform: rotateY(-28deg);
  -moz-transform: rotateY(-28deg);
  transform: rotateY(-28deg);
}

.page li:nth-child(2) {
  -webkit-transform: rotateY(-30deg);
  -moz-transform: rotateY(-30deg);
  transform: rotateY(-30deg);
}

.page li:nth-child(3) {
  -webkit-transform: rotateY(-32deg);
  -moz-transform: rotateY(-32deg);
  transform: rotateY(-32deg);
}

.page li:nth-child(4) {
  -webkit-transform: rotateY(-34deg);
  -moz-transform: rotateY(-34deg);
  transform: rotateY(-34deg);
}

.page li:nth-child(5) {
  -webkit-transform: rotateY(-36deg);
  -moz-transform: rotateY(-36deg);
  transform: rotateY(-36deg);
}



/*
	4. position, transform & transition
*/

.hardcover_front,
.hardcover_back,
.book_spine,
.hardcover_front li,
.hardcover_back li,
.book_spine li {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.hardcover_front,
.hardcover_back {
  -webkit-transform-origin: 0% 100%;
  -moz-transform-origin: 0% 100%;
  transform-origin: 0% 100%;
}

.hardcover_front {
  -webkit-transition: all 0.8s ease, z-index 0.6s;
  -moz-transition: all 0.8s ease, z-index 0.6s;
  transition: all 0.8s ease, z-index 0.6s;
}

/* HARDCOVER front */
.hardcover_front li:first-child {
  cursor: default;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  -webkit-transform: translateZ(2px);
  -moz-transform: translateZ(2px);
  transform: translateZ(2px);
}

.hardcover_front li:last-child {
  -webkit-transform: rotateY(180deg) translateZ(2px);
  -moz-transform: rotateY(180deg) translateZ(2px);
  transform: rotateY(180deg) translateZ(2px);
}

/* HARDCOVER back */
.hardcover_back li:first-child {
  -webkit-transform: translateZ(2px);
  -moz-transform: translateZ(2px);
  transform: translateZ(2px);
}

.hardcover_back li:last-child {
  -webkit-transform: translateZ(-2px);
  -moz-transform: translateZ(-2px);
  transform: translateZ(-2px);
}

/* thickness of cover */
.hardcover_front li:first-child:after,
.hardcover_front li:first-child:before,
.hardcover_front li:last-child:after,
.hardcover_front li:last-child:before,
.hardcover_back li:first-child:after,
.hardcover_back li:first-child:before,
.hardcover_back li:last-child:after,
.hardcover_back li:last-child:before,
.book_spine li:first-child:after,
.book_spine li:first-child:before,
.book_spine li:last-child:after,
.book_spine li:last-child:before {
  position: absolute;
  top: 0;
  left: 0;
}

/* HARDCOVER front */
.hardcover_front li:first-child:after,
.hardcover_front li:first-child:before {
  width: 4px;
  height: 100%;
}

.hardcover_front li:first-child:after {
  -webkit-transform: rotateY(90deg) translateZ(-2px) translateX(2px);
  -moz-transform: rotateY(90deg) translateZ(-2px) translateX(2px);
  transform: rotateY(90deg) translateZ(-2px) translateX(2px);
}

.hardcover_front li:first-child:before {
  -webkit-transform: rotateY(90deg) translateZ(158px) translateX(2px);
  -moz-transform: rotateY(90deg) translateZ(158px) translateX(2px);
  transform: rotateY(90deg) translateZ(158px) translateX(2px);
}

.hardcover_front li:last-child:after,
.hardcover_front li:last-child:before {
  width: 4px;
  height: 160px;
}

.hardcover_front li:last-child:after {
  -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(80px)
    translateX(-2px) translateY(-78px);
  -moz-transform: rotateX(90deg) rotateZ(90deg) translateZ(80px)
    translateX(-2px) translateY(-78px);
  transform: rotateX(90deg) rotateZ(90deg) translateZ(80px) translateX(-2px)
    translateY(-78px);
}
.hardcover_front li:last-child:before {
  box-shadow: 0px 0px 30px 5px #333;
  -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px)
    translateX(-2px) translateY(-78px);
  -moz-transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px)
    translateX(-2px) translateY(-78px);
  transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px) translateX(-2px)
    translateY(-78px);
}

/* thickness of cover */

.hardcover_back li:first-child:after,
.hardcover_back li:first-child:before {
  width: 4px;
  height: 100%;
}

.hardcover_back li:first-child:after {
  -webkit-transform: rotateY(90deg) translateZ(-2px) translateX(2px);
  -moz-transform: rotateY(90deg) translateZ(-2px) translateX(2px);
  transform: rotateY(90deg) translateZ(-2px) translateX(2px);
}
.hardcover_back li:first-child:before {
  -webkit-transform: rotateY(90deg) translateZ(158px) translateX(2px);
  -moz-transform: rotateY(90deg) translateZ(158px) translateX(2px);
  transform: rotateY(90deg) translateZ(158px) translateX(2px);
}

.hardcover_back li:last-child:after,
.hardcover_back li:last-child:before {
  width: 4px;
  height: 160px;
}

.hardcover_back li:last-child:after {
  -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(80px)
    translateX(2px) translateY(-78px);
  -moz-transform: rotateX(90deg) rotateZ(90deg) translateZ(80px) translateX(2px)
    translateY(-78px);
  transform: rotateX(90deg) rotateZ(90deg) translateZ(80px) translateX(2px)
    translateY(-78px);
}

.hardcover_back li:last-child:before {
  box-shadow: 10px -1px 80px 20px #666;
  -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px)
    translateX(2px) translateY(-78px);
  -moz-transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px)
    translateX(2px) translateY(-78px);
  transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px) translateX(2px)
    translateY(-78px);
}

/* BOOK SPINE */
.book_spine {
  -webkit-transform: rotateY(60deg) translateX(-5px) translateZ(-12px);
  -moz-transform: rotateY(60deg) translateX(-5px) translateZ(-12px);
  transform: rotateY(60deg) translateX(-5px) translateZ(-12px);
  width: 16px;
  z-index: 0;
}

.book_spine li:first-child {
  -webkit-transform: translateZ(2px);
  -moz-transform: translateZ(2px);
  transform: translateZ(2px);
}

.book_spine li:last-child {
  -webkit-transform: translateZ(-2px);
  -moz-transform: translateZ(-2px);
  transform: translateZ(-2px);
}

/* thickness of book spine */
.book_spine li:first-child:after,
.book_spine li:first-child:before {
  width: 4px;
  height: 100%;
}

.book_spine li:first-child:after {
  -webkit-transform: rotateY(90deg) translateZ(-2px) translateX(2px);
  -moz-transform: rotateY(90deg) translateZ(-2px) translateX(2px);
  transform: rotateY(90deg) translateZ(-2px) translateX(2px);
}

.book_spine li:first-child:before {
  -webkit-transform: rotateY(-90deg) translateZ(-12px);
  -moz-transform: rotateY(-90deg) translateZ(-12px);
  transform: rotateY(-90deg) translateZ(-12px);
}

.book_spine li:last-child:after,
.book_spine li:last-child:before {
  width: 4px;
  height: 16px;
}

.book_spine li:last-child:after {
  -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(8px)
    translateX(2px) translateY(-6px);
  -moz-transform: rotateX(90deg) rotateZ(90deg) translateZ(8px) translateX(2px)
    translateY(-6px);
  transform: rotateX(90deg) rotateZ(90deg) translateZ(8px) translateX(2px)
    translateY(-6px);
}

.book_spine li:last-child:before {
  box-shadow: 5px -1px 100px 40px rgba(0, 0, 0, 0.2);
  -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(-210px)
    translateX(2px) translateY(-6px);
  -moz-transform: rotateX(90deg) rotateZ(90deg) translateZ(-210px)
    translateX(2px) translateY(-6px);
  transform: rotateX(90deg) rotateZ(90deg) translateZ(-210px) translateX(2px)
    translateY(-6px);
}

.page,
.page > li {
  position: absolute;
  top: 0;
  left: 0;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.page {
  width: 100%;
  height: 98%;
  top: 1%;
  left: 3%;
  z-index: 10;
}

.page > li {
  width: 100%;
  height: 100%;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  transform-origin: left center;
  -webkit-transition-property: transform;
  -moz-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease;
  -moz-transition-timing-function: ease;
  transition-timing-function: ease;
}

.page > li:nth-child(1) {
  -webkit-transition-duration: 0.6s;
  -moz-transition-duration: 0.6s;
  transition-duration: 0.6s;
}

.page > li:nth-child(2) {
  -webkit-transition-duration: 0.6s;
  -moz-transition-duration: 0.6s;
  transition-duration: 0.6s;
}

.page > li:nth-child(3) {
  -webkit-transition-duration: 0.4s;
  -moz-transition-duration: 0.4s;
  transition-duration: 0.4s;
}

.page > li:nth-child(4) {
  -webkit-transition-duration: 0.5s;
  -moz-transition-duration: 0.5s;
  transition-duration: 0.5s;
}

.page > li:nth-child(5) {
  -webkit-transition-duration: 0.6s;
  -moz-transition-duration: 0.6s;
  transition-duration: 0.6s;
}

/*
	5. events
*/

.fanye1 {
  -webkit-transform: rotateY(-145deg) translateZ(0);
  -moz-transform: rotateY(-145deg) translateZ(0);
  transform: rotateY(-145deg) translateZ(0);
  z-index: 0;
}

.fanye2 {
  animation: pagefanye2 1.5s both;
}

@keyframes pagefanye2 {
  0% {
    -webkit-transform: rotateY(-28deg);
    -moz-transform: rotateY(-28deg);
    transform: rotateY(-28deg);
  }
  100% {
    -webkit-transform: rotateY(-30deg);
    -moz-transform: rotateY(-30deg);
    transform: rotateY(-30deg);
    -webkit-transition-duration: 1.5s;
    -moz-transition-duration: 1.5s;
    transition-duration: 1.5s;
  }
}

.fanye3 {
  animation: pagefanye3 1.5s both; 
}

@keyframes pagefanye3 {
  0% {
    -webkit-transform: rotateY(-30deg);
    -moz-transform: rotateY(-30deg);
    transform: rotateY(-30deg);
  }
  100% {
    -webkit-transform: rotateY(-35deg);
    -moz-transform: rotateY(-35deg);
    transform: rotateY(-35deg);
    -webkit-transition-duration: 1.8s;
    -moz-transition-duration: 1.8s;
    transition-duration: 1.8s;
  }
}

.fanye4{
  animation: pagefanye4 1.5s both; 
}

@keyframes pagefanye4 {
  0% {
    -webkit-transform: rotateY(-32deg);
  -moz-transform: rotateY(-32deg);
  transform: rotateY(-32deg);
  }
  100% {
    -webkit-transform: rotateY(-118deg);
    -moz-transform: rotateY(-118deg);
    transform: rotateY(-118deg);
    -webkit-transition-duration: 1.6s;
    -moz-transition-duration: 1.6s;
    transition-duration: 1.6s;
  }
}

.fanye5 {
  animation: pagefanye5 1.5s both; 
}

@keyframes pagefanye5 {
  0% {
    -webkit-transform: rotateY(-34deg);
    -moz-transform: rotateY(-34deg);
    transform: rotateY(-34deg);
  }
  100% {
    -webkit-transform: rotateY(-130deg);
    -moz-transform: rotateY(-130deg);
    transform: rotateY(-130deg);
    -webkit-transition-duration: 1.4s;
    -moz-transition-duration: 1.4s;
    transition-duration: 1.4s;
  }
}

.fanye6 {
  animation: pagefanye6 1.5s both; 
}

@keyframes pagefanye6 {
  0% {
    -webkit-transform: rotateY(-36deg);
    -moz-transform: rotateY(-36deg);
    transform: rotateY(-36deg);
  }
  100% {
    -webkit-transform: rotateY(-140deg);
    -moz-transform: rotateY(-140deg);
    transform: rotateY(-140deg);
    -webkit-transition-duration: 1.2s;
    -moz-transition-duration: 1.2s;
    transition-duration: 1.2s;
  }
}

/* 
.book:hover > .hardcover_front {
  -webkit-transform: rotateY(-145deg) translateZ(0);
  -moz-transform: rotateY(-145deg) translateZ(0);
  transform: rotateY(-145deg) translateZ(0);
  z-index: 0;
}

.book:hover > .page li:nth-child(1) {
  -webkit-transform: rotateY(-30deg);
  -moz-transform: rotateY(-30deg);
  transform: rotateY(-30deg);
  -webkit-transition-duration: 1.5s;
  -moz-transition-duration: 1.5s;
  transition-duration: 1.5s;
}

.book:hover > .page li:nth-child(2) {
  -webkit-transform: rotateY(-35deg);
  -moz-transform: rotateY(-35deg);
  transform: rotateY(-35deg);
  -webkit-transition-duration: 1.8s;
  -moz-transition-duration: 1.8s;
  transition-duration: 1.8s;
}

.book:hover > .page li:nth-child(3) {
  -webkit-transform: rotateY(-118deg);
  -moz-transform: rotateY(-118deg);
  transform: rotateY(-118deg);
  -webkit-transition-duration: 1.6s;
  -moz-transition-duration: 1.6s;
  transition-duration: 1.6s;
}

.book:hover > .page li:nth-child(4) {
  -webkit-transform: rotateY(-130deg);
  -moz-transform: rotateY(-130deg);
  transform: rotateY(-130deg);
  -webkit-transition-duration: 1.4s;
  -moz-transition-duration: 1.4s;
  transition-duration: 1.4s;
}

 .book:hover > .page li:nth-child(5) {
  -webkit-transform: rotateY(-140deg);
  -moz-transform: rotateY(-140deg);
  transform: rotateY(-140deg);
  -webkit-transition-duration: 1.2s;
  -moz-transition-duration: 1.2s;
  transition-duration: 1.2s;
} */

/*
	6. Bonus
*/
/* cover CSS */

.coverDesign {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
}

.coverDesign::after {
  background-image: -webkit-linear-gradient(
    -135deg,
    rgba(255, 255, 255, 0.45) 0%,
    transparent 100%
  );
  background-image: -moz-linear-gradient(
    -135deg,
    rgba(255, 255, 255, 0.45) 0%,
    transparent 100%
  );
  background-image: linear-gradient(
    -135deg,
    rgba(255, 255, 255, 0.45) 0%,
    transparent 100%
  );
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.coverDesign h1 {
  color: #fff;
  font-size: 2.2em;
  letter-spacing: 0.05em;
  text-align: center;
  margin: 54% 0 0 0;
  text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.1);
}

.coverDesign p {
  color: #f8f8f8;
  font-size: 1em;
  text-align: center;
  text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.1);
}

.bookcolor {
  background-color: #F38BA0;
  background-image: -webkit-linear-gradient(to top, #F38BA0 58%, #F38BA0 0%);
  background-image: -moz-linear-gradient(to toptop, #F38BA0 58%, #F38BA0 0%);
  background-image: linear-gradient(to toptop, #F38BA0 58%, #F38BA0 0%);
}

/* titles */

.titles  {
  padding-left: 40px;
  text-align: left;
  position: absolute;
  top: 0%;
  left: 160px;
  width: 310px;
}

.titles  h1 {
  margin: 0;
}

.titles  span {
  color: #16a085;
  padding: 0.6em 0 1em 0;
  display: block;
}

.titles  p {
  color: #63707d;
  line-height: 1.3;
}

/* Media Queries */
@media screen and (max-width: 37.8125em) {
  .align > li {
    width: 100%;
    min-height: 440px;
    height: auto;
    padding: 0;
    margin: 0 0 30px 0;
  }

  .book {
    margin: 0 auto;
  }

  .titles {
    text-align: center;
    width: 320px;
    top: 250px;
    padding-left: 0;
    left: -80px;
    font-size: 90%;
  }
}


.search-box {
  min-width: 270px;
  height: 40px;
  display: flex;
  /* justify-content: space-around; */
  border-bottom: 3px solid #1c5252;
  overflow: hidden;
  transition: 0.3s;
  z-index: 99;
  margin-top:14vh;
}
.search-box input {
  width: 100%;
  height: 50px;
  border: none;
  background: none;
  outline: none;
  color: #1c5252;
  font-size: 22px;
  text-indent: 10px;
}
.search-box input::placeholder {
  color: #1c5252;
  font-size: 15px;
}
.search-box .fa {
  padding: 0;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #1c5252;
  font-size: 22px;
  cursor: pointer;
  z-index: 77;
}

</style>