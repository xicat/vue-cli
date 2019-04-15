import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: "/", redirect: "/portal/home" },
    {
      path: "/portal",
      component: () => import("@/views/layout/layout.vue"),
      children: [
        {
          path: "home",
          name: "Home",
          meta: {
            root: "home",
            title: "common.home"
          },
          component: () => import("@/views/home/home.vue")
        },
        {
          path: "family",
          name: "Family",
          meta: {
            root: "family",
            title: "common.family"
          },
          component: () => import("@/views/family/family.vue")
        },
        {
          path: "work",
          name: "Work",
          meta: {
            root: "work",
            title: "common.work"
          },
          component: () => import("@/views/work/work.vue")
        },
        {
          path: "learn",
          name: "Learn",
          meta: {
            root: "learn",
            title: "common.learn"
          },
          component: () => import("@/views/learn/learn.vue")
        },
        {
          path: "diary",
          name: "Diary",
          meta: {
            root: "diary",
            title: "common.diary"
          },
          component: () => import("@/views/diary/diary.vue")
        },
        {
          path: "disport",
          name: "Disport",
          meta: {
            root: "disport",
            title: "common.disport"
          },
          component: () => import("@/views/disport/disport.vue")
        },
        {
          path: "about",
          name: "About",
          meta: {
            root: "about",
            title: "common.about"
          },
          component: () => import("@/views/about/about.vue")
        }
      ]
    }
  ]
});
