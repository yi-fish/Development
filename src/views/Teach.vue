<template>
<div class="education">
    <div class="imgs">
        <img src="./images/人才培养.jpg" alt="芝麻开花">
        <p>人才</p>
        <h4>企业成长的不竭动力</h4>
    </div>
    <div id="content">
        <div class="title">
            <p>人才培养</p>
        </div>
        <div id="right">
            <!-- 当吸顶时，出现，占位，将content挤到原来的位置 -->
            <div class="middleHidden" v-show="!flag"></div>
            <div class='middle' :class="navBarFixed == true ? 'navBarWrap' :''">
                <img src=".//images/line.png" alt="|">
                <ul>
                    <li><a href="#padding" style="text-decoration:none">培训详情简介</a> </li>
                    <li><a href="#padding2" style="text-decoration:none">考核&薪资</a></li>
                    <li><a href="#padding3" style="text-decoration:none">优秀学员寄语</a></li>
                    <li><a href="#padding4" style="text-decoration:none">实习生优秀项目展示</a> </li>
                    <li><a href="#padding5" style="text-decoration:none">实习生毕业去向</a></li>
                </ul>
            </div>
            <div class='middle navabsolute' v-if="navabs" :style="{'top':padding5Height+'px'}">
                <img src=".//images/line.png" alt="|">
                <ul>
                    <li><a href="#padding" style="text-decoration:none">培训详情简介</a> </li>
                    <li><a href="#padding2" style="text-decoration:none">考核&薪资</a></li>
                    <li><a href="#padding3" style="text-decoration:none">优秀学员寄语</a></li>
                    <li><a href="#padding4" style="text-decoration:none">实习生优秀项目展示</a> </li>
                    <li><a href="#padding5" style="text-decoration:none">实习生毕业去向</a></li>
                </ul>
            </div>
            <div class="content">
                <div class="padding" id="padding">
                    <h3>芝麻开花实习生培训介绍</h3>
                    <div v-for="(introduce,index) in introduce" :key="index">
                        <h4>{{index+1}}、{{introduce.title}}</h4>
                        <p>{{introduce.par}}</p>
                    </div>
                    <h3>实习生招收岗位&招收对象</h3>
                    <div class="job">
                        <div v-for="(job,index) in jobs" :key="index">
                            <h4>{{index+1}} 、{{job.title}}</h4>
                            <ul>
                                <li v-for="(par,index) in job.par" :key="index"><span class="glyphicon glyphicon-play-circle"></span> {{par}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="padding2" id="padding2">
                    <h3>薪资待遇</h3>
                    <div class="picture">
                        <div v-for="(wages,index) in wages" :key="index">
                            <div class="img"><img src="./images/入门待遇.png" alt="待遇图片"><p>{{wages.title}}</p></div>
                            <div class="money"><p>{{wages.money}}</p></div>
                        </div>
                    </div>
                    <h3>考核标准</h3>
                    <div>
                        <div class='evaluate' v-for="(standard,index) in standard" :key="index">
                            <p>{{standard.title}}</p>
                            <ul>
                                <li v-for="(par,index) in standard.par" :key="index">
                                    <span v-if="standard.par.length>1">({{index+1}})</span>{{par.tit}}
                                    <ul>
                                        <li v-for="(model,index) in par.model" :key="index">{{model}}</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="padding3" id="padding3">
                    <h3>优秀学员寄语</h3>
                    <div class="box">
                        <ul>
                            <li v-for="(obj,index) in wishes" :key="index">
                                <h5>{{obj.name}}</h5><span class="line"></span>
                                <div>
                                    <p>{{obj.intro}}</p>
                                    <p><span class="bord">学生寄语：</span>{{obj.wish}}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="padding4" id="padding4">
                    <h3>实习生优秀项目展示</h3>
                    <div class="show">
                        <div>
                            <img :src="img" alt="作品展示" v-for="(img,index) in showImg" :key="index">
                        </div>
                    </div>
                </div>
                <div class="padding5" id="padding5">
                    <h3>优秀学员毕业去向</h3>
                    <ul>
                        <li v-for="(goToArr,index) in goToArrs" :key="index"><img :src="goToArr" alt="优秀学员去向"></li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
    <home-footer id="foot"></home-footer>
</div>
</template>

<script>
 /* eslint-disable */
import img1 from ".//images/goto_1.png";
import img2 from ".//images/goto_2.png";
import img3 from ".//images/goto_3.png";
import img4 from ".//images/goto_4.png";
import image1 from ".//images/show1.png";
import image2 from ".//images/show2.png";
import image3 from ".//images/show3.png";
import HomeFooter from '../components/footer.vue'
export default {
  name: 'edutation',
    components: {
    HomeFooter
  },
  data(){
    return{
      "labels":["培训详情简介","考核&薪资","优秀学员寄语","实习生优秀项目展示","实习生毕业去向"],
      "introduce":[
          {
              "title":"公司介绍",
              "par":"西安芝麻开花网络科技有限公司（芝麻开发平台西安运营公司）成立于2016年，是一家集开发、销售、服务、培训为一体的高科技型企业，多年来专注于互联网技术开发和数据服务，为创业企业提供互联网技术支持，为传统企业互联网转型提供专业的全程解决方案，为政府事业单位提供信息化策略支持，为硬件技术企业提供互联网技术结合方案，采用全职+兼职+实习的管理模式。"
          },
          {
              "title":"实习环境",
              "par":"办公地址位于西安曲江新区顶级写字楼，零食冷饮免费吃，饮料无限畅饮，篮球及户外活动小组等业余生活丰富。"
          },
          {
              "title":"参与真实项目",
              "par":"培训完成后，如通过考核，我公司会安排学员参与实际项目。"
          },
          {
              "title":"发放工资",
              "par":" 如通过考核并已参加我公司实际项目，每月会以个人综合能力、工作态度以及贡献等方面进行考核，优异者的薪资将上不封顶。"
          },
      ],

      "jobs":[
          {
              "title":"招收岗位",
              "par":["产品经理","产品测试","web前端开发","IOS开发","PHP开发","安卓开发"]
          },
          {
              "title":"招收对象",
              "par":["具有良好的计算机基础，踏实好学","善于沟通及团队协作，工作认真细致，乐于分享","有无经验均可，服从公司安排，其他技能我司提供岗位培训"],
          },
          {
              "title":"申请方式",
              "par":["有意者请发送简历至邮箱：qijianying@xazhima.com"]
          }
      ],
      "wages":[
          {
              "title":"入门待遇","money":"200元/8小时"
          },
          {
              "title":"最低待遇","money":"140元/8小时"
          },
          {
              "title":"最高待遇","money":"上不封顶"
          }
      ],
      "wishes":[
            {"name":"王同学","wish":"坚持做难且正确的事情。",
            "intro":"毕业于西安电子科技大学生物医学工程专业，2016年6-9月到芝麻开发培训实习。目前就职于趣头条产品经理岗位。"},
            {"name":"卜同学","wish":"在芝麻开发，你可以从真实的项目中提升自己的专业技能，也会与一批优秀的人共同进步。",
            "intro":"毕业于西安电子科技大学数学与应用数学专业，2016年7月到西安芝麻开发培训实习。目前就职于芝麻开发产品经理岗位。"},
            {"name":"蒋同学","wish":"相信芝麻开发 总有一天会感激它的。", 
            "intro":"毕业于西安电子科技大学生物医学工程专业，2016年6-9月到芝麻开发培训实习。目前就职于北京中体骏彩信息技术有限公司产品经理岗位。"},
            {"name":"吴同学","wish":"在芝麻开发除了能够学到专业技能之外，我认为更可贵的是潜移默化地培养了一种职业精神，严谨的契约精神和正确的职业观在学校是无法学到的。",
            "intro":"毕业于西安电子科技大学电子与通信工程专业，2017年10月-2019年4月到芝麻开发培训实习。目前就职于顺丰速运有限公司产品经理岗位。"},
        ],
        "standard":[
            {
                "title":"一、每月进行一次，考核结果由各部门负责人审核；",
                "par":[]
            },
            {
                "title":"二、考核分为好评与差评:",
                "par":[
                    {
                        "tit":"好评标准：",
                        "model":["工作态度积极；"]
                    },
                    {
                        "tit":"差评标准：",
                        "model":["项目因内部原因出现延期情况；","项目交付测试，测试主功能流程测不通；","客户对项目进行投诉；","所有全职人员对实习生个人的投诉；","每月如有一个好评加一个差评情况，视为差评；"," 出现以上的情况，将对技术开发小组成员进行差评。"]
                    }
                ]
            },
            {
                "title":"三、实行考核目的：",
                "par":[
                    {
                        "tit":"为了规范开发人员的行为，提高工作质量及工作效率。"
                    }
                ]
            },
        ],
        "showImg":[image1,image2,image3],
      "goToArrs":[img1,img2,img3,img4],
      navBarFixed :"false",
      navBar:false,
      flag:true,
      navabs:false,
      padding5Height:5000
    }  
  },
   mounted () {
        // 事件监听滚动条
      window.addEventListener('scroll', this.watchScroll)
      
  },
  methods: {
    watchScroll () {
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          let padding5Height=document.getElementById('padding5').offsetTop
          this.padding5Height=padding5Height
          //  当滚动超过400时，实现吸顶效果
          if (scrollTop > 580&& scrollTop<=padding5Height) {
            this.navBarFixed = true;
            this.navabs=false;
          } else if(scrollTop>padding5Height) {
            this.navBarFixed = false
            this.navabs=true
          }else{
            this.navBarFixed = false
            this.navabs=false;              
          }
          this.flag=!this.navBarFixed
    }  
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    margin: 0px;
    padding: 0px;
    list-style: none;
    text-align: left;
}
.education{
    position: relative;
}
.navabsolute{
    position: absolute;
}
/************************************整体样式********************************************/
#right{
    display: flex;
    flex: row;
    flex-wrap: wrap;
}
#right .middle{
    flex: 1;
}

