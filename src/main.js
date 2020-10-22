import Vue from "vue";
import App from "./App.vue";
import { value1, value2 } from "./texts";
import { alertText } from "./textFunction";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

alertText(value1);
alertText(value2);
