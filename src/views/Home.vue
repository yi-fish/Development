<template>
  <div class="home">
    <swiperr :message="message"></swiperr>
    <div id="sale" class="liubai">
      <p class="saletitle">致力于互联网创新技术服务</p>
      <p class="salecontent">技术更跨界、创意更自由、服务更贴心</p>
      <div class="sale_content_son">
        <div v-for="(item, index) in saleArray" :key="index" class="pianyi-center">
          <div id="box1">
            <div id="box1-Up">
              <img :src="item.src" alt style="margin-top: 38px" />
              <p style="margin-top: 20px; margin-bottom:20px;">{{ item.title }}</p>
            </div>
            <div id="box1-Dn">
              <ul>
                <li v-for="(itemson, index) in item.content" :key="index">
                  <div class="yuandian"></div>
                  <span style="display:block;text-align:left">{{ itemson.con }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      id="blurr"
      class="liubai"
      style="display:flex;justify-content:space-between; flex-wrap:wrap;"
    >
      <div id="pianyi" class="pianyi-center">
        <div class="blurrflex">
          <p>3</p>
          <p>年</p>
        </div>
        <div class="blurrtext">多年互联网创新服务经验</div>
      </div>
      <div class="pianyi-center">
        <div class="blurrflex">
          <p style="letter-spacing: 0.4px;">20</p>
          <p>+</p>
        </div>
        <div class="blurrtext">提供多样化服务类型</div>
      </div>
      <div class="pianyi-center">
        <div class="blurrflex">
          <p style="letter-spacing: 0.4px;">40</p>
          <p>+</p>
        </div>
        <div class="blurrtext">持续服务更多用户</div>
      </div>
      <div class="pianyi-center">
        <div class="blurrflex">
          <p style="letter-spacing: 1px;">12000</p>
          <p></p>
        </div>
        <div class="blurrtext">互联网创新业务市场庞大</div>
      </div>
    </div>

    <div id="bigexploit">
      <div id="exploit" class="liubai">
        <p class="saletitle">全新的开发模式</p>
        <p class="salecontent">高效、快速、减少花费</p>
        <div id="exploit-Box" style="display:flex;justify-content:space-between; flex-wrap:wrap;">
          <div id="box2">
            <div id="box2-Up">
              <img src="..\components\img\exploitpic1.png" alt />
            </div>
            <div id="box2-Dn">
              <p>一流的开发团队</p>
            </div>
          </div>
          <div id="box2">
            <div id="box2-Up">
              <img src="..\assets\插画2.png" alt />
            </div>
            <div id="box2-Dn">
              <p>可见的项目成本</p>
            </div>
          </div>
          <div id="box2">
            <div id="box2-Up">
              <img src="..\assets\插画3.png" alt />
            </div>
            <div id="box2-Dn">
              <p>可控的项目质量</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style="background-color: #FFFFFF;padding-top:80px;">
      <div id="fee" class="liubai">
        <p class="saletitle" style="margin-bottom:6px">崭新的收费模式</p>
        <p class="salecontent" style="margin-bottom:20px">确保收费简洁化、透明化</p>
        <div id="box3">
          <div id="box3-Left">
            <img src="..\components\img\fee-left.png" alt />
          </div>
          <div id="box3-Right">
            <div class="box3-Right-li">
              <img src="..\assets\平台1.png" class="piclog" />
              <img src="..\assets\+ 2.png" alt="+" class="picjia" />
              <img src="..\assets\平台2.png" class="piclog" />
              <img src="..\assets\= 2.png" alt="=" class="picdengyu" />
              <img src="..\assets\平台3.png" class="piclog" />
            </div>
            <div class="box3-Right-li">
              <div v-for="(item, index) in box3Arry" :key="index">
                <ul>
                  <li>{{item.con}}</li>
                  <li>{{item.zhu}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style="background-image: linear-gradient(0deg, #0057cb 0%, #007bff 100%);">
      <div id="train" class="liubai">
        <p id="train-title1">灵活的人才培养方案</p>
        <p id="train-content1">免费的实习生培训计划、严格的实习生管理制度、真实的项目实战锻炼</p>
        <div class="train-pic-copy">
          <div id="train-pic" v-for="(item, index) in trainPicArry" :key="index">
            <div class="train-pic-con">
              <img :src="item.src" alt />
              <div class="duanhengxian"></div>
              <p>{{ item.con1 }}</p>
              <p>{{ item.con2 }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="background-color: #FFFFFF;">
      <div id="client" class="liubai">
        <p class="saletitle">服务过的品牌客户</p>
        <p
          class="salecontent"
          style="margin-bottom:40px;margin-top:6px;height: 22px;"
        >SERVIER BRAND CUSTOMERS</p>
        <div id="client-Pic">
          <div style="display:flex;justify-content:space-between; flex-wrap:wrap;">
            <div v-for="(item, index) in clientArry" :key="index">
              <img :src="item.src" alt />
            </div>
          </div>
        </div>
      </div>
    </div>

    <home-footer></home-footer>
  </div>
</template>

<style scoped>
@media only screen and (max-width: 479px) {
  .liubai {
    width: 83.3% !important;
    margin: auto 8.3% !important;
  }
  #box1 {
    /* margin-bottom: 30px; */
    width: 77px !important;
    height: 150px !important;
  }
  #box1 p {
    font-size: 10px !important;
    margin-top: 7px !important;
    margin-bottom: 0px !important;
    line-height: 14px !important;
  }
  #box1 ul {
    /* display: none; */
    margin: 0px !important;
    overflow: auto;
    height: 50px !important;
    font-size: 12px;
  }
  #box1-Up {
    height: 100px !important;
  }
  #box1-Up img {
    margin-top: 20px !important;
  }
  #blurr div:nth-child(4) {
    margin-bottom: 16px !important;
  }
  .blurrflex {
    margin-top: 16px !important;
  }
  .pianyi-center {
    margin: 0 auto !important;
  }
  #client-Pic img {
    margin: 20px auto !important;
    width: 150px !important;
    height: 69px !important;
  }
  #train-pic .train-pic-con p[data-v-fae5bece]:nth-child(3) {
    font-size: 19px !important;
  }
  #train-pic .train-pic-con p[data-v-fae5bece]:nth-child(4) {
    width: 150px !important;
    font-size: 14px !important;
    height: 50px;
  }
  #train-pic .train-pic-con img[data-v-fae5bece] {
    width: 22px !important;
    height: 22px !important;
  }
  #box2 {
    width: 100px !important;
    height: auto !important;
    margin: 30px auto !important;
  }
  #box2-Up {
    height: auto !important;
  }
  #box2-Dn p {
    line-height: 20px !important;
    font-size: 14px !important;
    margin-bottom: 10px !important;
    margin-top: 10px !important;
  }
  .saletitle {
    font-size: 19px !important;
  }
  .salecontent {
    margin-bottom: 10px !important;
  }
  #train-title1 {
    font-size: 19px !important;
  }
  #blurr p:nth-child(1) {
    font-size: 23px !important;
  }
  #box2 img {
    width: 100px !important;
    height: 81px !important;
  }
  #box3-Left {
    height: auto !important;
    margin-right: 10px !important;
    margin-bottom: 66px !important;
  }
  #box3-Left img {
    width: 137px !important;
  }
  .piclog {
    width: 40px !important;
    height: 40px !important;
  }
  .picjia {
    width: 7px !important;
    left: 19px !important;
  }
  .picdengyu {
    width: 7px !important;
    left: 19px !important;
  }
  .box3-Right-li ul {
    margin-top: 0px !important;
    margin-bottom: 20px !important;
  }
  .box3-Right-li ul li {
    /* overflow: hidden; */
    /* text-overflow: ellipsis; */
    white-space: nowrap;
    width: 100px;
    font-size: 13px !important;
    margin-top: 0px !important;
    overflow: auto;
  }
  #blurr .blurrtext {
    width: 138px !important;
  }
}
@media only screen and (max-width: 1440px) {
  .liubai {
    width: 83.3% !important;
    margin: auto 8.3% !important;
  }
}

