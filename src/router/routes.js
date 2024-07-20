const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        name: "home",
        path: "",
        component: () => import("pages/IndexPage.vue"),
      },
    ],
  },
  {
    path: "/update/:phone",
    component: () => import("layouts/UpdateLayout.vue"),
    children: [
      {
        name: "update",
        path: "",
        component: () => import("pages/UpdatePage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
