import { createWebHistory, RouteRecordRaw, createRouter } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    name: "home",
    path: "/",
    component: () => import("@/pages/home/index.vue"),
    meta: {
      title: "首页",
    },
  },
  {
    name: "about",
    path: "/about",
    component: () => import("@/pages/about/index.vue"),
    meta: {
      title: "关于",
    },
  },
  {
    name: "404",
    path: "/404",
    component: () => import("@/pages/404/index.vue"),
    meta: {
      title: "404",
    },
  },
  {
    name: "not-find",
    path: "/:pathMatch(.*)*",
    redirect: {
      path: "/404",
    },
    meta: {
      title: "404",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  const title = to.meta.title as string;
  if (title) {
    document.title = title;
  }

  next();
});
export default router;
