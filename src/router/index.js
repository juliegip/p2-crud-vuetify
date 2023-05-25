// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "/",
        name: "ReceipeList",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/ReceipeList.vue"),
      },
      {
        path: "/receipedetails",
        name: "ReceipeDetails",
        component: () => import("@/views/ReceipeDetails.vue"),
      },
      {
        path: "/addreceipe",
        name: "AddReceipe",
        component: () => import("@/views/AddReceipe.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
