<template>
  <div id="app">
      <div class="topNav">
        <div id="nav" style="padding: 0px;background: #FFFFFF;    display: flex;flex-direction: row;justify-content: flex-end;
                              position: relative;
                              right: 121px;">
          <img src="components/img/logo.png" alt="">
          <router-link to="/">首页</router-link>
          <router-link to="/teach">人才培养</router-link>
          <router-link to="/news">新闻</router-link>
          <router-link to="/about">关于我们</router-link>
          <router-link to="/serve">服务</router-link>
        </div>
        <router-view/>
      </div>
  </div>
</template>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  //  text-align center
  color #2c3e50

#nav
  width 1440px
  height 80px
  padding 30px
  line-height 80px
  a
    font-weight bold
    color #4A4A4A
    margin-right 60px
    width 100px
    height 80px
    text-align center
    &.router-link-exact-active
      color #FFFFFF
      margin-right 60px
      margin-right 60px
      width 100px
      height 80px
      text-align center
      background-image: linear-gradient(-90deg, #30D5FF 0%, #749CF7 100%);
.topNav{
    position:absolute;
    left:0px;
    top:0px;
    height:100px;
    width: 1200px;

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
