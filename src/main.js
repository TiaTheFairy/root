import Vue from "vue";
import App from "./App.vue";
import "../static/font/fonts.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Clipboard from "v-clipboard";

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(Clipboard);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