.liubai {
  width: 1200px;
  margin: 0 auto;
}
div#sale {
  width: 1200px;
  margin: 0 auto;
}
.saletitle {
  font-family: PingFangSC-Regular;
  font-size: 28px;
  color: #4a4a4a;
  letter-spacing: 0;
  margin-top: 80px;
  margin-bottom: 0px;
}
.salecontent {
  font-family: PingFangSC-Regular;
  font-size: 18px;
  color: #999999;
  letter-spacing: 0.2px;
  margin-top: 6px;
  margin-bottom: 60px;
}
.sale_content_son {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 60px;
}
#blurr {
  width: 1200px;
  margin: 0 auto;
  background: #ffffff;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: space-around;
  position: relative;
  z-index: 2;
}
#blurr div:nth-child(4) {
  margin-right: 62px;
  margin-bottom: 66px;
}
#pianyi {
  margin-left: 62px;
}
.blurrflex {
  display: flex;
  justify-content: center;
  margin-top: 60px;
  margin-left: 20px;
}
#blurr p {
  text-align: center;
  font-family: PingFangSC-Light;
  color: #4a4a4a;
}
#blurr p:nth-child(1) {
  font-size: 44px;
  letter-spacing: 2.44px;
  line-height: 48px;
}
#blurr p:nth-child(2) {
  font-size: 16px;
  letter-spacing: 0;
  line-height: 26px;
  margin-top: 3px;
  width: 20px;
}
#blurr .blurrtext {
  font-family: PingFangSC-Light;
  font-size: 16px;
  color: #999999;
  letter-spacing: 0;
  text-align: center;
  line-height: 26px;
  margin-top: 10px;
  width: 224px;
}
#bigexploit {
  width: auto;
  background-image: linear-gradient(
    0deg,
    #e7f4fe 0%,
    #f2f5f8 64%,
    #f6f6f6 100%
  );
  z-index: 1;
  position: relative;
  margin-top: -100px;
}
#exploit {
  padding-top: 100px;
}
#exploit-Box {
  display: flex;
}
div#fee p {
  margin-top: 0px;
  margin-bottom: 0px;
}
div#train {
  padding-top: 80px;
  clear: both;
  /* height: 470px; */
  opacity: 0.9;
  background-image: linear-gradient(0deg, #0057cb 0%, #007bff 100%);
}
div#train p {
  margin-top: 0px;
}
div#client {
  padding-top: 80px;
  padding-bottom: 61px;
}
div#client img {
  width: 284px;
  height: 128px;
}
div#client p {
  margin-top: 0px;
}
#box1 {
  background: #ffffff;
  border: 1px solid #f2f2f2;
  width: 282px;
  height: 296px;
}
#box1 p {
  font-family: PingFangSC-Semibold;
  font-size: 20px;
  color: #4a4a4a;
  letter-spacing: 0;
  text-align: center;
  line-height: 28px;
}

