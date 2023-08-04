import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from '../views/Login.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landingpage",
      component: () => import("../views/LandingPage.vue")
    },
    {
      path: "/home",
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
      path: "/contactus",
      name: "contactus",
      component: () => import("../views/ContactUs.vue"),
    },
    {
      path: "/quickview/:imageUrl/:name/:price/:product_id",
      name: "view",
      component: () => import("../views/QuickView.vue"),
    },
    {
      path: "/card/:imageUrl/:price/:name",
      name: "card",
      component: () => import("../views/Card.vue"),
    },
    {
      path: "/addToCart",
      name: "addToCart",
      component: () => import("../views/AddToCart.vue"),
    },
    {
      path: "/cusinfo/:price/",
      name: "cusinfo",
      component: () => import("../views/CustomerAdd.vue"),
    },
    {
      path: "/shippingadd/:price",
      name: "shippingadd",
      component: () => import("../views/ShippingAdd.vue"),
    },
    {
      path: "/conorder/:price",
      name: "conorder",
      component: () => import("../views/ConfirmOrder.vue"),
    },
    {
      path: "/ordercomplete",
      name: "ordercomplete",
      component: () => import("../views/OrderComplete.vue"),
    },
    {
      path: "/quickviewnotaddcart/:imageUrl/:price/:name",
      name: "quickviewnotaddcart",
      component: () => import("../views/QuickViewNotAtToCart.vue"),
    },
    {
      path: "/cartdata",
      name: "cartdata",
      component: () => import("../views/CartData.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/testLoginSignUp.vue"),
    },
    {
      path: "/parent",
      name: "parent",
      component: () => import("../views/Parent.vue"),
    },
    {
      path: "/child",
      name: "child",
      component: () => import("../views/Child.vue"),
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
