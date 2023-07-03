import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from '../views/Login.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/product",
      name: "product",
      component: () => import("../views/Products.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: ()=> import("../views/Login.vue")
    },
    {
      path: "/about",
      name: "About",
      component: ()=> import("../views/AboutView.vue")
    },
    {
      path: "/quickview",
      name: "view",
      component: () => import("../views/QuickView.vue"),
    }
  ],
});

// router.beforeEach((to, from, next) => {
//   // Hide the current page when the route changes
//   const appElement = document.getElementById("app");
//   if (appElement) {
//     appElement.style.display = "none";
//   }
//   next();
// });

// // Add the afterEach navigation guard
// router.afterEach(() => {
//   // Show the new page after the route change is complete
//   const appElement = document.getElementById("app");
//   if (appElement) {
//     appElement.style.display = ""; // Change "block" to an empty string ""
//   }
// });

export default router;
