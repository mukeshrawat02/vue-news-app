import Vue from "vue";
import Router from "vue-router";

import Home from "./components/home/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./components/about/About.vue")
    }
  ]
});
