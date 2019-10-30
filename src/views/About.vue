<template>
  <div class="about">
    <div class="imgarea">
      <img :src="img1" alt class="widthimg" />
      <div class="imgtext">
        <h1>专注</h1>
        <div class="righttext">
          <h2>互联网项目技术服务</h2>
        </div>
      </div>
    </div>
    <div class="aboutus">
      <div class="head">
        <p>关于我们</p>
      </div>
      <div class="content">
        <div class="hidecontent" v-show="navBarFixed"></div>
        <div class="leftmenu" :class="navBarFixed == true ? 'navBarWrap' :''">
          <img :src="img2" alt />
          <div class="leftbutton">
            <a href="#block1">公司概述</a>
            <a href="#block2">发展历程</a>
            <a href="#block3">公司荣誉</a>
          </div>
        </div>
        <div class="rightcontent">
          <div class="block1" id="block1">
            <div class="row">
              <img :src="img3" />
              <div class="imgright">
                <div class="headline">
                  <p>西安芝麻开花网络科技有限公司</p>
                </div>
                <div class="headline-next">
                  <ul>
                    <li v-for="(item,index)  in list" :key="index">
                      <p class="listtext">{{item}}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="imgrow">
              <img :src="img4" />
              <img :src="img5" />
              <img :src="img6" />
            </div>
          </div>
          <div class="block2" id="block2">
            <div class="headline short">
              <p>发展历程</p>
            </div>
            <img :src="img7" alt />
          </div>
          <div class="block3" id="block3">
            <div class="headline short">
              <p>公司荣誉</p>
            </div>
            <img :src="img8" alt />
            <img :src="img9" alt />
            <img :src="img10" alt />
          </div>
        </div>
      </div>
    </div>
    <ooo id="footer"></ooo>
  </div>
</template>

<script>
/* eslint-disable */
import img1 from "./images/u431.jpg";
import img2 from "./images/20190830132652.png";
import img3 from "./images/u472.png";
import img4 from "./images/u473.png";
import img5 from "./images/u474.png";
import img6 from "./images/u475.png";
import img7 from "./images/u462.png";
import img8 from "./images/u466.jpg";
import img9 from "./images/u467.jpg";
import img10 from "./images/u468.jpg";

import HomeFooter from "../components/footer.vue";

export default {
  name: "About",
  //   props: {
  //     msg: String
  //   }
  components: {
    ooo: HomeFooter
  },
  data() {
    return {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
      img5: img5,
      img6: img6,
      img7: img7,
      img8: img8,
      img9: img9,
      img10: img10,
      navBarFixed: false,
      list: [
        `西安芝麻开花网络科技有限公司成立于2016年，多年来专注于互联网技术开发和数据服务。`,
        "我们的服务分为四大部分：为创业企业提供互联网技术支持；为传统企业互联网转型提供专业的全程解决方案；为政府事业单位提供信息化策略支持，为硬件技术企业提供互联网技术结合方案。",
        "公司采用全职+兼职+实习的管理模式，办公环境良好，位于西安曲江新区顶级写字楼。"
      ]
    };
  },
  mounted() {
    // 事件监听滚动条
    window.addEventListener("scroll", this.watchScroll);
  },
  methods: {
    watchScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //  当滚动超过 50 时，实现吸顶效果
      if (
        scrollTop > 549 &&
        document.body.scrollHeight -
          window.pageYOffset -
          document.getElementById("footer").offsetHeight >
          450
      ) {
        //(window.innerHeight-document.getElementById("footer").offsetHeight) > 400)
        this.navBarFixed = true;
        console.log(document.getElementById("footer").offsetHeight);
      } else {
        this.navBarFixed = false;
      }
    }
  },
};
</script>
<style scoped>
/* @media only screen and (max-width: 479px) {
  .about{
    margin-top: 40px !important;
  }
}
.about{
    margin-top: 80px !important;
  } */
