import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Routes from "./router";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
});

new Vue({
  el: "#app",
  render: (h) => h(App),
  router: router,
});
