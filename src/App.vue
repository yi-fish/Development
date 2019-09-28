 <template>
   <div id="app" style="min-width: 966px;">
       <div class="topNav">
         <div id="nav" style="padding: 0px;background: #FFFFFF;" role="navigation">
           <img src="./components/img/logo.png" alt="">
           <router-link to="/">首页</router-link>
           <router-link to="/serve">服务</router-link>
           <router-link to="/teach">人才培养</router-link>
           <router-link to="/news">新闻</router-link>
           <router-link to="/about" style="margin-right: 121px;">关于我们</router-link>
         </div>
         <router-view/>
       </div>
   </div>
 </template>

<style lang="stylus">
// @media only screen and (max-width: 479px)
//   .topNav {
//     min-width 375px !important ;
// }
// @media only screen and (max-width: 479px)
//   .nav {
//     width: 500px !important ;
// }
// @media only screen and (max-width: 479px)
//   .nav a{
//     width: 6.9% !important ;
// }
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  // width 100%
  min-width: 966px;
  //width 1440px
  height 80px
  padding 30px
  line-height 80px
  display flex
  flex-direction row
  justify-content flex-end
  // position relative
  // right 121px
  a
    font-family PingFangSC-Regular
    font-size 18px
    color #4A4A4A
    letter-spacing: 0
    text-decoration none
    // margin-right 60px
    min-width 100px
    height 80px
    text-align center
    &.router-link-exact-active
      color #FFFFFF
      // margin-right 60px
      min-width 100px
      height 80px
      text-align center
      background-image: linear-gradient(-90deg, #30D5FF 0%, #749CF7 100%)
#nav img{
  width 161px
  height 36px
  margin 15px auto 29px 119px
  margin-left 120px
}
.topNav{
    min-width: 966px;
    // position:absolute;
    // left:0px;
    top 0px
    height 100px
    // width 1440px
    // width 100%
    text-align center;
    margin 0 auto
}
#navtext{
    #u22 {
    border-width:0px;
    position:absolute;
    left:400px;
    top:30px;
    width:41px;
    height:24px;
    font-family:'Arial Normal', 'Arial';
    font-weight:400;
    font-style:normal;
    font-size:20px;
    color:#666666;
  }
}
</style>