#content{
    width: 1440px;
    margin: 0 auto;
}
.content{
    flex:3;
}
.middleHidden{
    flex: 1;
}
/********************imgs***************************/
.education .imgs{
    width: 100%;
    height: auto;
    position: relative;
}
.education .imgs img{
    width: 100%;
    max-height: 400px;
}
.education .imgs p{
    font-size: 68px;
    color:rgb(97, 137, 224);
    position: absolute;
    left: 52%;
    top: 35%;
    font-weight: 600;   
}
.education .imgs h4{
    font-size: 48px;
    color:#ddd; 
    position: absolute;
    left: 58%;
    top: 60%;
    font-weight: 600;
}
/********************imgs***************************/
/************************************主体样式********************************************/

/*********头部*********/
.education .title {
    width: 100%;
    font-family: 'Arial Normal', 'Arial';
    margin-top: 30px;
    padding-left: 4%;
    font-size: 22px;
    border-bottom: 1px solid #333;
    color: red;
}
.education .title p{
    width: 130px;
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 28px;
    color: #4A4A4A;
    letter-spacing: 0;
    border-bottom: 2px solid black;
    margin-bottom: 0px;
}
#right .middle img{
    float: left;
    margin-left: 40px;
    margin-top: 60px; 
    height: 340px;   
}
#right .middle ul{
    margin-left: 20px;
    float: left;
    margin-top:12px;
}
#right .middle ul li{
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    padding:50px 0px 0px 0px;
    height: 75px;
    font-weight: 500;
    font-size: 24px;
    color: #000000;
}
#right .middle ul li:hover{
    cursor: pointer;
}
/**********左边********/
/******************content********************************/
#right .content{
    padding-right: 2%;
}
#right .content .padding{
    border:1px solid #e2dfdf;
    margin-top:50px;
    padding: 0px 0px 2% 2%;
}
#right .content .padding h3{
    display: inline-block;
    line-height: 60px;
    border-bottom: 1px solid #006699;
    font-family: PingFangSC-Regular;
    font-weight: 700;
    text-align: center;
    font-size: 28px;
    color: #006699;
    margin: 30px 0px 10px 15px;
}
#right .content .padding h4{
    font-family: PingFangSC-Regular;
    font-weight: 700;
    font-size: 26px;
    color: #000000;
    text-indent: 2em;
    padding: 1.5%;
}
#right .content .padding p{
    font-size: 22px;
    text-indent: 2em;
    padding-right: 20px;
    padding-left: 20px;
    line-height: 50px;
}
#right .content .padding .job ul li{
    font-size: 22px;
    /* height: 50px; */
    line-height: 50px;
    padding-left: 6%;
}
#right .content .padding .job ul li span{
    margin-right: 20px;
}
/* 招收岗位底下的li每行有两个 */
#right .content .padding .job>div:first-of-type ul{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
#right .content .padding .job>div:first-of-type ul li {
    width: 50%;
}
/* 申请方式前面不用字体图标 */
#right .content .padding .job>div:last-of-type ul li span{
    display: none;
}
/*********第二个浅色框***************/
#right .content .padding2{
    border:1px solid #e2dfdf;
    margin-top:50px;
    padding: 0px 0px 20px 20px;
}
#right .content .padding2 h3{
display: inline-block;
  line-height: 60px;
  border-bottom: 1px solid #006699;
  font-family: PingFangSC-Regular;
  font-weight: 700;
  text-align: center;
  font-size: 28px;
  color: #006699;
  margin: 40px 0px 0px 15px;
}
#right .content .padding2 .picture{
    display: flex;
    flex: 1;
    flex-direction: column;
}
#right .content .padding2 .picture p{
    font-size: 22px;
    margin-left: 50px;
}
#right .content .padding2 .picture img{
    width: 90px;
}
#right .content .padding2 .picture>div{
    display: flex;
    flex-direction: row;
    padding-top: 50px;
    justify-content: space-between;
}
#right .content .padding2 .picture .img{
    padding-left: 10%;
    display: flex;    
    width: 50%;
    flex-direction: row;
    align-items: center;
}
#right .content .padding2 .picture .money{
    display: flex;
    width: 50%;
    align-items: center;
}
#right .content .padding2 .evaluate{
    margin-top: 15px;
    padding-left: 5%;
    font-family: PingFangSC-Regular;
}
#right .content .padding2 .evaluate p{
    font-size: 18px;
    line-height: 40px;
}
#right .content .padding2 .evaluate ul li{
    line-height: 30px;
    font-size: 15px;
}
#right .content .padding2 .evaluate ul li ul{
    padding-left: 10px;
}
/*********第二个浅色框***************/
/*********第三个浅色框***************/
#right .content .padding3{
  border:1px solid #e2dfdf;
  margin-top:50px;
}
#right .content .padding3 h3{
    display: inline-block;
  line-height: 60px;
  border-bottom: 1px solid #006699;
  font-family: PingFangSC-Regular;
  font-weight: 700;
  text-align: center;
  font-size: 28px;
  color: #006699;
  margin: 30px 0px 10px 35px;
}
#right .content .padding3 .box{
    padding: 3%;
    padding-right: 0;
}
#right .content .padding3 ul li{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
#right .content .padding3 ul li h5{
    font-size: 28px;
    line-height: 60px;
    text-align: center;
    width: 15%;
    height: 60px;
    background: #006699;
    color: aliceblue;
}
#right .content .padding3 ul li .line{
    width: 85%;
    height: 30px;
    border-bottom: 2px solid #006699;
}
#right .content .padding3 .box div{
    padding:2%;
}
#right .content .padding3 .box div p{
  line-height: 50px;
  font-size: 22px;
}
#right .content .padding3 .box div .bord{
    font-weight: bold;
}
/*********第三个浅色框***************/
/*********第四个浅色框***************/
#right .content .padding4{
    border:1px solid #e2dfdf;
    margin-top: 50px;
}
#right .content .padding4 h3{
display: inline-block;
  line-height: 60px;
  border-bottom: 1px solid #006699;
  font-family: PingFangSC-Regular;
  font-weight: 700;
  text-align: center;
  font-size: 28px;
  color: #006699;
  margin: 30px 0px 20px 35px;
}
#right .content .padding4 .show>div{
  width: 60%;
  margin-left: 15%;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
