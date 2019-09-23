<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in message" :key="index"><img :src="item" alt=""></div>
    </div>
    <div class="swiper-button-next"><img src="..\assets\back2.png" alt=""/></div>
    <div class="swiper-button-prev"><img src="..\assets\back1.png" alt=""/></div>
  </div>
</template>

<script>
 /* eslint-disable */ 
import '../assets/swiper.js'

export default {
name: 'Swiperr',
 props: ['message'],
   data () {
    return {
       msg: 'Welcome to Your Vue.js App'
    }
},
mounted(){
     var swiper = new Swiper('.swiper-container', {
     slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }
    ); 
}
}
</script>

<style lang="stylus">
@import '../assets/swiper.min.css';

    .swiper-button-next:after, .swiper-button-prev:after {
        font-family: swiper-icons;
        font-size: var(--swiper-navigation-size);
        display none
    }
    .swiper-wrapper img{
      width 100%
      height 100%
    }
    .swiper-button-next{
      right 6.9%
    }
    .swiper-button-prev{
      left 6.9%
    }
    .swiper-button-next img{
      width 32px
      height 32px
    }
     .swiper-button-prev img{
      width 32px
      height 32px
    }
    html, body {
      position: relative;
      height: 100%;
    }
    body {
      // background: #eee;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color:#000;
      margin: 0;
      padding: 0;
    }
    .swiper-container {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
</style>
