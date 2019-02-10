import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./components/home/Home.vue";
import News from "./components/news/News.vue";

Vue.use(VueRouter);

export const prefix =
  process.env.NODE_ENV === "production" ? "/vue-news/" : "/";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: `${prefix}`,
      component: Home
    },
    {
      path: `${prefix}news/:topic`,
      component: News,
      props: true
    }
  ]
});
