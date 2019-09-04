<template>
  <div class="news" style="overflow:hidden">
    <div class="imgarea">
      <img :src="img1" alt class="widthimg" />
      <div class="imgtext">
        <h1>新闻中心</h1>
        <h2>NEWS CENTER</h2>
      </div>
    </div>
    <div class="newscenter">
      <div class="newscenterhead">
        <p>新闻中心</p>
        <hr />
      </div>
      <div class="newsblock">
        <div class="block">
          <img :src="img2" />
          <p>心中有code，在哪儿都能改变世界</p>
          <p class="day">2019-7-23</p>
        </div>
        <div class="block">
          <img :src="img3" />
          <p>两年时间赚了19w，他究竟对芝麻开发做了什么</p>
          <p class="day">2019-7-23</p>
        </div>
        <div class="block">
          <img :src="img4" />
          <p>数说芝麻开发的2016</p>
          <p class="day">2019-7-23</p>
        </div>
      </div>
    </div>
    <div class="listcontent">
      <div v-for="(item,index) in listnews" :key="index">
        <div class="newslist">
          <div class="newslistdays">
            <p class="days">06-23</p>
            <p>2019</p>
          </div>
          <div class="eachnews">
            <p>{{item.head}}</p>
            <p class="newscontent">{{item.content}}</p>
          </div>
          <div>
            <p>MORE</p>
          </div>
        </div>
        <hr />
      </div>
    </div>
    <home-footer></home-footer>
  </div>
</template>


<script>
import img1 from "../components/img/u305.jpg";
import img2 from "../components/img/u313.png";
import img3 from "../components/img/u314.png";
import img4 from "../components/img/u315.png";
// import img5 from ""

import HomeFooter from '../components/footer.vue'

export default {
  name: "News",
  //   props: {
  //     msg: String
  //   }
    components: {
    HomeFooter
  },
  data() {
    return {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
      listnews: [
        {
          head: "芝麻开发想项目服务透明化，用“工时制”取代“项目制“",
          content:
            "芝麻开发是一个以提供项目服务为导向的平台。项目服务有 IT 项目，包括网站建设、业务..."
        },
        {
          head: "心中有code，在哪都能改变世界！",
          content:
            "芝麻开发是一个以提供项目服务为导向的平台。项目服务有 IT 项目，包括网站建设、业务..."
        },
        {
          head: "2年业余时间赚了19w，他究竟在(dui)芝麻开发做了什么？",
          content:
            "芝麻开发是一个以提供项目服务为导向的平台。项目服务有 IT 项目，包括网站建设、业务..."
        },
        {
          head: "数说芝麻开发的2016",
          content:
            "芝麻开发是一个以提供项目服务为导向的平台。项目服务有 IT 项目，包括网站建设、业务..."
        },
        {
          head: "【芝麻Discovery】之芝麻勋章",
          content:
            "芝麻开发是一个以提供项目服务为导向的平台。项目服务有 IT 项目，包括网站建设、业务..."
        }
      ]
    };
  }
};
</script>
<style scoped>
*{
  text-align: left
}
.imgarea {
  position: relative;
  width: 100%;
  height: 400px;
}
.widthimg {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
}
.newslistdays {
  color: rgb(204, 204, 204);
  font-weight: 600;
}
.newslistdays p {
  margin-top: 0px;
  margin-bottom: 0px;
}
.listcontent {
  margin-top: 30px;
  margin-left: 50px;
}
p {
  font-size: 19px;
  padding-left: 10px;
}
.newscontent {
  color: rgb(107, 107, 107);
  font-size: 17px;
}
.newslist {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 20px;
}
.eachnews p {
  margin-bottom: 0px;
}
.days {
  color: rgb(174, 174, 174);
  font-size: 35px;
  margin-top: 15px !important;
  margin-bottom: 0px;
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
.newscenter {
  position: relative;
  margin-top: 0%;
}
.newscenterhead p{
  width: 90px;
  padding-left: 18px;
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid rgb(121, 121, 121);
  margin-bottom: -7px;
}
.newsblock {
  position: relative;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.block {
  width: 285px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid rgb(154, 154, 154);
  border-top: none;
}
.block img {
  width: 285px;
  height: 188px;
}
.imgtext h1 {
  color: black;
}
.imgtext h2 {
  color: rgb(102, 102, 102);
}
hr {
  color: rgb(154, 154, 154);
}
</style>