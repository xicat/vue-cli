import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router/";
import store from "./store/";
import i18n from "./i18n/lang";

import "@/assets/css/index.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas, far, fab);

Vue.component("font-awesome-icon", FontAwesomeIcon);

if (process.env.VUE_APP_MOCK === "mock") {
  require("../mock");
  require("es6-promise").polyfill();
}
Vue.use(ElementUI);

new Vue({
  el: "#app",
  router,
  i18n,
  store,
  render: h => h(App)
});