/* 后面两个作品展示的宽度 */
#right .content .padding4 .show img{
    width: 48%;
}
/* 第一个作品展示的宽度 */
#right .content .padding4 .show>div img:first-of-type{
    width: 100%;
}
/*********第四个浅色框***************/
/*********第五个浅色框***************/
#right .content .padding5{
    border:1px solid #e2dfdf;
    margin-top:50px;
    padding-bottom: 80px;
}
#right .content .padding5 h3{
  display: inline-block;
  line-height: 60px;
  border-bottom: 1px solid #006699;
  font-family: PingFangSC-Regular;
  font-weight: 700;
  text-align: center;
  font-size: 28px;
  color: #006699;
  margin: 30px 0px 50px 35px;
}
#right .content .padding5 ul{
    width: 80%;
    border: 1px solid black;
    margin: 0px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
#right .content .padding5 ul li{
    padding: 1%;
    width: 50%;
    border: 1px solid black;
}
#right .content .padding5 ul li img{
    width: 100%;
    max-height: 200px;
}
/*********第五个浅色框***************/

/*********************content*************************/
/************************************右边样式********************************************/
.navBarWrap {
    position:fixed;
    top:40px;
    z-index: 999;
}
@media screen and (max-width: 1440px) {
     #content{
        width: 100%;
    }
    #right .middle img{
    float: left;
    margin-left: 20px;
    margin-top: 45px; 
    height: 340px;   
}
#right .middle ul{
    margin-left: 20px;
    float: left;
    margin-top:12px;
}
#right .middle ul li{
    padding:40px 0px 0px 0px;
    height: 75px;
    font-weight: 400;
    font-size: 20px;
}
}
@media screen and (max-width:1050px){
   
   #right .middle{
        display: none;
    } 
   #right .middleHidden{
        display: none;
    }
    .education .imgs p{
    font-size: 50px;
    left: 52%;
    top: 40%;   
}
.education .imgs h4{
    font-size: 40px;
    left: 58%;
    top: 60%;
} 
}
@media screen and (max-width:900px){

    .education .imgs img{
        height: 300px;
    }
    .education .imgs p{
    font-size: 48px;
    left: 52%;
    top: 40%;   
}
.education .imgs h4{
    font-size: 36px;
    left: 58%;
    top: 60%;
} 
.education .title {
    margin-top: 20px;
    padding-left: 4%;
    font-size: 20px;
}
#right .content .padding{
    border:1px solid #e2dfdf;
    margin-top:30px;
    padding: 0px 0px 2% 2%;
}
#right .content .padding h3{
    line-height: 40px;
    font-size: 26px;
}
#right .content .padding h4{
    font-size: 24px;
    padding: 1.5%;
}
#right .content .padding p{
    font-size: 21px;
    padding-right: 20px;
    padding-left: 20px;
}
#right .content .padding .job ul li{
    font-size: 20px;
    padding-left: 6%;
}
/*********第二个浅色框***************/
#right .content .padding2{
    margin-top:40px;
    padding: 0px 0px 20px 20px;
}
#right .content .padding2 h3{
  line-height: 50px;
  font-size: 26px;
  margin: 30px 0px 0px 15px;
}
#right .content .padding2 .picture p{
    font-size: 22px;
}
#right .content .padding2 .picture img{
    width: 90px;
}
#right .content .padding2 .picture>div{
    display: flex;
    flex-direction: row;
    padding-top: 50px;
    justify-content: space-between;
}
#right .content .padding2 .picture .img{
    padding-left: 10%;
    display: flex;    
    width: 50%;
    flex-direction: row;
    align-items: center;
}
#right .content .padding2 .picture .money{
    display: flex;
    width: 50%;
    align-items: center;
}
#right .content .padding2 .evaluate{
    margin-top: 15px;
    padding-left: 5%;
    font-family: PingFangSC-Regular;
}
#right .content .padding2 .evaluate p{
    font-size: 18px;
    line-height: 40px;
}
#right .content .padding2 .evaluate ul li{
    line-height: 30px;
    font-size: 15px;
}
#right .content .padding2 .evaluate ul li ul{
    padding-left: 10px;
}
/*********第二个浅色框***************/
/*********第三个浅色框***************/
#right .content .padding3{
  margin-top:40px;
}
#right .content .padding3 h3{
  line-height: 50px;
  font-size: 26px;
  margin: 30px 0px 0px 30px;
}
#right .content .padding3 ul li h5{
    font-size: 26px;
    line-height: 50px;
    text-align: center;
    width: 15%;
    height: 50px;
}
#right .content .padding3 ul li .line{
    width: 85%;
    height: 30px;
    border-bottom: 2px solid #006699;
}
#right .content .padding3 .box div p{
  line-height: 50px;
  font-size: 20px;
}
/*********第三个浅色框***************/
/*********第四个浅色框***************/
#right .content .padding4{
    margin-top: 40px;
}
#right .content .padding4 h3{
  line-height: 50px;
  font-size: 26px;
  color: #006699;
  margin: 20px 0px 30px 35px;
}
/*********第四个浅色框***************/
/*********第五个浅色框***************/
#right .content .padding5{
    margin-top:40px;
    padding-bottom: 60px;
}
#right .content .padding5 h3{
  line-height: 50px;
  font-size: 26px;
  margin: 20px 0px 40px 35px;
}
#right .content .padding5 ul{
    width: 80%;
    border: 1px solid black;
    margin: 0px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
