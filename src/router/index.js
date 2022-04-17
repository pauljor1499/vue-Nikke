import { createRouter, createWebHistory } from "vue-router";
// import NavBar from "../components/NavBar";
import LandingPage from "../views/LandingPage.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Products from "../views/ProductList.vue";
import AdminProducts from "../views/AdminProducts.vue";
import Admin from "../views/AdminPage.vue";

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },

  // {
  //   path: "/",
  //   name: "NavBar",
  //   component: NavBar,
  // },

  {
    path: "/login",
    name: "Login",
    component: Login,
  },

  {
    path: "/register",
    name: "Register",
    component: Register,
  },

  {
    path: "/products",
    name: "Products",
    component: Products,
  },

  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },

  {
    path: "/adminProducts",
    name: "AdminProducts",
    component: AdminProducts,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
