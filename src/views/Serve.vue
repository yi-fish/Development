<template>
<div class="serve">
    <div class="imgs">
        <img src=".//images//u136.jpg" alt="服务">
        <p>做你创业路上的</p>
        <h4>技术合伙人</h4>
    </div>
    <div id="content">
        <div class="first">
            <div class="tit">
                <h3>主营业务</h3>
            </div>
            <div class="work">
                <div class="work1">
                    <div class="img">
                        <img :src="workImg1">
                    </div>
                    <div class="title"><p>{{title1}}</p> </div>
                    <div class="job">
                        <ul>
                            <li v-for="(work1,index) in works1"  :key="index">{{work1}}</li>
                        </ul>
                    </div>
                </div>
                <div class="work1">
                    <div class="img">
                        <img :src="workImg2">
                    </div>
                    <div class="title"><p>{{title2}}</p></div>
                    <div class="job">
                        <ul>
                            <li v-for="(work2,index) in works2"  :key="index">{{work2}}</li>
                        </ul>
                    </div>
                </div>
                <div class="work1">
                    <div class="img">
                        <img :src="workImg3">
                    </div>
                    <div class="title"><p>{{title3}}</p> </div>
                    <div class="job">
                        <ul>
                            <li v-for="(work3,index) in works3"  :key="index">{{work3}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="second">
            <div class="tit">
                <h3>开发流程</h3>
            </div>
            <div class="process">
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
            <div class="tit">
                <h3>产品解决方案</h3>
            </div>
            <div class="methods">
                <ul >
                    <li v-for="(method,index) in methods" :key="index">
                        <img :src="method.img">
                        <div >
                            <p v-for="(content,index) in method.contents" :key="index"><span>{{content.title}}——</span>{{content.par}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <home-footer></home-footer>
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
                  "color":"#f49956"
              },
              {
                  "class":"glyphicon-chevron-right",
                  "title":"立项",
                  "subhead":"签署合同、充值预付款",
                  "color":"#64b046"
              },
              {
                  "title":"安排工作者",
                  "subhead":"安排项目经理及其他工作者",
                  "color":"#2486a3",
                  "class":"glyphicon-chevron-right",
              },
              {
                  "title":"项目开发",
                  "subhead":"工作者按需求开发，按时发布工作进度",
                  "color":"#5e41ae",
                  "class":"glyphicon-chevron-right",
              },
              {
                  "title":"按月结算",
                  "subhead":"每月初结算上月工作者报酬及平台服务费",
                  "color":"#b1459d",
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
#content{
    width: 1440px;
    margin: 0 auto;
    padding-left: 1%;
    padding-right: 1%;
}
/********************主营业务***************************/
.serve .tit{
    border-left: 3px solid red;
    margin-top: 40px;
    margin-bottom: 40px;
    text-align: left;
    padding-left: 3%;
}
.serve .tit h3{
    font-size: 28px;
}
.serve .first .work .work1{
    border-top: 1px solid rgb(212, 212, 212);
    height: 100px;
    line-height: 100px;
}
.serve .first .work .work1 .img img{
    width: 60px;
}
.serve .first .work .work1 .title{
    color:#0aa99a;
    font-size: 20px;
}
.serve .first .work .job ul li{
    float: left;
    font-size: 20px;
    width: 15%;
}
.work1{
    display: flex;
    flex-direction: row;
}
.work1 .img{
    flex: 1
}
.work1 .title{
    flex: 1
}
.work1 .job{
    flex: 10
}
/* 主营业务的手机端 */
@media screen and (max-width: 1440px) {
     #content{
        width: 100%;
    }
}
@media screen and (max-width: 1200px) {
 .serve .second .process .boxs .glyphicon{
    top:60px;
    left:-19px!important;
    }   
}
@media screen and (max-width: 1100px) {
 .serve .second .process .boxs .glyphicon{
    top:60px;
    left:-10px!important;
    }   
}
@media screen and (max-width:1026px){
    #content{
        width: 100%!important;
    }
    .serve .tit h3{
    font-size: 26px;
    }
   .serve .first .work .work1 .title{
       font-size: 20px;
       float: left;
    } 
    .serve .first .work .work1 .img{
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
    display: flex;
    flex: 1;
    font-size: 17px;
}
}
@media screen and (max-width:800px){
    .serve .tit h3{
    font-size: 22px;
}
    .serve .first .work .work1 .title{
       font-size: 17px;
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
    display: flex;
    flex: 1;
    font-size: 13px;
    }
}
@media screen and (max-width:600px){
    .serve .first .work .work1{
        height: 70px;
        line-height: 70px;
    }
    .serve .tit h3{
        font-size: 20px;
    }
    .serve .first .work .work1 .title{
       font-size: 14px;
    } 
    .serve .first .work .work1{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .serve .first .work .work1 .title{
        flex:1;
    }
    .serve .first .work .work1 .job{
        flex:6;
    }
    .serve .first .work .job ul li{
    display: flex;
    flex: 1;
    font-size: 12px;
    }
}
.serve .first .work .job ul li:hover{
    cursor: pointer;
}
/*********************second开发流程*************************/
.serve .second .process{
    display: flex;
    flex-direction: row;
    flex:1;
    padding: 2% 4% 2% 2%;
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
    top:85px;
    left:-30px;
}
.serve .second .process .boxs .box .circle{
    width: 150px;
    height: 150px;
    border:1px dashed;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    position: relative;
}

/* 圆圈里的字体大小     */
.serve .second .process .boxs .box .circle .index{
    width: 25px;
    height: 25px;
    background:#dddddd;
    position: absolute;
    bottom: -5px;
    margin-bottom: -5%;
    font-size: 20px;
}
.serve .second .process .boxs .box .title{
    font-size: 20px;
    margin-top: 20px;
    margin-left: -20px;
}
@media screen and (max-width:1026px){
  .serve .second .process .boxs .box .circle .index{
    margin-bottom: -8%;
    font-size: 18px;
  }
  .serve .imgs p{
    font-size: 36px;
    left: 25%;
    top: 35%;
    font-weight: 600;   
    }
    .serve .imgs h4{
    font-size: 40px;
    color: white; 
    left: 55%;
    top: 55%;
    font-weight: 600;
    }
  .serve .second .process .boxs .box .circle{
    width: 100px;
    height: 100px;
    border:1px dashed;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    position: relative;
    } 
   .serve .second .process .boxs .glyphicon{
    top:60px;
    left:-12px;
    font-size: 10px;
    } 
    .serve .second .process .boxs .box .title{
        font-size: 14px;
    }
}
@media screen and (max-width:800px){
  .serve .second .process .boxs .box .circle .index{
    margin-bottom: -8%;
    font-size: 16px;
  }
  .serve .imgs p{
    font-size: 25px;   
    }
    .serve .imgs h4{
    font-size: 30px;

    }
  .serve .second .process .boxs .box .circle{
    width: 70px;
    height: 70px;
    font-size: 13px;
    position: relative;
    } 
   .serve .second .process .boxs .glyphicon{
    top:50px;
    left:-8px;
    font-size: 10px;
    } 
    .serve .second .process .boxs .box .title{
        font-size: 12px;
    }
}
@media screen and (max-width:600px){
    .serve .second .process{
        width: 100%;
    }
  .serve .second .process .boxs .box .circle .index{
    margin-bottom: -11%;
    font-size: 14px;
  }
  .serve .imgs p{
    font-size: 22px;   
    }
    .serve .imgs h4{
    font-size: 26px;

    }
  .serve .second .process .boxs .box .circle{
    width: 58px;
    height: 58px;
    font-size: 10px;
    } 
   .serve .second .process .boxs .glyphicon{
    top:45px;
    left:-6px;
    font-size: 10px;
    } 
    .serve .second .process .boxs .box .title{
        font-size: 10px;
    }
}
/*********************second开发流程*************************/
/*********************third产品解决方案*************************/
.third .methods ul{
    display: flex;
    flex-direction: row;
}
.third ul li{
    padding: 0 2%;
    flex: 1
}
.third ul li div{
    padding: 5%;
    border: 1px solid black;
    height: 320px;
}
.third img{
    width: 100%;
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
@media screen and (max-width:1440px){
.third ul li div{
    padding: 5%;
    border: 1px solid black;
    height: 330px!important;
} 
}    
@media screen and (max-width:1206px){
.third ul li div{
    padding: 5%;
    border: 1px solid black;
    height: 380px!important;
}     
}
@media screen and (max-width:1026px){
.third ul li div{
    border: 1px solid black;
    height: 350px!important;
} 
.third img{
    width: 100%;
    height: 150px;
}  
.third p{
    font-size: 16px;
    line-height: 30px;
    padding-top: 10px;
    margin-bottom: 30px;
    text-align: left;
}
.third span{
    font-weight: 600;
    font-size: 20px;
}
}
@media screen and (max-width:800px){
    .third .methods ul{
        display: flex;
        flex-direction: column;
    }
    .third ul li{
        width: 60%;
        margin: 0 auto;
        margin-bottom: 25px;
    }
    .third ul li:last-child{
        margin-bottom: 0px;
    }
.third ul li div{
    padding: 5%;
    height: 240px!important;
} 
.third img{
    width: 100%;
    height: 150px;
}  
.third p{
    font-size: 16px;
    line-height: 30px;
    padding-top: 10px;
    margin-bottom: 30px;
    text-align: left;
}
.third span{
    font-weight: 600;
    font-size: 20px;
}
}
@media screen and (max-width:600px){
.third ul li div{
    padding: 5%;
    height: 250px;
} 
.third img{
    width: 100%;
    height: 150px;
}  
.third p{
    font-size: 15px;
    line-height: 30px;
    padding-top: 10px;
    margin-bottom: 30px;
    text-align: left;
}
.third span{
    font-weight: 600;
    font-size: 18px;
}
}
@media screen and (max-width: 500px) {
    #content{
        width: 100%;
    }
    .serve .imgs p{
        font-size: 18px;
        left: 20%;
        top: 25%;
    }
    .serve .imgs h4{
        font-size: 20px;
        left: 50%;
        top: 55%;
    }
    .serve .first{
        width: 100%;
    }
    .serve .first .work .work1{
        padding-left: 10px;
        line-height: 20px;
    }
    .serve .tit h3{
        font-size: 20px;
    }
    .serve .first .work .work1 .title{
       font-size: 13px;
       display: flex;
       align-items: center;
       flex:1;
    } 
    .serve .first .work .work1{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .serve .first .work .work1 .job{
        display: flex;
        flex:4;
        align-items: center;
    }
    .serve .first .work .job ul li{
        display: flex;
        width: 33%;
        font-size: 12px;
        padding-left: 10px;
    }
    .serve .first .work .work1:nth-child(2) ul li{
        width: 50%;
    }
    .serve .second{
        width: 100%;
        overflow: hidden;
        margin-top: -15px;
    }
.serve .second .process{
    display: flex;
    flex-direction: row;
    flex:1;
    flex-wrap: wrap;
    padding: 3% 5%;
    background: #dddddd;
    margin-top: -20px;
}
.serve .second .process .boxs{
    width: 50%;
    padding: 19px; 
}
.serve .second .process .boxs .glyphicon{
    position: absolute;
    top:52px;
    left:-6px!important;
    display: none;
}
.serve .second .process .boxs .box .circle{
    width: 80px;
    height: 80px;
    font-size: 14px;
}
.serve .second .process .boxs .box .circle .index{
    width: 20px;
    height: 20px;
    background:#dddddd;
    position: absolute;
    bottom: -6px;
    margin-bottom: -5%;
    font-size: 16px;
}
.serve .second .process .boxs .box .title{
    font-size: 14px;
    margin-top: 20px;
    margin-left: -20px;
}

.third{
    width: 100%;
    
} 
.third ul li{
    margin: 0 auto;
    width: 80%;
    margin-bottom: 20px;
}
.third ul li div{
    height: auto!important;
}
}
/*********************third产品解决方案*************************/
</style>