div#box1-Up {
  background: #f6f6f6;
  height: 150px;
  font-family: PingFangSC-Semibold;
  font-size: 20px;
  color: #4a4a4a;
  letter-spacing: 0;
  text-align: center;
  line-height: 28px;
}
div#box1-Dn {
  font-family: PingFangSC-Light;
  font-size: 16px;
  color: #999999;
  letter-spacing: 0;
  text-align: justify;
  line-height: 26px;
  /* padding: 22px 28px; */
}
div#box1-Dn ul {
  margin: 20px 28px 22px 28px;
  padding-left: 0px;
}
div#box1-Dn ul li {
  list-style: none;
  text-indent: 0px;
  display: flex;
}
.yuandian {
  display: inline-block;
  border: 1px solid #999999;
  border-radius: 100%;
  width: 5px;
  height: 5px;
  background-color: #999999;
  vertical-align: super;
  position: relative;
  top: 12px;
  margin-right: 4px;
}
#box2 {
  margin-bottom: 62px;
  width: 360px;
  height: 330px;
  background: #1b90fb;
}
#box2 p {
  margin-left: 0px !important;
  text-align: center;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #ffffff !important;
  letter-spacing: 0.27px !important;
  margin-top: 1px;
}
div#box2-Up {
  height: 240px;
  background: #ffffff;
}
div#box2-Up img {
  size: 100%;
  height: 240px;
  width: 360px;
  background: #ffffff;
}
div#box2-Dn p {
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #ffffff;
  line-height: 90px;
  letter-spacing: 0.27px;
}
div#box3 {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
div#box3-Left {
  width: 40%;
  height: 303px;
  float: left;
  margin: 67px 107px 110px 0px;
}
div#box3-Right {
  display: flex;
}
.box3-Right-li {
  display: flex;
  flex-direction: column;
}
.piclog {
  width: 120px;
  height: 120px;
}
.picjia {
  width: 17px;
  margin-top: 11px;
  margin-bottom: 12px;
  position: relative;
  left: 52px;
}
.picdengyu {
  width: 17px;
  margin-top: 15px;
  margin-bottom: 16px;
  position: relative;
  left: 52px;
}
.box3-Right-li ul {
  margin-bottom: 98px;
  padding-left: 30px;
  width: max-content;
}
.box3-Right-li div:nth-child(1) ul {
  margin-top: 29px;
}
.box3-Right-li div:nth-child(3) ul {
  margin-bottom: 0px;
}
div#box3-Right ul :first-child {
  list-style: none;
  font-family: PingFangSC-Regular;
  font-size: 20px;
  color: #1b90fb;
  letter-spacing: 0;
  line-height: 28px;
}
div#box3-Right ul :nth-child(2) {
  list-style: none;
  font-family: PingFangSC-Light;
  font-size: 16px;
  color: #999999;
  letter-spacing: 0;
  text-align: justify;
  line-height: 22px;
  margin-top: 12px;
}
#train-title1 {
  font-family: PingFangSC-Regular;
  font-size: 28px;
  color: #ffffff;
  letter-spacing: 0;
  margin-bottom: 6px;
}
#train-content1 {
  opacity: 0.6;
  font-family: PingFangSC-Regular;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0.2px;
  margin-top: 6px;
  margin-bottom: 0px;
}
#train-pic {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.train-pic-copy {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
#train-pic .train-pic-con img {
  width: 44px;
  height: 44px;
  text-align: center;
  margin: 60px auto 0px;
}
#train-pic .train-pic-con {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#train-pic .train-pic-con p:nth-child(3) {
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  line-height: 28px;
  margin-bottom: 20px;
}
#train-pic .train-pic-con p:nth-child(4) {
  opacity: 0.6;
  font-family: PingFangSC-Light;
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: justify;
  line-height: 22px;
  width: 340px;
  margin: 0 0 64px;
}
.duanhengxian {
  opacity: 0.9;
  width: 40px;
  height: 2px;
  background: #ffffff;
  margin: 30px auto;
}
#client-Pic {
  margin-top: 40px;
}
#client-Pic div:nth-child(4) img {
  margin-bottom: 24px;
}