#right .content .padding5 ul li{
    padding: 1%;
    width: 50%;
    border: 1px solid black;
}
#right .content .padding5 ul li img{
    width: 100%;
    max-height: 200px;
}
}
@media screen and (max-width:800px){
    #content{
        width: 100%;
        padding-left: 2%;
    }
    .education .imgs img{
        height: 270px;
    }
    .education .imgs p{
    font-size: 40px;
    left: 48%;
    top: 40%;   
}
.education .imgs h4{
    font-size: 30px;
    left: 55%;
    top: 60%;
} 
}
@media screen and (max-width:659px){
    .education .imgs img{
        height: 200px;
    }
    .education .imgs p{
    font-size: 35px;
    left: 46%;
    top: 40%;   
}
.education .imgs h4{
    font-size: 24px;
    left: 50%;
    top: 62%;
} 
#right .content .padding{
    margin-top:30px;
    padding: 0px 0px 2% 2%;
}
#right .content .padding h3{
    line-height: 40px;
    font-size: 24px;
    margin-top: 15px;
}
#right .content .padding h4{
    font-size: 22px;
    padding: 1.5%;
}
#right .content .padding p{
    font-size: 18px;
    padding-right: 20px;
    padding-left: 20px;
}
#right .content .padding .job ul li{
    font-size: 16px;
    padding-left: 6%;
}
/*********第二个浅色框***************/
#right .content .padding2{
    margin-top:30px;
    padding: 0px 0px 20px 20px;
}
#right .content .padding2 h3{
  line-height: 40px;
  font-size: 24px;
  margin: 15px 0px 0px 15px;
}
#right .content .padding2 .picture p{
    font-size: 20px;
    margin-left: 20px;
}
#right .content .padding2 .picture img{
    width: 80px;
}
#right .content .padding2 .picture>div{
    padding-top: 30px;
}
#right .content .padding2 .picture .img{
    padding-left: 5%;
    width: 50%;
}
#right .content .padding2 .evaluate{
    margin-top: 15px;
    padding-left: 5%;
}
/*********第二个浅色框***************/
/*********第三个浅色框***************/
#right .content .padding3{
  margin-top:30px;
}
#right .content .padding3 h3{
  line-height: 40px;
  font-size: 24px;
  margin: 15px 0px 0px 20px;
}
#right .content .padding3 ul li h5{
    font-size: 22px;
    line-height: 46px;
    width: 18%;
    height: 46px;
}
#right .content .padding3 ul li .line{
    width: 82%;
    height: 23px;
}
#right .content .padding3 .box div p{
  line-height: 46px;
  font-size: 18px;
}
/*********第三个浅色框***************/
/*********第四个浅色框***************/
#right .content .padding4{
    margin-top: 30px;
}
#right .content .padding4 h3{
  line-height: 40px;
  font-size: 24px;
  margin: 20px 0px 30px 35px;
}
#right .content .padding4 .show img{
    height:80%;
}
/*********第四个浅色框***************/
/*********第五个浅色框***************/
#right .content .padding5{
    margin-top:30px;
    padding-bottom: 50px;
}
#right .content .padding5 h3{
  width: 220px;
  line-height: 50px;
  font-size: 26px;
  margin: 20px 0px 40px 35px;
}
#right .content .padding5 ul{
    width: 80%;
    border: 1px solid black;
    margin: 0px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
