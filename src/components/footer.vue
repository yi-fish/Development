<template>
    <div class="footer">
        <div id="footContent">
            <div class="top">
                <div class="tit">
                    <h4>联系我们</h4>
                    <span>CONTACT US</span>
                </div>
                <div class="tit1">
                    <div class="line">
                        <div class="weixin">
                            <img :src="img1" alt="微信二维码">
                            <p>官方微信</p>
                        </div>
                        <div class="contact">
                            <p class="text-muted">{{webSite}}</p>
                            <p class="text-muted">电话：{{tel}}</p>
                            <p class="text-muted">合作邮箱：{{email}}</p>
                            <p class="text-muted">地址：{{address}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <h4>Copyright @ 芝麻开花科技有限公司  保留所有权利  京ICP备13040720号-8</h4>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import img1 from "./img/weixin.png";
export default {
    name: 'HomeFooter',
    data(){
        return{
            img1:img1,
            webSite:"网址：http：//www.zhimakahua.com",
            tel:"400-0018-318",
            email:"123456789@163.com",
            address:"陕西省西安市曲江新区雁塔南路1201号金辉环球中心B座1209室"
        }    
    }
}
</script>

<style scoped>
*{
    margin: 0px;
    padding: 0px;
    text-align: left;
}
.footer{
    width: 100%;
    height: 480px;
    background: #F6F6F6;
    color: aliceblue;
}
#footContent{
    width: 1440px;
    margin: 0 auto;
}
@media screen and (max-width:1440px){
 #footContent{
    width: 100%;
}   
}
.footer .top{
    color: black;    
}
.footer .top .tit{
    height: 158px;
    padding-top: 60px;
    padding-left: 8.3%;
}
.footer .top div h4{
    font-family: PingFangSC-Regular;
    font-size: 28px;
    height: 40px;
    color: #4A4A4A;
    letter-spacing: 0;
    margin-bottom: 6px;
}
.footer .top div span{
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #999999;
    letter-spacing: 0.2px;
    line-height: 25px;
}
.footer .top .tit1{
    display: flex;
    flex-direction: row;
    height: 233px;
    padding-left: 8.3%;
}
.footer .top .tit1 .line{
    padding-top: 43px;
    border-top: 1px solid #E4E4E4;
    border-bottom: 1px solid #E4E4E4;
    width: 84%;
}
.footer .top .tit1 .contact{
    height: 118px;
    padding-left:5%;
    display: flex;
    flex-direction: column;
    flex: 1;
}
.footer .top .tit1 div p{
    font-family: PingFangSC-Regular;
    font-size: 16px;
    flex: 1;
    color: #999999;
    letter-spacing: 0;
}
.footer .top .tit1 .weixin{
    float: left;
    width: 118px;
    display: flex;
    flex-direction: column;

}
.footer .top .tit1 .weixin img{
    width: 118px;
    height: 118px;
    margin-bottom: 10px;
}
.footer .top .tit1 .weixin p{
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #999999;
    letter-spacing: 0;
    height: 22px;
    line-height: 22px;
    text-align: center;
}
.footer .top .tit1 .weixin img{
    float: left;
    width: 118px;
    height: 118px;
}
.footer .top h4{
    color: black;
}
.footer .bottom{
    padding-left: 8.3%;
    height: 88px;
    display: flex;
    align-items: center;
    color: black;
}
.footer .bottom h4{
    font-size: 16px;
    color: #999999;
}
</style>
