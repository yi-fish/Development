<template>
    <div class="footer">
        <div class="top">
            <div>
                <h4>联系我们</h4>
                <span>CONTACT US</span>
            </div>
            <div class="tit">
                <div class="weixin">
                    <img src=".\img\weixin.png" alt="微信二维码">
                    <p>官方微信</p>
                </div>
                <div class="contact">
                    <p class="text-muted">网址：http://www.zhimakaihua.com</p>
                    <p class="text-muted">电话：400-0018-318</p>
                    <p class="text-muted">合作邮箱：123456789@163.com</p>
                    <p class="text-muted">地址：陕西省西安市曲江新区雁塔南路1201号金辉环球中心B座1209室</p>
                </div>
            </div>
        </div>
        <div class="bottom">
            <h4>Copyright @ 芝麻开花科技有限公司  保留所有权利  京ICP备13040720号-8</h4>
        </div>
    </div>
</template>

<script>
export default{
    name:'HomeFooter'
}
</script> 


<style scoped>
*{
    margin: 0px;
    padding: 0px;
}
.footer{                    
    width: 1440px;
    background: #F6F6F6;
    /* height: 368px; */
    color: aliceblue;
   /* position: absolute;
    bottom:0px;  */
    padding-top: 112px;
}
.footer .top{
    height: 305px;
    /* background:rgba(40,40,40,1) */
    color: black;
}
.footer .top div h4{
    margin-left: 120px;
    /* margin-top: 112px; */
    font-family: PingFangSC-Regular;
    font-size: 28px;
    color: #4A4A4A;
    letter-spacing: 0;
}
.footer .top div span{
    margin-left: 120px;
    margin-top: 112px;
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #999999;
    letter-spacing: 0.2px;
    height: 22px;
    width: 140px;
}
.footer .top .tit{
    width: 1200px;
    height: 233px;
    border-top: 1px solid #E4E4E4;
    border-bottom: 1px solid #E4E4E4;
    margin-left: 122px;
    margin-top: 30px;
}
.footer .top .tit .contact{
    float: left;
    width: 1023px;
    height: 120px;
    margin-top: 42px;
    margin-left: 40px;
}
.footer .top .tit div p{
    margin: 0px;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #999999;
    letter-spacing: 0;
    line-height: 30px;
}
.footer .top .tit .weixin{
    float: left;
    width: 118px;
    height: 118px;
    margin-top: 42px;
}
.footer .top .tit .weixin p{
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #999999;
    letter-spacing: 0;
    line-height: 22px;
    text-align: center;
}
.footer .top .tit .weixin img{
    float: left;
    width: 118px;
    height: 118px;
}
.footer .top h4{
    /* color: white; */
    color: black;
}
.footer .bottom{
    height: 81px;
    /* background: black; */
    /* color: white; */
    color: black;
   
}
.footer .bottom h4{
    padding: 0px;
    margin: 0px;
    width: 1023px;
    height: 30px;
    margin-left: 120px;
    margin-top: 23px;
    font-size: 16px;
    color: #999999;
    line-height: 30px;
    /* text-align: center; */
    /* line-height: 50px; */
    /* font-size: 20px; */
}

</style>