.home {
  text-align: left;
  width: 100%;
  margin: 0 auto;
  background: #ffffff;
  overflow: hidden;
}
#box {
  width: 280px;
  height: 296px;
}
#banner {
  background-color: goldenrod;
}
.slideshow {
  width: 100%;
}
.slideshow ul li {
  list-style: none;
}
.image-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}

.image-leave-active {
  transition: all 1s ease;
  transform: translateX(-100%);
}

.image-enter {
  transform: translateX(100%);
}

.image-leave {
  transform: translateX(0);
}
</style>

<script>
/* eslint-disable */
// @ is an alias to /src

import img1 from "../assets/banner.png";
import img2 from "../assets/banner2.png";
import img3 from "../assets/banner3.png";
import HelloWorld from "@/components/HelloWorld.vue";
import HomeFooter from "../components/footer.vue";
import Carousel from "@/components/carousel.vue";
import Swiperr from "@/components/swiperr.vue";

import animated from "animate.css";

export default {
  name: "home",
  components: {
    HomeFooter,
    Carousel,
    Swiperr
  },
  data() {
    return {
      timer: null, //定时器
      mark: 0, //比对图片索引的变量
      //轮播图数据
      message: [img1, img2, img3],
      imgArray: [img1, img2, img3],
      saleArray: [
        {
          src: require("../assets/1.png"),
          title: "助力新零售",
          content: [
            { con: "结合优秀硬件团队" },
            { con: "利用互联网优势" },
            { con: "完成基于物联网技术的新零售体系建立或推广" }
          ]
        },
        {
          src: require("../assets/2.png"),
          title: "政府信息化建设",
          content: [
            { con: "以精湛的互联网技术" },
            { con: "推动政府信息化建设" },
            { con: "提高行政效能" }
          ]
        },
        {
          src: require("../assets/3.png"),
          title: "传统互联网转型",
          content: [
            { con: "深入了解传统行业" },
            { con: "打破只做网络营销的传统思维" },
            { con: "设计开发全新业务模式" },
            { con: "依托传统产业原有资源" }
          ]
        },
        {
          src: require("../assets/4.png"),
          title: "自有产品",
          content: [
            { con: "股票自动交易系统" },
            { con: "汽车行业互联网舆情监控系统" }
          ]
        }
      ],
      trainPicArry: [
        {
          src: require("../assets/量身打造.png"),
          con1: "量身打造",
          con2:
            "面向互联网所需众多岗位，上班时间根据实习生自身情况决定，通过考核后在校也能办公。"
        },
        {
          src: require("../assets/严格.png"),
          con1: "严格管理",
          con2:
            "周六公司固定例会时间，多方位知识面为实习生开拓视野，每天工作时间实时线上记录打卡。"
        },
        {
          src: require("../assets/严格管理.png"),
          con1: "严格管理",
          con2:
            "知识培训外加真实项目实践，并有一对一导师指导，让实习生快速成长，独当一面。"
        }
      ],
      box3Arry: [
        {
          con: "平台工作者劳务费",
          zhu: "注：参与项目的所有工作者的赏月劳务费总和。"
        },
        {
          con: "平台工作者劳务费",
          zhu: "注：参与项目的所有工作者的赏月劳务费总和。"
        },
        {
          con: "平台工作者劳务费",
          zhu: "注：参与项目的所有工作者的赏月劳务费总和。"
        }
      ],
      clientArry: [
        {
          src: require("../assets/携程.png")
        },
        { src: require("../assets/李宁.png") },
        { src: require("../assets/金.png") },
        { src: require("../assets/广发.png") },
        {
          src: require("../assets/朗新.png")
        },
        { src: require("../assets/云.png") },
        { src: require("../assets/金关.png") },
        { src: require("../assets/携程.png") }

        // content: [
        //   {
        //     src: require("../assets/携程.png"),
        //     src: require("../assets/李宁.png"),
        //     src: require("../assets/金.png"),
        //     src: require("../assets/广发.png")
        //   }
        // ],
        // content: [
        //   {
        //     src: require("../assets/朗新.png"),
        //     src: require("../assets/云.png"),
        //     src: require("../assets/金关.png"),
        //     src: require("../assets/携程.png")
        //   }
        // ]
      ]
    };
  },
  //点击切换图片
  methods: {
    autoPlay() {
      this.mark++;
      if (this.mark === this.imgArray.length) {
        this.mark = 0;
      }
    },
    play() {
      this.timer = setInterval(this.autoPlay, 1500);
    },
    stop() {
      clearInterval(this.timer);
    },
    move() {
      this.timer = setInterval(this.autoPlay, 1500);
    }
  },
  created() {
    this.play();
  }
};
</script>
