<template>
  <div class="edutation">
    <div class="container-fluid col-md-12">
        <div id="right">
          <img src="./images/人才培养.png" alt="芝麻开花" width="1440px" height="400px">
          <div  class="title"> <p>人才培养</p></div>
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
          <div class="content col-md-8">
            <div class="padding" id="padding">
                <h3>芝麻开花实习生培训介绍</h3>
                <div>
                    <h4>1、公司介绍</h4>
                    <p>
                        西安芝麻开花网络科技有限公司（芝麻开发平台西安运营公司）成立于2016年，
                        是一家集开发、销售、服务、培训为一体的高科技型企业，多年来专注于互联网技
                        术开发和数据服务，为创业企业提供互联网技术支持，为传统企业互联网转型提供
                        专业的全程解决方案，为政府事业单位提供信息化策略支持，为硬件技术企业提供
                        互联网技术结合方案，采用全职+兼职+实习的管理模式。
                    </p>
                </div>
                <div>
                    <h4>2. 实习环境</h4>
                    <p>
                        办公地址位于西安曲江新区顶级写字楼，零食冷饮免费吃，饮料无限畅饮，
                        篮球及户外活动小组等业余生活丰富。
                    </p>
                </div>
                <div>
                    <h4>3.参与真实项目</h4>
                    <p>
                        培训完成后，如通过考核，我公司会安排学员参与实际项目。
                    </p>
                </div>
                <div>
                    <h4>4.发放工资</h4>
                    <p>
                        如通过考核并已参加我公司实际项目，每月会以个人综合能力、
                        工作态度以及贡献等方面进行考核，优异者的薪资将上不封顶。
                    </p>
                </div>             
                <h3>实习生招收岗位&招收对象</h3> 
                <div class="job">
                    <h4>1、招收岗位</h4>
                    <ul>
                        <li v-for="(job,index) in jobs" :key="index"><span class="glyphicon glyphicon-play-circle"></span> {{job}}</li>
                    </ul>
                </div>
                <div class="enrolment">
                    <h4>2、招收对象</h4>
                    <ul>
                        <li v-for="(enrolment,index) in enrolments" :key="index"><span class="glyphicon glyphicon-play-circle"></span>{{enrolment}}</li>
                    </ul>
                </div>
                <div class="apply">
                    <h4> 3. 申请方式</h4>
                    <ul>
                        <li>有意者请发简历至邮箱：qijianying@xazhima.com</li>
                    </ul>
                </div>
            </div>
            <div class="padding2" id="padding2">
                <h3>薪资待遇</h3>
                <div class="picture">
                <img src=".//images/treatment.png" alt="薪资待遇">
                <ul>
                    <li>200元/8小时</li>
                    <li>140元/8小时</li>
                    <li>上不封顶</li>
                </ul>
                </div>
                <h3>考核标准</h3>
                <div class='evaluate'>
                    <p>
                        一、考核每月进行一次，考核结果由各部门负责人审核；
                    </p>
                    <p>
                    二、考核分为好评与差评:
                    <ul>
                        <li>（1）好评标准：工作态度积极；</li>
                        <li>
                            （2）差评标准：
                            <ul>
                                <li>项目因内部原因出现延期情况；</li>
                                <li>项目交付测试，测试主功能流程测不通；</li>
                                <li>客户对项目进行投诉;</li>
                                <li>所有全职人员对实习生个人的投诉；</li>
                                <li>每月如有一个好评加一个差评情况，视为差评；</li>
                                <li>出现以上的情况，将对技术开发小组成员进行差评。</li>
                            </ul>
                        </li>
                        <li>（3）对于好评人员，有升级奖励制度；差评的人员，将做角色降级处理。</li>
                    </ul>
                    </p>
                    <p>
                    三、实行考核目的：
                    <ul>
                        <li>为了规范开发人员的行为，提高工作质量及工作效率。</li>
                    </ul>
                    </p>
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
                <img src=".//images/show1.png" alt="实习生优秀项目展示" width="773px" height="375px">
                <img src=".//images/show2.png" alt="实习生优秀项目展示" width="330px" height="540px" class="showMargin">
                <img src=".//images/show3.png" alt="实习生优秀项目展示" width="330px" height="540px">
              </div>
            </div>
            <div class="padding5" id="padding5">
                <h3>优秀学员毕业去向</h3>
                <ul>
                    <li v-for="(goToArr,index) in goToArrs" :key="index"><img :src="goToArr" alt="优秀学员去向"></li>
                </ul>
            </div>
          <home-footer style="position: relative; left: -400px;top:20px"></home-footer> </div>
        </div>
    </div>
  
  </div>
