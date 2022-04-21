import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Products from "../views/ProductList.vue";
import Admin from "../views/AdminPage.vue";
import Select from "../components/Admin/AdminSelectProduct.vue";

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },

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
    path: "/select/:id",
    name: "Select",
    component: Select,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