#right .content .padding5 ul li{
    padding: 1%;
    width: 50%;
    border: 1px solid black;
}
#right .content .padding5 ul li img{
    width: 100%;
    max-height: 200px;
}
} 
@media screen and (max-width: 539px) {
    #right .content .padding .job ul li{
    font-size: 15px;
    padding-left: 5%;
}
}  
@media screen and (max-width:500px){
    .education .imgs img{
        height: 160px;
    }
    #content .title p{
        font-size: 24px;
        width: auto;
        display: inline-block;
        margin-top: 0px;
    }
    .education .imgs p{
    font-size: 26px;
    left: 46%;
    top: 40%;   
}
.education .imgs h4{
    font-size: 16px;
    left: 45%;
    top: 66%;
} 
#right .content .padding{
    margin-top:15px;
    padding: 0px 0px 2% 2%;
    padding-bottom: 50px
}
#right .content .padding h3{
    line-height: 30px;
    font-size: 18px;
    margin-top: 15px;
}
#right .content .padding h4{
    font-size: 16px;
    padding: 1% 0;
    margin: 10px 0;
}
#right .content .padding p{
    font-size: 14px;
    padding-right: 10px;
    padding-left: 10px;
    line-height: 40px;
}
#right .content .padding .job ul li{
    font-size: 13px;
    padding-left: 6%;
    padding-right: 15px;
}
#right .content .padding .job ul li span{
    margin-right: 0;
}
#right .content .padding .job :first-child ul li span{
    margin-right: 15px;
}
/*********第二个浅色框***************/
#right .content .padding2{
    margin-top:20px;
    padding: 0px 0px 20px 20px;
}
#right .content .padding2 h3{
  line-height: 40px;
  font-size: 18px;
  margin: 15px 0px 0px 15px;
}
#right .content .padding2 .picture p{
    font-size: 16px;
    margin-left: 22px;
}
#right .content .padding2 .picture img{
    width: 60px;
}
#right .content .padding2 .picture>div{
    padding-top: 30px;
}
#right .content .padding2 .picture .img{
    padding-left: 5%;
    width: 50%;
}
#right .content .padding2 .evaluate{
    margin-top: 15px;
    padding-left: 5%;
}
#right .content .padding2 .evaluate p{
    font-size: 14px;
    line-height: 40px;
}
#right .content .padding2 .evaluate ul li{
    line-height: 30px;
    font-size: 13px;
}
#right .content .padding2 .evaluate ul li ul{
    padding-left: 10px;
}
/*********第二个浅色框***************/
/*********第三个浅色框***************/

#right .content .padding3 h3{
  line-height: 40px;
  font-size: 18px;
  margin: 15px 0px 0px 20px;
}
#right .content .padding3 ul li h5{
    font-size: 16px;
    line-height: 40px;
    height: 40px;
}
#right .content .padding3 ul li .line{
    height: 20px;
}
#right .content .padding3 .box div p{
  line-height: 40px;
  font-size: 14px;
}
/*********第三个浅色框***************/
/*********第四个浅色框***************/
#right .content .padding4{
    margin-top: 30px;
    padding-bottom: 20px;
}
#right .content .padding4 h3{
  font-size: 18px;
}
#right .content .padding4 .show img{
    height:80%;
}
/*********第四个浅色框***************/
/*********第五个浅色框***************/
#right .content .padding5{
    margin-top:20px;
    padding-bottom: 40px;
}
#right .content .padding5 h3{
    width: auto;
  line-height: 40px;
  font-size: 18px;
  margin: 20px 0px 30px 35px;
}
#right .content .padding5 ul li{
    padding: 1%;
    width: 50%;
    border: 1px solid black;
}
#right .content .padding5 ul li img{
    width: 100%;
    max-height: 200px;
}
}
</style>