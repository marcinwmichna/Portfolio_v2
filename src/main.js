import Vue from "vue";
import VueFormulate from "@braid/vue-formulate";
import axios from "axios";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(VueFormulate);
Vue.use(axios);
new Vue({
  render(h) { return h(App); },
}).$mount("#app");
