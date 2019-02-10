import Vue from "vue";
import VueRouter from "vue-router";

import News from "./components/news/News.vue";

Vue.use(VueRouter);

export const prefix = "/";

export default new VueRouter({
  routes: [
    {
      path: `${prefix}`,
      redirect: `${prefix}news/world`
    },
    {
      path: `${prefix}news/:topic`,
      component: News,
      props: true
    }
  ]
});
