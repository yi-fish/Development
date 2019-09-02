<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
      <!-- 公司简介轮播图 (动态面板) -->
        <div id="u1"  data-label="公司简介轮播图">
              <div class="slide" v-on:mouseover="stop()" v-on:mouseout="move()"> 
                      <div class="slideshow"> 
                       <transition-group tag="ul" name="image"> 
                        <li v-for="(item, index) in imgArray" v-show="index===mark" :key="index"> 
                            <img :src="item" style="  width: 1440px; height: 400px; " > 
                            <!-- <img src="../../images/u2.png" > -->
                        </li> 
                       </transition-group> 
                      </div> 
                      <div class="bullet"> 
                       <span v-for="(item, index) in imgArray" :class="{ 'active':index===mark }"
                       @click="change(index)" :key="index"></span> 
                      </div> 
              </div> 
        </div>
  </div>
</template>

<style scoped>
   .slideshow { 
    width: 1440px; 
    height: 400px; 
   } 
   .slideshow ul li{
      list-style:none;
    }
     .active { 
    background: red !important; 
   } 
     .image-enter-active { 
    transform: translateX(0); 
    transition: all 1.5s ease; 
   } 
   .image-leave-active { 
    transform: translateX(-100%); 
    transition: all 1.5s ease; 
   } 
   .image-enter { 
    transform: translateX(100%); 
   } 
   .image-leave { 
    transform: translateX(0); 
   } 
</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   name: 'home',
//   components: {
//     HelloWorld
//   }
// }

 
 import img1 from "../views/images/u2.png"
 import img2 from "../views/images/u3.png"
 export default {
                name: 'firstPage', 
                data(){
                  return{
                          timer: null, //定时器 
                          mark: 0, //比对图片索引的变量 
                          //轮播图数据
                          imgArray: 
                          [ 
                            img1,img2   
                          ] ,
                        }
                    },
                //点击切换图片
                methods:
                { 
                      autoPlay ()
                    { 
                        this.mark++; 
                        if (this.mark === 2) 
                        { 
                          this.mark = 0 
                        } 
                    }, 
                    play () { 
                    this.timer = setInterval(this.autoPlay, 1500) 
                    }, 
                    change (i) { 
                    this.mark = i 
                    }, 
                    stop () { 
                    clearInterval(this.timer) 
                    }, 
                    move () { 
                    this.timer = setInterval(this.autoPlay, 1500) 
                    } 
                }, 
                    created () { 
                      this.play() 
                    } 
    }
</script>
