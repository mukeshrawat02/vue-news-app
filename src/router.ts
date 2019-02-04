import Vue from "vue";
import Router from "vue-router";

import Home from "./components/home/Home.vue";
import News from "./components/news/News.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/news/:topic",
      component: News,
      props: true
    }
  ]
});
