import Vue from "vue";
import App from "./App.vue";

/* Import Router, Store, Vuetify */
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";


import VueLayers from "vuelayers";
import "vuelayers/lib/style.css";

import VueGeolocation from "vue-browser-geolocation";

Vue.use(VueGeolocation);
Vue.use(VueLayers);

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