</template>

 
<script>
import img1 from ".//images/goto_1.png";
import img2 from ".//images/goto_2.png";
import img3 from ".//images/goto_3.png";
import img4 from ".//images/goto_4.png";

import HomeFooter from '../components/footer.vue'
export default {
  name: 'edutation',
    components: {
    HomeFooter
  },
  data(){
    return{
      "labels":["培训详情简介","考核&薪资","优秀学员寄语","实习生优秀项目展示","实习生毕业去向"],
      "jobs":["产品经理","产品测试","web前端开发","IOS开发","PHP开发","安卓开发"],
      "enrolments":["具有良好的计算机基础，踏实好学",
                    "善于沟通及团队协作，工作认真细致，乐于分享",
                    "有无经验均可，服从公司安排，其他技能我司提供岗位培训"],
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
      "goToArrs":[img1,img2,img3,img4],
      navBarFixed :"false"
    }  
  },
   mounted () {
        // 事件监听滚动条
      window.addEventListener('scroll', this.watchScroll)
  },
  methods: {
    watchScroll () {
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          //  当滚动超过400时，实现吸顶效果
          if (scrollTop > 580) {
            this.navBarFixed = true
          } else {
            this.navBarFixed = false
          }
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
/************************************整体样式********************************************
/************************************右边样式********************************************/
*{
    padding: 0px;
    margin: 0px;
}
#right{
    width: 1440px;
    /* position: relative; */
    /* margin-top: 17px; */
}
/*********头部*********/
#right .title {
    font-family: 'Arial Normal', 'Arial';
    width: 100%;
    margin-top: 30px;
    padding-left: 50px;
    font-size: 22px;
    border-bottom: 1px solid #333;
}
#right .title p{
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
#right .content .padding{
    border:1px solid #e2dfdf;
    margin-top:50px;
    padding: 0px 0px 20px 20px;
    width: 1020px;
}
#right .content .padding h3{
    width: 340px;
    line-height: 60px;
    border-bottom: 1px solid #006699;
    font-family: PingFangSC-Regular;
    font-weight: 700;
    text-align: center;
    font-size: 28px;
    color: #006699;
    margin: 40px 0px 0px 15px;
}
#right .content .padding h4{
    font-family: PingFangSC-Regular;
    font-weight: 700;
    font-size: 26px;
    color: #000000;
    text-indent: 2em;
    padding: 15px 0px 15px 15px;
}
#right .content .padding p{
    font-size: 22px;
    text-indent: 2em;
    padding-right: 20px;
    padding-left: 20px;
    line-height: 50px;
}
#right .content .padding .job{
    height: 200px;
}
#right .content .padding .enrolment{
    height: 200px;
}
#right .content .padding .job ul li{
    float: left;
    font-size: 22px;
    width: 200px;
    height: 50px;
    margin-left: 80px;
    margin-right: 170px;
    line-height: 50px;
    text-align: left;
}
#right .content .padding span{
    padding-right: 40px;
}
#right .content .padding .enrolment ul li{
    float: left;
    font-size: 22px;
    height: 50px;
    margin-left: 80px;
    text-align: left;
    line-height: 50px;
}
#right .content .padding .apply ul li{
    font-size: 22px;
    height: 50px;
    margin-left: 80px;
    text-align: left;
    line-height: 60px;
}
/*********第二个浅色框***************/
#right .content .padding2{
    width: 1020px;
    border:1px solid #e2dfdf;
    margin-top:50px;
    padding: 0px 0px 20px 20px;
}
#right .content .padding2 h3{
  width: 120px;
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
    margin-left: 200px;
    margin-top: 60px;
    height: 216px;
    margin-bottom: 50px;
}
#right .content .padding2 .picture img{
    float: left;
    width: 215px;
    height: 300px;
    margin-bottom: 50px;
}
#right .content .padding2 .picture ul{
    font-size: 24px;
    font-weight: bold;
    float: left;
    margin-left: 200px;
}
#right .content .padding2 .picture ul li{
  height: 100px;
  line-height: 100px;
}
#right .content .padding2 p{
    text-indent: 2em;
    margin: 20px 0px 20px 0px;
    font-size: 22px;
    line-height: 40px;
}
#right .content .padding2 .evaluate ul li{
    margin-left: 20px;
}
/*********第二个浅色框***************/
/*********第三个浅色框***************/
#right .content .padding3{
  width: 1020px;
  border:1px solid #e2dfdf;
  margin-top:50px;
  padding-bottom: 50px;
  overflow: hidden;
}
#right .content .padding3 h3{
  width: 170px;
  line-height: 60px;
  border-bottom: 1px solid #006699;
  font-family: PingFangSC-Regular;
  font-weight: 700;
  text-align: center;
  font-size: 28px;
  color: #006699;
  margin: 30px 0px 20px 35px;
}
#right .content .padding3 ul li h5{
    float: left;
    font-size: 28px;
    line-height: 60px;
    text-align: center;
    margin: 25px 0px 0px 50px;
    width: 15%;
    height: 60px;
    background: #006699;
    color: aliceblue;
}
#right .content .padding3 ul li .line{
    float: left;
    display: block;
    width: 80%;
    margin-top: 25px;
    height: 30px;
    border-bottom: 2px solid #006699;
}
#right .content .padding3 .box div{
  width: 100%;
  float: left;
  padding: 30px 30px 0px 60px;
}
#right .content .padding3 .box div p{
  line-height: 40px;
  font-size: 22px;
  text-indent: 0;
}
#right .content .padding3 .box div .bord{
    font-weight: bold;
    width: auto;
    padding: 0px;
}
/*********第三个浅色框***************/
/*********第四个浅色框***************/
#right .content .padding4{
    width: 1020px;
    border:1px solid #e2dfdf;
    margin-top: 50px;
}
#right .content .padding4 h3{
  width: 260px;
  line-height: 60px;
  border-bottom: 1px solid #006699;
  font-family: PingFangSC-Regular;
  font-weight: 700;
  text-align: center;
  font-size: 28px;
  color: #006699;
  margin: 30px 0px 20px 35px;
}
#right .content .padding4 .show{
  width: 76%;
  margin-left: 12%;
}
#right .content .padding4 .show img{
  margin-bottom: 35px;
}
#right .content .padding4 .show .showMargin{
  margin-right: 113px;
}
/*********第四个浅色框***************/
/*********第五个浅色框***************/
#right .content .padding5{
    width: 1020px;
    border:1px solid #e2dfdf;
    margin-top:50px;
    padding-bottom: 80px;
}
#right .content .padding5 h3{
  width: 260px;
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
    height: 200px;
    margin: 0px auto;
}
#right .content .padding5 ul li{
    width: 50%;
    float: left;
    /* border: 1px solid black; */
    height: 120px;
}
#right .content .padding5 ul li img{
    width: 405px;
    height: 100px;
}
/*********第五个浅色框***************/

/*********************content*************************/
/************************************右边样式********************************************/
.navBarWrap {
    position:fixed;
    top:-40px;
    z-index:999;
  }
.content{
    position: absolute;
    left:400px;
    display: flex;
    flex-direction: column;
}
/* .container-fluid{
    height: 6590px;
} */
</style>