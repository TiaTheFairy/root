<template>
  <div>
    <header-bar :height="headerHeight"></header-bar>

    <div id="content">
      <div class="welcome">
        <div class="title">
          Tia The Fairy Land
        </div>

        <div class="subtitle">
          <p>Fairy Land</p>
          <p>Gaming & Coding</p>
        </div>

        <div class="nav">
          <span class="navItem" @click="jumpTo('about')">关于</span>
          <span class="navItem" @click="jumpTo('about')">游玩</span>
          <span class="navItem" @click="jumpTo('join')">加入</span>
          <span class="navItem" @click="jumpTo('info')">资讯</span>
        </div>
      </div>

      <keep-alive class="router">
        <router-view></router-view>
      </keep-alive>
    </div>

    <footer-bar></footer-bar>
  </div>
</template>

<script>
import FooterBar from './FooterBar.vue'
import HeaderBar from './HeaderBar.vue'
export default {
  name: "Main-Frame",
  components: { HeaderBar, FooterBar },
  data() {
    return {
      headerHeight: 70,
    }
  },
  methods: {
    headerScroll() {
      const scrollTop = window.scrollY;

      if (scrollTop <= 200) {
        this.headerHeight = 70;
      }
      else if (scrollTop > 200 && scrollTop < 400) {
        this.headerHeight = 40;
      }
      else {
        this.headerHeight = 0;
      }
    },
    routerSwitch(target) {
      this.$router.push({
        name: target
      })
    },
    jumpTo(id) {
      if (this.$route.name == "MainContent") {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      else {
        this.routerSwitch("MainContent");
        this.jumpTo(id);
      }
    },
    ruleInitPush() {
      const url = window.location.pathname;
      const routes = ['/rule'];
      if (routes.includes(url)) {
        this.$router.push({
          path: url
        });
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.headerScroll);

    this.$bus.$on("routerSwitch", this.routerSwitch);

    this.ruleInitPush();
  },
  beforeDestroy() {
    this.$bus.$off("routerSwitch");
  }
}
</script>

<style scoped>
.welcome {
  padding-top: 200px;
  padding-bottom: 70px;
  background-image: url("../../../static/images/background.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.welcome .title {
  font-family: "blankspot-owlw4";
  font-size: 100px;
  font-weight: bold;
  color: rgb(194, 255, 182);
}

.welcome .subtitle {
  font-size: 30px;
  margin-top: 30px;
  font-weight: bolder;
  color: rgb(115, 250, 227);
}

.welcome .nav {
  margin-top: 50px;
}

.navItem {
  margin-inline: 20px;
  color: skyblue;
  font-size: 23px;
  cursor: pointer;
}

.navItem:hover {
  color: blue;
  text-decoration: underline;
  font-weight: bold;
}
</style>