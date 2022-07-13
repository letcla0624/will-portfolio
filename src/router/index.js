import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "front",
    component: () => import("@/views/FrontView.vue"),
    children: [
      {
        path: "",
        name: "index",
        component: () => import("@/views/front/IndexView.vue"),
      },
      {
        path: "about",
        name: "about",
        component: () => import("@/views/front/AboutView.vue"),
      },
      {
        path: "resume",
        name: "resume",
        component: () => import("@/views/front/ResumeView.vue"),
      },
    ],
  },
  {
    path: "/works",
    component: () => import("@/views/WorkPageView.vue"),
    children: [
      {
        path: "web1/1",
        component: () => import("@/views/front/works/web1/Web1View_01.vue"),
      },
      {
        path: "app1",
        component: () => import("@/views/front/works/app1/App1View.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active",
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
});

export default router;
