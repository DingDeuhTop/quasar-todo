import firebase from "src/boot/firebase";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      // { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "", component: () => import("pages/IndexHome.vue") },
      { path: "/product", component: () => import("pages/productPage.vue") },
      { path: "auth/login", component: () => import("pages/logIn.vue") },
      { path: "auth/register", component: () => import("pages/register.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

// Router.beforeEach(async (to, from, next) => {
//   const auth = to.meta.requiresAuth;
//   if (auth && !(await firebase.getCurrentUser())) {
//     next("/");
//   } else {
//     next();
//   }
// });

export default routes;
