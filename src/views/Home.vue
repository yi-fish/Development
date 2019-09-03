<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
      
        <div id="u1"  data-label="公司简介轮播图">
              <div class="slide" v-on:mouseover="stop()" v-on:mouseout="move()"> 
                      <div class="slideshow"> 
                       <transition-group tag="ul" name="image"> 
                        <li v-for="(item, index) in imgArray" v-show="index===mark" :key="index"> 
                            <img :src="item" style="  width: 1440px; height: 400px; " > 
                           
                        </li> 
                       </transition-group> 
                      </div> 
                      <div class="bullet"> 
                       <span v-for="(item, index) in imgArray" :class="{ 'active':index===mark }"
                       @click="change(index)" :key="index"></span> 
                      </div> 
              </div> 
        </div>
  </div> -->
  <div class="home">
     <div id="banner">
        <img src="../views/images/u2.png" alt="" style="width:1440px;height:400px;">
    </div> 

    <div id="sale">
        <p class="saletitle">致力于互联网创新技术服务</p>
        <p class="salecontent">技术更跨界、创意更自由、服务更贴心</p>
        <div style="display:flex">
            <div id="box1">
              <div id="box1-Up">
                <img src="" alt="">
                <p>助力新零售</p>
              </div>
              <div id="box1-Dn">
                <ul>
                  <li>结合优秀硬件团队</li>
                  <li>利用互联网优势</li>
                  <li>完成基于物联网技术的新零售体系建立或推广</li>
                </ul>
              </div>
            </div>
            <div id="box1">
              <div id="box1-Up">
                <img src="" alt="">
                <p>助力新零售</p>
              </div>
              <div id="box1-Dn">
                <ul>
                  <li>结合优秀硬件团队</li>
                  <li>利用互联网优势</li>
                  <li>完成基于物联网技术的新零售体系建立或推广</li>
                </ul>
              </div>
            </div>
            <div id="box1">
              <div id="box1-Up">
                <img src="" alt="">
                <p>助力新零售</p>
              </div>
              <div id="box1-Dn">
                <ul>
                  <li>结合优秀硬件团队</li>
                  <li>利用互联网优势</li>
                  <li>完成基于物联网技术的新零售体系建立或推广</li>
                </ul>
              </div>
            </div>
            <div id="box1">
              <div id="box1-Up">
                <img src="" alt="">
                <p>助力新零售</p>
              </div>
              <div id="box1-Dn">
                <ul>
                  <li>结合优秀硬件团队</li>
                  <li>利用互联网优势</li>
                  <li>完成基于物联网技术的新零售体系建立或推广</li>
                </ul>
              </div>
            </div>
        </div>
    </div>

    <div style="width: 1440px; margin-left: 119px;margin-top: 60px;">
      <img src="..\components\img\sannian.png" alt="" style="width: 1200px; height: 220px;">
    </div>

      <div id="exploit">
        <p class="saletitle">全新的开发模式</p>
        <p class="salecontent">高效、快速、减少花费</p>
        <div  id="exploit-Box">
          <div id="box2">
            <div id="box2-Up">
              <img src="..\components\img\exploitpic1.png" alt="">
            </div>
            <div id="box2-Dn">
              <p>一流的开发团队</p>
            </div>
          </div>
          <div id="box2">
            <div id="box2-Up">
              <img src="..\components\img\exploitpic1.png" alt="">
            </div>
            <div id="box2-Dn">
              <p>一流的开发团队</p>
            </div>
          </div>
          <div id="box2">
            <div id="box2-Up">
              <img src="..\components\img\exploitpic1.png" alt="">
            </div>
            <div id="box2-Dn">
              <p>一流的开发团队</p>
            </div>
          </div>
        </div>
        
      </div> 

      <div style="background-color: #FFFFFF;padding-top:80px;height:648px;">
        <div id="fee">
            <p class="saletitle">崭新的收费模式</p>
            <p class="salecontent">确保收费简洁化、透明化</p>
          <div id="box3">
              <div id="box3-Left">
                <img src="..\components\img\fee-left.png" alt="">
              </div>
              <div id="box3-Right">
                <img src="..\components\img\fee-right.png" alt="" style="margin-bottom: 40px;">
                <div id="box3-Right-li">
                  <ul>
                    <li>平台工作者劳务费</li>
                    <li>注：参与项目的所有工作者的赏月劳务费总和。</li>
                  </ul>
                  <ul>
                    <li>平台工作者劳务费</li>
                    <li>注：参与项目的所有工作者的赏月劳务费总和。</li>
                  </ul>
                  <ul>
                    <li>平台工作者劳务费</li>
                    <li>注：参与项目的所有工作者的赏月劳务费总和。</li>
                  </ul>
                </div>
                
              </div>
          </div>
        </div> 
      </div>
     
      <div id="train">
        <p id="train-title1">灵活的人才培养方案</p>
        <p id="train-content1">免费的实习生培训计划、严格的实习生管理制度、真实的项目实战锻炼</p>
        <div id="train-pic">
          <img src="..\components\img\train1.png" alt="">
          <img src="..\components\img\train2.png" alt="">
          <img src="..\components\img\train3.png" alt="">
        </div>
      </div>

      <div style="background-color: #FFFFFF;">
          <div id="client">
            <p class="saletitle">服务过的品牌客户</p>
            <p class="salecontent">SERVIER BRAND CUSTOMERS </p>
            <div id="client-Pic">
              <div>
                <img src="..\views\images\u34.jpg" alt="">
                <img src="..\views\images\u33.gif" alt="">
                <img src="..\views\images\u35.jpg" alt="">
                <img src="..\views\images\u36.png" alt="">
              </div>
              <div>
                <img src="..\views\images\u37.jpg" alt="">
                <img src="..\views\images\u38.jpg" alt="">
                <img src="..\views\images\u39.jpg" alt="">
                <img src="..\views\images\u40.jpg" alt="">
              </div>
            </div>
          </div>
      </div>

      <div class="footer"></div>
     
  </div>
