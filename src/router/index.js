import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Admin from "../views/AdminPage.vue";
import AdminDashboard from "../components/Admin/AdminDashboard.vue";
import AdminProducts from "../components/Admin/AdminProducts.vue";
import Select from "../components/Admin/AdminSelectProduct.vue";
import SamplePage from "../views/SamplePage.vue";

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
    path: "/admin",
    name: "Admin",
    component: Admin,
    redirect: "/admin/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: AdminDashboard,
      },
      {
        path: "products",
        name: "Products",
        component: AdminProducts,
      },
    ],
  },

  {
    path: "/admin/products/select/:id",
    name: "Select",
    component: Select,
    props: true,
  },

  {
    path: "/samplepage",
    name: "SamplePage",
    component: SamplePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
