<template>
  <div class="serve">
    <div class="content col-md-12 container-fluid">
        <div class="imgs">
            <p>做你创业路上的</p>
            <h4>技术合伙人</h4>
        </div>
        <div class="first">
            <span>|</span><h3>主营业务</h3>
            <div class="img">
                <p class="work1"><span>技术开发</span>
                    <ul>
                        <li v-for="(work1,index) in works1"  :key="index">{{work1}}</li>
                    </ul>
                </p>
                <p class="work2"><span>设计类</span> 
                    <ul>
                        <li v-for="(work2,index) in works2"  :key="index">{{work2}}</li>
                    </ul>
                </p>
                <p class="work3"><span>其他服务</span> 
                    <ul>
                        <li v-for="(work3,index) in works3"  :key="index">{{work3}}</li>
                    </ul>
                </p>
            </div>
        </div>
        <div class="second">
            <span>|</span><h3>开发流程</h3>
            <img src=".//images/u143.png" alt="开发流程">
        </div>
        <div class="third">
                <div class="methodTitle"><span>|</span><h3>产品解决方案</h3></div>
                    <ul>
                        <li>
                            <img src="./images/u147.png" alt="芝麻开花">
                            <div>
                                <p><span>自动售酒机项目</span>
                                    打破传统高端酒销售模式，利用互联网技术结合线下终端硬件，
                                    建立一套新零售体系；迎合了新的互联网消费理念，让用户在
                                    线下门店能够任意定量购买到大众熟知的高端品牌酒,产品推出
                                    后获得众多年轻消费者的追捧。</p>
                            </div>
                        </li>
                        <li>
                            <img src="./images/u148.png" alt="芝麻开花">
                            <div>
                                <p><span>益车宝是</span>
                                    一家轮胎销售代理公司，在转型之前一直延续代理—经销
                                    —门店的传统销售模式，经营存在诸多问题。经过互联网转型规划，
                                    将所有销售环节打通，线上线下结合，实行新的多样化互联网销售
                                    策略和管理模式，用户量及营业收入获得突破性持续增长。</p>
                            </div>
                        </li>
                        <li>
                            <img src="./images/u149.png" alt="芝麻开花">
                            <div>
                                <p><span>股票自动交易系统</span>
                                    – 将股票买卖的实盘操作完全交给程序自动完成。</p>
                                <p><span>汽车行业互联网舆情监控系统</span>
                                    – 已服务广汽丰田和江淮汽车。</p> 
                                
                            </div>
                        </li>
                    </ul>
        </div>
        
      </div>
      <home-footer style="position: relative; top: 2281px;"></home-footer>
     </div>    
</template>

<script>
import HomeFooter from '../components/footer.vue'


export default {
  name: 'serve',
    components: {
    HomeFooter
  },
  data(){
      return{
          "works1":["网站开发","系统开发","APP开发","微信公众号","微信小程序","手机网站"],
          "works2":["UI设计","网页设计","画册设计","logo设计"],
          "works3":["黑盒测试","需求分析","数据分析","服务器维护","网站维护","系统维护"],
      }
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
    text-align: left;
}
/************************************整体样式********************************************/

/************************************主体样式********************************************/
.serve{
    width: 1440px;
}

/********************first***************************/
.serve .content .imgs{
    width: 100%;
    height: 400px;
    border: 1px solid black;
    /* margin-top: 17px; */
    background: url(.//images//u136.jpg) no-repeat;
    background-size: 100%;
}
.serve .content .imgs p{
    font-size: 45px;
    margin-top: 130px;
    margin-left: 320px;
    color: #999;
}
.serve .content .imgs h4{
    font-size: 58px;
    margin-top: 30px;
    margin-left: 640px;
    color: white;
}
.serve .content .first span{
    margin: 20px 0px 20px 100px;
    float: left;
    font-size: 64px;
    font-weight: 100;
    color: red;
}
.serve .content .first h3{
    font-size: 28px;
    float: left;
    width: 160px;
    height: 60px;
    border: 1px solid black;
    line-height: 60px;
    text-align: center;
    margin: 40px 0px 10px 60px;
}
.serve .content .first .img{
    float: left;
    width: 1440px;
    height: 420px;
    border-top: 1px solid rgb(212, 212, 212);
}
.serve .content .first .img p{
    width: 100%;
    height: 140px;
    line-height: 140px;
    padding: 0px;
    margin: 0px;
    border-bottom: 1px solid rgb(212, 212, 212);
}
.serve .content .first .img p span{
    color: black;
    margin: 0px;
    padding-left: 250px;
    font-size: 30px;
    color:#0aa99a;
    font-weight: 600px;
}
.serve .content .first .img .work1{
    background: url(".//images/work1.png") no-repeat;
    background-position-x: 5%;
    background-position-y: 50%;
    background-size: 8%;
}
.serve .content .first .img .work2{
    background: url(".//images/work2.png") no-repeat;
    background-position-x: 5%;
    background-position-y: 50%;
    background-size: 8%;
}
.serve .content .first .img .work3{
    background: url(".//images/work3.png") no-repeat;
    background-position-x: 5%;
    background-position-y: 50%;
    background-size: 8%;
}
.serve .content .first .img ul{
    height: 140px;
    margin-left: 450px;
}
.serve .content .first .img ul li{
    float: left;
    font-size: 24px;
    margin:0px;
    width: 150px;
}
.serve .content .first .img ul li:hover{
    cursor: pointer;
}
/*********************first*************************/
/*********************second*************************/
.serve .content .second{
    width: 1440px;
}
.serve .content .second span{
    margin: 20px 0px 20px 100px;
    float: left;
    font-size: 64px;
    font-weight: 100;
    color: red;
}
.serve .content .second h3{
    font-size: 28px;
    float: left;
    width: 160px;
    height: 60px;
    border: 1px solid black;
    line-height: 60px;
    text-align: center;
    margin: 40px 0px 10px 60px;
}
.serve .content .second img{
  width: 1440px;
}

/*********************second*************************/
/*********************third*************************/
.serve .content .third{
    width: 1024px;
    /* padding-bottom: 30px; */
}
.serve .content .third .methodTitle{
    width: 1440px;
    height: 90px;
}
.serve .content .third span{
    margin: 20px 0px 20px 100px;
    float: left;
    font-size: 64px;
    font-weight: 100;
    color: red;
}
.serve .content .third h3{
    font-size: 28px;
    float: left;
    width: 180px;
    height: 60px;
    border: 1px solid black;
    line-height: 60px;
    text-align: center;
    margin: 40px 0px 10px 60px;
}
.serve .content .third ul{
  float: left;
  margin-left: 0;
  width: 1440px;
  height: 490px;
}
.serve .content .third ul li{
    float: left;
    width: 400px;
    height: 590px;
    margin-left: 70px;
    border: 1px solid rgb(212, 212, 212);
}
.serve .content .third ul li img{
    width: 400px;
    height: 200px;
}
.serve .content .third ul li div{
    padding: 20px;
}
.serve .content .third ul li div p{
    float: left;
    font-size: 21px;
    line-height: 40px;
    margin-bottom: 50px;
}
.serve .content .third ul li div span{
    float: left;
    font-size: 24px;
    font-weight: bold;
    margin: 0px;
    color: black;
}
/*********************third*************************/
/************************************右边样式********************************************/
/* .container-fluid{
    height: 2750px;
} */
.content{
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 1440px;
}
 
</style>