</template>

<style scoped>
    div#sale {
      margin-left: 119px;
    }
    .saletitle{ 
      font-family: PingFangSC-Regular;
      font-size: 28px;
      color: #4A4A4A;
      letter-spacing: 0;
      margin-top: 80px;
      margin-bottom: 0px;
    }
    .salecontent{
      font-family: PingFangSC-Regular;
      font-size: 18px;
      color: #999999;
      letter-spacing: 0.2px;
      margin-top: 6px;
    }
    #exploit{
      margin-left: 120px;
    }
    #exploit-Box{
      display:flex
    }
    div#fee{
      margin-left: 119px;
    }
    div#fee p{
      margin-top: 0px;
      margin-bottom: 0px;
    }
    div#train {
      padding-top: 80px;
      clear:both;
      width: 1440px;
      height: 470px;
      opacity: 0.9;
      background-image: linear-gradient(0deg, #0057CB 0%, #007BFF 100%);
    }
    div#train p{
      margin-top: 0px;
    }
    div#client{
      margin-left: 120px;
      padding-top: 80px;
      margin-bottom: 61px;
    }
    div#client img{
      width: 284px;
      height: 128px;
      margin-right: 21px;
    }
    div#client p{
      margin-top: 0px;
    }
    #box1{
      background: #FFFFFF;
      border: 1px solid #F2F2F2;
      margin-right: 26px;
      width: 280px;
      height: 296px;
    }
    #box1 p{
      font-family: PingFangSC-Semibold;
      font-size: 20px;
      color: #4A4A4A;
      letter-spacing: 0;
      text-align: center;
      line-height: 28px;
    }

    div#box1-Up{
      background: #F6F6F6;
      height: 150px;
      font-family: PingFangSC-Semibold;
      font-size: 20px;
      color: #4A4A4A;
      letter-spacing: 0;
      text-align: center;
      line-height: 28px;
    }
    div#box1-Dn{
      font-family: PingFangSC-Light;
      font-size: 16px;
      color: #999999;
      letter-spacing: 0;
      text-align: justify;
      line-height: 26px;
      /* padding: 22px 28px; */
    }
    div#box1-Dn ul{
      margin: 0;
      padding-top: 10px;
      padding-right: 28px;
    }
   
    #box2{
      margin-right: 60px;
      margin-bottom: 62px;
      width: 360px;
      height: 330px;
      background: #1B90FB;
    }
    #box2 p {
      margin-left: 0px !important;
      text-align: center;
      font-family: PingFangSC-Regular;
      font-size: 24px !important; 
      color: #FFFFFF !important;
      letter-spacing: 0.27px !important;
    }
    div#box2-Up{
      height: 240px;
      background: #FFFFFF;
    }
    div#box2-Up img{
      size: 100%;
      height: 240px;
      width: 360px;
      background: #FFFFFF;
    }
    div#box3-Left{
       width: 585px;
       height: 303px;
       float:left;
       /* background-image: linear-gradient(-180deg, #43BFFF 0%, #2093FF 100%); */
       margin: 87px 107px 110px 0px;
    }
    div#box3-Right{
       display: flex;
       /* background-image: linear-gradient(-180deg, #43BFFF 0%, #2093FF 100%); */
    }
    #box3-Right-li{
      display: flex;
      flex-direction: column;
    }
     #box3-Right-li li{ 
      margin-bottom: 12px;
    }
    /* #box3-Right-li :last-child{
      margin-bottom: 69px;
    } */
    div#box3-Right ul{
       padding-left: 9px;
       margin-bottom: 98px;
    }
   div#box3-Right ul :first-child{
      list-style: none;
      font-family: PingFangSC-Regular;
      font-size: 20px;
      color: #1B90FB;
      letter-spacing: 0;
      line-height: 28px; 
   }
    div#box3-Right ul :nth-child(2){
      list-style: none;
      font-family: PingFangSC-Light;
      font-size: 16px;
      color: #999999;
      letter-spacing: 0;
      text-align: justify;
      line-height: 22px; 
   }

 
    div#train p{
      margin-left: 119px;
    }
    #train-title1{
      font-family: PingFangSC-Regular;
      font-size: 28px;
      color: #FFFFFF;
      letter-spacing: 0;
    }
    #train-content1{
      opacity: 0.6;
      font-family: PingFangSC-Regular;
      font-size: 18px;
      color: #FFFFFF;
      letter-spacing: 0.2px;
    }
    #train-pic{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin-left: 120px;
    }
     #train-pic img{
      margin-right: 90px;
      margin-bottom: 64px;
      width: 340px;
      height: 260px;
    }

    #client-Pic{
      margin-top: 40px;
    }
    #client-Pic img{
      margin-right: 21px;
      margin-bottom: 24px;
    }
 
    .home{
      text-align: left;
      width: 1440px;
      margin: 0 auto;
      background: #F6F6F6;
      /* background-color: gold; */
    }
    #box{
      width: 280px;
      height: 296px;
    }
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
