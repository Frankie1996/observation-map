import Vue from "vue";
import Vuetify from "vuetify/lib";
import de from "vuetify/es5/locale/de";

const MY_ICONS = {
  bird: "/src/assets/icons/bird.png"
};

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { de },
    current: "de"
  },
  icons: {
    values: MY_ICONS
  }
});
