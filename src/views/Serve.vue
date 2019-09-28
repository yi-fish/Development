<template>
<div class="container-fuild">
<div class="row">
<div class="serve">
    <div class="imgs">
        <img src=".//images//u136.jpg" alt="服务">
        <p>做你创业路上的</p>
        <h4>技术合伙人</h4>
    </div>
    <div class="first">
         <div class="col-md-12 tit">
            <h3>主营业务</h3>
         </div>
        <div class="work col-md-12">
            <div class="work1">
                <div class="img col-md-1">
                    <img :src="workImg1">
                </div>
                <div class="title col-md-1"><p>{{title1}}</p> </div>
                <div class="job col-md-10">
                    <ul>
                        <li v-for="(work1,index) in works1"  :key="index">{{work1}}</li>
                    </ul>
                </div>
            </div>
            <div class="work1">
                <div class="img col-md-1">
                    <img :src="workImg2">
                </div>
                <div class="title col-md-1"><p>{{title2}}</p> </div>
                <div class="job col-md-10">
                    <ul>
                        <li v-for="(work2,index) in works2"  :key="index">{{work2}}</li>
                    </ul>
                </div>
            </div>
            <div class="work1">
                <div class="img col-md-1">
                    <img :src="workImg3">
                </div>
                <div class="title col-md-1"><p>{{title3}}</p> </div>
                <div class="job col-md-10">
                    <ul>
                        <li v-for="(work3,index) in works3"  :key="index">{{work3}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="second">
        <div class="col-md-12 tit">
            <h3>开发流程</h3>
         </div>
         <div class="process col-md-12">
             <div class="boxs" v-for="(process,index) in process" :key="index" :style="{color:process.color}">
                <div class="glyphicon" :class="process.class"></div>
                <div class="box">
                    <div class="circle">
                        <div class="size">{{process.title}}</div>
                        <div class="index">{{index+1}}</div>
                    </div>
                    <div class="title">{{process.subhead}}</div>
                </div>
             </div>
         </div>
    </div>
    <div class="third">
        <div class="col-md-12 tit">
            <h3>产品解决方案</h3>
        </div>
        <div class="methods">
            <ul >
                <li v-for="(method,index) in methods" :key="index" class="col-md-4">
                    <img :src="method.img">
                    <div >
                        <p v-for="(content,index) in method.contents" :key="index"><span>{{content.title}}——</span>{{content.par}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <home-footer class="col-md-12 col-xs-12">
    </home-footer>
 </div>
</div>
</div>

</template>

<script>
/* eslint-disable */
import HomeFooter from '../components/footer';
import workImg1 from './/images/work1.png';
import workImg2 from './/images/work2.png';
import workImg3 from './/images/work3.png';
import methodImg1 from './images/u147.png';
import methodImg2 from './images/u148.png';
import methodImg3 from './images/u149.png';
export default {
  name: 'serve',
  data(){
      return{
          "workImg1":workImg1,
          "workImg2":workImg2,
          "workImg3":workImg3,
          "title1":"技术开发",
          "title2":"设计类",
          "title3":"其他服务",
          "works1":["网站开发","系统开发","APP开发","微信公众号","微信小程序","手机网站"],
          "works2":["UI设计","网页设计","画册设计","logo设计"],
          "works3":["黑盒测试","需求分析","数据分析","服务器维护","网站维护","系统维护"],
          "process":[
              {
                  "class":"",
                  "title":"项目评估",
                  "subhead":"评估需求、开发周期、开发成本等",
                  "color":"orange"
              },
              {
                  "class":"glyphicon-chevron-right",
                  "title":"立项",
                  "subhead":"签署合同、充值预付款",
                  "color":"green"
              },
              {
                  "title":"安排工作者",
                  "subhead":"安排项目经理及其他工作者",
                  "color":"blue",
                  "class":"glyphicon-chevron-right",
              },
              {
                  "title":"项目开发",
                  "subhead":"工作者按需求开发，按时发布工作进度",
                  "color":"purple",
                  "class":"glyphicon-chevron-right",
              },
              {
                  "title":"按月结算",
                  "subhead":"每月初结算上月工作者报酬及平台服务费",
                  "color":"green",
                  "class":"glyphicon-chevron-right",
              },
          ],
          "methods":[
              {
                "img":methodImg1,
                "contents":[
                    {
                        "title":"自动售酒机项目",
                        "par":"自动售酒机项打破传统高端酒销售模式，利用互联网技术结合线下终端硬件，建立一套新零售体系；迎合了新的互联网消费理念，让用户在线下门店能够任意定量购买到大众熟知的高端品牌酒,产品推出后获得众多年轻消费者的追捧。"

                    }
                ]
              },
              {
                "img":methodImg2,
                "contents":[
                    {
                        "title":"益车宝是",
                        "par":"自动售酒机项打破传统高端酒销售模式，利用互联网技术结合线下终端硬件，建立一套新零售体系；迎合了新的互联网消费理念，让用户在线下门店能够任意定量购买到大众熟知的高端品牌酒,产品推出后获得众多年轻消费者的追捧。"
                    }
                ]
              },
              {
                "img":methodImg3,
                "contents":[
                    {
                        "title":"股票自动交易系统",
                        "par":"将股票买卖的实盘操作完全交给程序自动完成。"
                    },
                    {
                        "title":"汽车行业互联网舆情监控系统",
                        "par":"已服务广汽丰田和江淮汽车。"
                    }
                ]
              }
          ]
      }
  },
    components:{
      HomeFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/************************************整体样式********************************************/
*{
    margin: 0px;
    padding: 0px;
    list-style: none;
}
/************************************整体样式********************************************/

/************************************主体样式********************************************/
/********************imgs***************************/
.serve .imgs{
    width: 100%;
    position: relative;
}
.serve .imgs img{
    width: 100%;
    max-height: 400px;
}
.serve .imgs p{
    font-size: 40px;
    color: #999;
    position: absolute;
    left: 25%;
    top: 35%;
    font-weight: 600;   
}
.serve .imgs h4{
    font-size: 50px;
    color: white; 
    position: absolute;
    left: 45%;
    top: 55%;
    font-weight: 600;
}
/********************imgs***************************/
/********************主营业务***************************/
.serve .tit{
    border-left: 3px solid red;
    margin-top: 40px;
    margin-bottom: 40px;
    text-align: left;
    padding-left: 3%;
}
.serve .tit h3{
    font-size: 28px
}
.serve .first{
    padding-left: 5%;
}
.serve .first .work .work1{
    border-top: 1px solid rgb(212, 212, 212);
    height: 100px;
    line-height: 100px;
}
.serve .first .work .work2{
    border-bottom: 1px solid rgb(212, 212, 212);
}
.serve .first .work .work1 .img img{
    width: 40%;
}
.serve .first .work .work1 .title{
    color:#0aa99a;
    font-size: 20px;
}
.serve .first .work .job ul li{
    float: left;
    /* text-align: center; */
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex: 1;
    font-size: 20px;
    width: 15%;
}
/* 主营业务的手机端 */
@media screen and (max-width:1026px){
   .serve .first .work .work1 .title{
       font-size: 24px;
       float: left;
    } 
    .serve .first .work .work1 .img img{
        display: none;
    } 
    .serve .first .work .work1{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .serve .first .work .work1 .title{
        flex:2;
    }
    .serve .first .work .work1 .job{
        flex:10
    }
    .serve .first .work .job ul li{
    /* float: left; */
    display: flex;
    flex: 1;
    font-size: 20px;

}
}
.serve .first .work .job ul li:hover{
    cursor: pointer;
}
/*********************second开发流程*************************/
.serve .second{
    padding-left: 5%;
}
.serve .second .process{
    display: flex;
    flex-direction: row;
    flex:1;
    padding-left: 2%;
    padding-right: 4%;
    background: #dddddd;
}
.serve .second .process .boxs{
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 19px; 
    position: relative;
}
.serve .second .process .boxs .glyphicon{
    position: absolute;
    top:5.5vw;
    left:-3vw;
}
.serve .second .process .boxs .box .circle{
    width: 10vw;
    height: 10vw;
    border:1px dashed;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    position: relative;
}

/* 圆圈里的字体大小     */
@media screen and (max-width:1600px){
    .serve .second .process .boxs .box .circle{
        font-size: 24px!important;
    }
}
@media screen and (max-width:1230px){
    .serve .second .process .boxs .box .circle{
        font-size: 20px!important;
    }
}
@media screen and (max-width:1075px){
    .serve .second .process .boxs .box .circle{
        font-size: 16px!important;
    }
}
.serve .second .process .boxs .box .circle .index{
    width: 25px;
    height: 25px;
    background:#dddddd;
    position: absolute;
    bottom: 0px;
    margin-bottom: -5%;
    font-size: 20px;
}
@media screen and (max-width:1440px){
  .serve .second .process .boxs .box .circle .index{
    margin-bottom: -10%!important;
  }  
}
.serve .second .process .boxs .box .title{
    width: 10vw;
    font-size: 20px;
    margin-top: 10px;
}
/* 圆圈下面的字体的大小 */
@media screen and (max-width:1440px){
    .serve .second .process .boxs .box .title{
    font-size: 18px!important;
    }
}
@media screen and (max-width:1110px){
    .serve .second .process .boxs .box .title{
    font-size: 14px!important;
    }
}
@media screen and (max-width:900px){
.serve .second .process .boxs .box .circle{
    width: 18vw;
    height: 18vw;
    border:1px dashed;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px!important;
    position: relative;
}
.serve .second .process .boxs .glyphicon{
    position: absolute;
    top:9.5vw;
    left:-1vw;
}
.serve .second .process .boxs .box .title{
    width: 18vw!important;
    font-size: 20px!important;
    margin-top: 20px!important;
}
}
@media screen and (max-width:700px){
    .serve .second .process .boxs .box .circle{
    width: 18vw;
    height: 18vw;
    border:1px dashed;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px!important;
    position: relative;
}
}
@media screen and (max-width:500px){
    .serve .second .process .boxs .box .circle{
    width: 30vw;
    height: 30vw;
    border:1px dashed;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px!important;
    position: relative;
    }
.serve .second .process .boxs .box .circle .index{
    width: 40px;
    height: 40px;
    background:#dddddd;
    position: absolute;
    margin-bottom: -16%!important;
    font-size: 30px;
    line-height: 40px;
}
.serve .second .process .boxs .glyphicon{
    position: absolute;
    top:18vw;
    left:-5vw;
    font-size: 20px;
}
.serve .second .process .boxs .box .title{
    width: 30vw!important;
    font-size: 20px!important;
    margin-top: 20px!important;
}
}
/* @media screen and (max-width:500px){
    .serve .second .process{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex:1;
    padding-left: 2%;
    padding-right: 4%;
    background: #dddddd;
}
.serve .second .process .boxs{
    display: flex;
    flex-direction: row;
    width: 30%;
    padding: 19px; 
    position: relative;
}
    .serve .second .process .boxs .box .circle{
    width: 50vw;
    height: 50vw;
    border:1px dashed;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px!important;
    position: relative;.serve .second .process .boxs .box .circle{
    width: 50vw;
    height: 50vw;
    border:1px dashed;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px!important;
    position: relative;
}
.serve .second .process .boxs .box .circle .index{
    width: 40px;
    height: 40px;
    background:#dddddd;
    position: absolute;
    margin-bottom: -6%!important;
    font-size: 40px;
    line-height: 40px;
}
.serve .second .process .boxs .glyphicon{
    position: absolute;
    top:25vw;
    left:-5vw;
    font-size: 20px;
}
.serve .second .process .boxs .box .title{
    width: 50vw!important;
    font-size: 30px!important;
    margin-top: 20px!important;
}
} */
/*********************second开发流程*************************/
/*********************third产品解决方案*************************/
@media screen and (max-width:1026px){
    .third ul li div{
    padding: 5%;
    border: 1px solid black;
    /* min-height:320px; */
    max-height: 600px;
    overflow: auto;
    /* height: 400px!important; */
    height: auto!important;
    margin-bottom: 30px;
    }
    .third img{
    width: 100%;
    max-height: 300px;
    height: auto!important;
    }
    .third p{
    font-size: 32px!important;
    line-height: 70px!important;
    padding-top: 10px;
    margin-bottom: 20px;
    text-align: left;
}
.third span{
    font-weight: 600;
    font-size: 34px!important;
}
}
.third{
    padding-left: 5%;
}
.third ul li{
    padding-right: 4%;
}
.third ul li div{
    padding: 5%;
    border: 1px solid black;
    /* min-height:320px; */
    height: 300px;
}
.third img{
    width: 100%;
    max-height: 300px;
    height: 200px;
}
.third p{
    font-size: 18px;
    line-height: 40px;
    padding-top: 10px;
    margin-bottom: 20px;
    text-align: left;
}
.third span{
    font-weight: 600;
    font-size: 22px;
}
@media screen and (max-width:700px){
.third p{
    font-size: 38px!important;
    line-height: 80px!important;
}
.third span{
    font-size: 40px!important;    
}
h3{
    font-size: 42px!important;
}
}
/*********************third产品解决方案*************************/
</style>