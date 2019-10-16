 <template>
  <div id="app">
    <div class="topNav">
      <div id="nav" role="navigation">
        <img src="./components/img/logo.png" alt />
        <div id="nav-a">
          <router-link to="/">首页</router-link>
          <router-link to="/serve">服务</router-link>
          <router-link to="/teach">人才培养</router-link>
          <router-link to="/news">新闻</router-link>
          <router-link to="/about">关于我们</router-link>
        </div>
      </div>
      <router-view />
    </div>
  </div>
</template>

<style lang="stylus">
@media only screen and (max-width: 479px) {
  #nav {
    width: 83.3% !important;
    margin 0 auto !important;
    height: 40px !important;
  }

  #nav img {
    margin-top: 1px !important;
    margin-bottom: 2px !important;
  }

  #nav-a {
    height: 40px !important;
    line-height: 40px !important;
  }

  #nav-a a {
    width: 38px !important;
    font-size: 12px;
    height: 40px !important;
    overflow: hidden;

    &.router-link-exact-active {
      width: 38px !important;
    }
  }
}

@media only screen and (max-width: 1440px) {
  #nav {
    width: 83.3% !important;
    padding:  auto 8.3% !important;
  }
}
@media only screen and (min-width: 1440px) {
  #nav {
    width: 1200px !important;
    margin: 0 auto !important;
  }
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 0px;
  background: #FFFFFF;
  display: flex;
  justify-content: space-between;
  margin: 0 auto !important;
  position: fixed;
  top: 0px;
  z-index: 999;
}

#nav-a {
  height: 80px;
  line-height: 80px;
  display: flex;

  a {
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #4A4A4A;
    letter-spacing: 0;
    text-decoration: none;
    width: 100px;
    height: 80px;
    text-align: center;

    &.router-link-exact-active {
      color: #FFFFFF;
      width: 100px;
      height: 80px;
      text-align: center;
      background-image: linear-gradient(-90deg, #30D5FF 0%, #749CF7 100%);
    }
  }
}

#nav img {
  width: 161px;
  height: 36px;
  margin-top: 15px;
  margin-bottom: 29px;
}
</style>
