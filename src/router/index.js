import { createRouter, createWebHistory } from "vue-router";
import NavBar from "../components/NavBar";
import LandingPage from "../views/LandingPage.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },

  {
    path: "/",
    name: "NavBar",
    component: NavBar,
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
