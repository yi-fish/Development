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
        <hr />
      </div>
      <div class="content">
        <div class="leftmenu" :class="navBarFixed == true ? 'navBarWrap' :''">
          <img :src="img2" alt />
          <div class="leftbutton">
            <a href="#block1">
              <button>公司概述</button>
            </a>
            <a href="#block2">
              <button>发展历程</button>
            </a>
            <a href="#block3">
              <button>公司荣誉</button>
            </a>
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
                <div>
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
  </div>
</template>


<script>
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
export default {
  name: "About",
  //   props: {
  //     msg: String
  //   }
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
        "西安芝麻开花网络科技有限公司成立于2016年，多年来专注于互联网技术开发和数据服务。",
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
      if (scrollTop > 549) {
        this.navBarFixed = true;
      } else {
        this.navBarFixed = false;
      }
    }
  }
};
</script>
<style scoped>
* {
  text-align: left;
}
.navBarWrap {
  position: fixed;
  top: -30px;
  z-index: 999;
}

.imgarea {
  position: relative;
  width: 100%;
  height: 400px;
}
.block1,
.block2,
.block3 {
  padding-left: 30px;
  padding-top: 30px;
  padding-right: 30px;
  padding-bottom: 30px;
  border: 1px solid rgb(242, 242, 242);
  margin-bottom: 30px;
}
.short {
  width: 150px;
  margin: auto;
}
.headline {
  border-bottom: 1px solid rgb(0, 102, 153);
}
.listtext {
  font-size: 16px;
  color: rgb(154, 154, 154);
}
.headline p {
  color: rgb(0, 102, 153);
  font-weight: 600;
  margin-top: 0px;
  margin-bottom: 15px;
  text-align: center;
}
.aboutus {
  width: 100%;
  position: relative;
}
.imgright {
  margin-top: 20px;
  margin-left: 20px;
  width: 50%;
}
.block3 img {
  display: block;
  width: 450px;
  height: 300px;
  text-align: center;
  margin: auto;
}
.block2 img {
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
}
.widthimg {
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
}
.head p {
  width: 90px;
  padding-left: 18px;
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.row img {
  width: 322px;
  height: 310px;
}
.leftmenu {
  width: 20%;
  /* margin-left: 20px; */
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.rightcontent {
  padding-left: 50px;
  margin-top: 60px;
  margin-left: 60px;
  width: 60%;
  position: absolute;
  margin-left: 20%;
}
.leftmenu img {
  height: 300px;
}
.leftbutton {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
p {
  font-size: 21px;
  padding-left: 10px;
  padding-right: 10px;
}
.imgrow img {
  width: 200px;
  height: 250px;
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
  font-size: 50px;
}
.righttext h2 {
  color: rgb(22, 102, 255);
  font-weight: 100;
  font-size: 40px;
}
.righttext {
  padding-left: 400px;
  margin-top: -32px;
}
hr {
  color: rgb(215, 215, 215);
}
</style>