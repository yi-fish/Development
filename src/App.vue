 <template>
  <div id="app">
    <div class="topNav">
      <div id="nav" role="navigation">
        <div id="home_tab" class="liubai">
          <img src="./assets/logo.png" alt />
          <div id="nav-a">
            <router-link to="/">首页</router-link>
            <router-link to="/serve">服务</router-link>
            <router-link to="/teach">人才培养</router-link>
            <router-link to="/news">新闻</router-link>
            <router-link to="/about">关于我们</router-link>
          </div>
          <img
            src=".\assets\menu.png"
            alt="切换目录"
            @click="aaa = !aaa"
            class="phonemenu"
            style="width:32px !important;height:18px !important;"
          />
          <div type="button" :class="{ showmenu: aaa, switching: true }" @click="aaa = !aaa">
            <ul>
              <li>
                <router-link to="/">
                  首页
                  <span class="sr-only">切换导航</span>
                </router-link>
              </li>
              <li>
                <router-link to="/serve">
                  服务
                  <span class="icon-bar"></span>
                </router-link>
              </li>
              <li>
                <router-link to="/teach">人才培养</router-link>
              </li>
              <li>
                <router-link to="/news">新闻</router-link>
              </li>
              <li>
                <router-link to="/about">关于我们</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="fenge"></div>
      <router-view />
    </div>
  </div>
</template>

<style lang="stylus">
@media only screen and (max-width: 479px) {
  .fenge {
    height: 40px !important;
    backgroundColor: blue;
  }
  html{
    font-size:5px !important;
  }
  #nav {
    height: 40px !important;
  }

  #nav img {
    width: 80px !important;
    height: 18px !important;
    margin: 10px 31px !important;
    margin-left: 0px !important;
  }

  #nav-a {
    height: 40px !important;
    line-height: 40px !important;
    margin-right: 31px !important;
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

@media only screen and (min-width: 479px) {
  #nav {
    width: 100% !important;
  }
}

@media only screen and (max-width: 1440px) {
  #nav {
    width: 100% !important;
  }

  .liubai {
    width: 83.3% !important;
    margin: auto 8.3% !important;
  }
}

@media only screen and (max-width: 661px) {
  #nav-a {
    display: none !important;
  }

  .phonemenu {
    display: block !important;
  }
}

@media only screen and (min-width: 661px) {
  .switching, .showmenu {
    display: none;
  }
}

.fenge {
  height: 80px;
  backgroundColor: blue;
}

.phonemenu {
  display: none;
  position: absolute;
  right: 0px;
  z-index: 999;
}

.showmenu {
  display: none;
}

.switching {
  position: absolute;
  right: 19px;
  top: 0px;
  background-image: linear-gradient(-90deg, #f5fffd 0%, #1b1b1d00 100%);
  border-radius: 2%;
  padding-top: 40px;
}

.switching li {
  padding-bottom: 6px !important;
}

.liubai {
  width: 1200px;
  margin: 0 auto;
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
  position: fixed;
  top: 0px;
  z-index: 999;
}

#home_tab {
  display: flex;
  // justify-content: space-between;
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
    width: 110px;
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
  margin-right: 515px;
}
</style>

<script>
/* eslint-disable */
// document.getElementsByTagName("html")[0].style.fontSize =
//   document.body.clientWidth / 200 + "px";
export default {
  name: "app",
  data() {
    return {
      aaa: true,
      screenWidth: document.body.clientWidth
    };
  },
};
</script>
