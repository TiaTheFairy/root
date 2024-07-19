import Vue from "vue";
import App from "./App.vue";
import "../static/font/fonts.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Clipboard from "v-clipboard";
import VueRouter from "vue-router";
import router from "./router";

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(Clipboard);
Vue.use(VueRouter);
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