@media screen and (max-width: 1500px) {
  .aboutus {
    width: 60% !important;
  }
  .row {
    display: block !important;
  }
  .imgright {
    margin-left: 0% !important;
    width: 103% !important;
  }
  .row img {
    padding-right: 10px !important;
    padding-bottom: 2rem!important;
    float: left !important;
  }
  .headline {
    margin-left: 45% !important;
    margin-right: 20px;
  }
  .leftmenu{
    width: 180px!important;
  }
  .navBarWrap {
    width: 180px!important;
  }
  .navBarWrap{
    margin-left: 0px!important;
  }
}
@media screen and (max-width: 1440px) {
  .aboutus {
    width: 60% !important;
  }
  .row {
    display: block !important;
  }
  .imgright {
    margin-left: 0% !important;
    width: 103% !important;
  }
  .row img {
    padding-right: 10px !important;
    float: left !important;
  }
  .righttext h2{
    margin-top: -6rem!important;
  }
  .headline {
    margin-left: 45% !important;
    margin-right: 20px;
  }
  .leftmenu{
    width: 90px!important;
  }
  .navBarWrap {
    width: 90px!important;
  }
  .navBarWrap{
    margin-left: 0px!important;
  }
  .leftmenu img{
    margin-left: -20px!important;
    height: 300px!important;
  }
  .leftbutton{
    margin-left: -15px!important;
    height: 300px!important;
  }
}
@media screen and (max-width: 479px) {
  .hidecontent{
    display: none!important;
  }
  .content{
    justify-content: space-around!important;
  }
  .aboutus {
    width: 90% !important;
  }
  .row {
    display: block !important;
    align-content: center!important;
  }
  .row img{
    padding-right: 0px!important;
    margin: auto !important;
    width: 100%!important;
    margin-top: 0px!important;
    clear: both!important;
  }
  .imgarea{
    height: 20rem!important;
  }
  .imgright {
    margin-left: 0% !important;
    width: 103% !important;
  }
  .imgrow{
    flex-direction: column!important;
  }
  .imgrow img{
    width: 95%!important;
    margin: auto!important;
    margin-bottom: 1rem!important;
  }
  .rightcontent{
    margin-top: 1rem!important;
  }
  .row img {
    padding-right: 0px !important;
    float: left !important;
  }
  .headline {
    margin: auto!important;
  }
  .leftmenu{
    display: none!important;
  }
  .navBarWrap {
    width: 84px!important;
  }
  .navBarWrap{
    margin-left: 0px!important;
  }
  .leftmenu img{
    margin-left: -20px!important;
    height: 300px!important;
  }
  .leftbutton{
    margin-left: -15px!important;
    height: 300px!important;
  }
}

.navBarWrap {
  position: fixed;
  top: -60px;
  z-index: 999;
}
.short {
  width: 50%;
  margin: auto;
}
.imgarea {
  position: relative;
  width: 100%;
  height: 400px;
}
.block1,
.block2,
.block3 {
  padding-left: 2rem;
  padding-top: 1rem;
  padding-right: 2rem;
  padding-bottom: 30px;
  border: 1px solid rgb(242, 242, 242);
  margin-bottom: 1rem;
}
.headline {
  width: fit-content;
  border-bottom: 3px solid rgb(0, 102, 153);
}
.listtext {
  text-indent: 2em;
  font-size: 3rem;
  text-align: start;
  color: rgb(154, 154, 154);
}
.headline p {
  font-size: 3.1rem;
  color: rgb(0, 102, 153);
  font-weight: 600;
  margin-top: 0px;
  text-align: center;
}
.headline-next {
  margin-top: 23px;
}
.short {
  margin: auto !important;
}
.aboutus {
  width: 1440px;
  margin: auto;
  position: relative;
}
.imgright {
  margin-top: 20px;
  margin-left: 10%;
  width: 45%;
}
.block3 img {
  display: block;
  width: 50%;
  text-align: center;
  margin: auto;
}
.block2 img {
  width: 80%;
  margin: auto;
  display: block;
}
.block2 img,
.block3 img {
  margin-top: 25px;
}
.content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.hidecontent {
  width: 20%;
}
.widthimg {
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
}
.head {
  border-bottom: 1px solid rgb(228, 228, 228);
  padding-bottom: 7px;
}
.head p {
  width: 10rem;
  padding-left: 1.2rem;
  font-size: 2.2rem;
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid rgb(121, 121, 121);
  margin-bottom: -7px;
}
.imgrow {
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.row {
  align-items: flex-start;
  padding-left: 1%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.row img {
  width: 40%;
  margin-top: 30px;
}
.leftmenu {
  width: 200px;
  /* width: 20%; */
  /* margin-left: 20px; */
  margin-top: 8rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.rightcontent {
  margin-top: 5rem;
  width: 80%;
}
.leftmenu img {
  height: 400px;
}
.leftbutton {
  height: 400px;
  padding-top: 23px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 50px;
}
.leftbutton a {
  font-size: 3rem;
  color: black;
}
p {
  font-size: 2rem;
  padding-left: 10px;
  padding-right: 10px;
}
.imgrow img {
  width: 25%;
}
.imgtext {
  position: absolute;
  text-align: center;
  vertical-align: middle;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
button {
  margin-top: 10px;
}

.imgtext h1 {
  color: rgb(0, 102, 255);
  font-size: 10rem;
  margin: auto;
  font-weight: 600;
}
.righttext h2 {
  color: rgb(22, 102, 255);
  font-weight: 100;
  font-size: 4rem;
  margin-top: -9rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-left: 50%;
}
.head {
  margin-top: 30px;
}
.button {
  background: none;
}
.righttext {
  margin-top: -32px;
}
hr {
  color: rgb(215, 215, 215);
}
</style>