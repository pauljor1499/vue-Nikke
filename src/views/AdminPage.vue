<template>
  <NavBarLogout />
  <body>
    <div class="container">
      <div class="sidebar" :class="sidebar_show ? 'drawerOn' : 'drawerOff'">
        <div class="profile">
          <img
            src="https://cahsi.utep.edu/wp-content/uploads/kisspng-computer-icons-user-clip-art-user-5abf13db5624e4.1771742215224718993529.png"
            alt="profile_picture"
          />
          <h3>Paul Vincent Jor</h3>
          <p>Code: 142-4342-1</p>
          <p style="margin-bottom: 10px">Admin</p>
          <a href="#">
            <span>View Profile</span>
          </a>
        </div>
        <hr />
        <ul>
          <li>
            <a
              href="#"
              :class="page_status == 'dashboard' ? 'active' : ''"
              @click="click_dashboardPage()"
            >
              <div>
                <span class="icon"><i class="fas fa-home"></i></span>
                <span class="item">Dashboard</span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              :class="page_status == 'products' ? 'active' : ''"
              @click="click_productsPage()"
            >
              <div>
                <span class="icon"><i class="fas fa-desktop"></i></span>
                <span class="item">Products</span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              :class="page_status == 'users' ? 'active' : ''"
              @click="click_usersPage()"
            >
              <div>
                <span class="icon"><i class="fas fa-user-friends"></i></span>
                <span class="item">Users</span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              :class="page_status == 'reports' ? 'active' : ''"
              @click="click_reportsPage()"
            >
              <div>
                <span class="icon"><i class="fas fa-tachometer-alt"></i></span>
                <span class="item">Reports</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="hamburger">
        <button
          @click="sidebar_show = !sidebar_show"
          :class="sidebar_show ? 'button-show' : 'button-hide'"
        >
          <svg
            :class="sidebar_show ? 'show' : 'hide'"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"
            />
          </svg>
        </button>
      </div>
      <div class="pages">
        <div :class="page_status == 'dashboard' ? 'page-show' : 'page-hide'">
          <AdminDashboard :sidebar_status="sidebar_show" />
        </div>
        <div :class="page_status == 'products' ? 'page-show' : 'page-hide'">
          <AdminProducts :sidebar_status="sidebar_show" />
        </div>
        <div :class="page_status == 'users' ? 'page-show' : 'page-hide'"></div>
      </div>
    </div>
  </body>
  <footer></footer>
</template>

<script>
import { ref } from "@vue/reactivity";
import NavBarLogout from "../components/NavBar-Logout.vue";
import AdminProducts from "../components/Admin/AdminProducts.vue";
import AdminDashboard from "../components/Admin/AdminDashboard.vue";

export default {
  name: "AdminPage",
  components: {
    NavBarLogout,
    AdminProducts,
    AdminDashboard,
  },

  setup() {
    var sidebar_show = ref(true);

    var page_status = ref("dashboard");

    function click_dashboardPage() {
      page_status.value = "dashboard";
    }

    function click_productsPage() {
      page_status.value = "products";
    }

    function click_usersPage() {
      page_status.value = "users";
    }

    function click_reportsPage() {
      page_status.value = "reports";
    }

    return {
      app,
      sidebar_show,
      page_status,
      click_dashboardPage,
      click_productsPage,
      click_usersPage,
      click_reportsPage,
    };
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;

  list-style: none;
  font-family: "Open Sans", sans-serif;
}

/* side-bar show */
.sidebar {
  background-color: white;
  width: 320px;
  height: 100vh;
}

.sidebar .profile {
  margin-top: 50px;
}

.sidebar .profile img {
  display: block;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 0 auto;
  border: 2px solid black;
}

.sidebar .profile h3 {
  color: black;
  margin: 20px 0 10px;
}

.sidebar .profile p {
  color: black;
  font-size: 14px;
}

.sidebar .profile a {
  display: inline-block;
  font-size: 12px;
  padding: 10px;
  padding-left: 140px;
  color: black;
}

.sidebar .profile a span:hover {
  padding: 5px;
  border-radius: 5px;
  background-color: rgb(219, 219, 219);
}

.sidebar ul {
  display: inline-block;
  margin-top: 20px;
  width: 85%;
}

.sidebar ul li a {
  display: block;
  border-bottom: 1px solid gray;
  color: black;
  font-size: 16px;
  padding: 15px;
}

.sidebar ul li a div {
  text-align: left;
}

.sidebar ul li a .icon {
  margin-right: 15px;
}

.sidebar ul li a:hover,
.sidebar ul li a.active {
  border-radius: 10px;
  background: black;
  transition: 0.6s ease-in;
}

.sidebar ul li a:hover .icon,
.sidebar ul li a.active .icon,
.sidebar ul li a:hover .item,
.sidebar ul li a.active .item {
  color: white;
}

.container {
  display: flex;
  background-color: hsl(0, 0%, 95%);
  height: 100vh;
}

.pages {
  width: 100%;
}

.pages .page-show {
  display: block;
}

.pages .page-hide,
.pages .products-hide {
  display: none;
}

.pages h1 {
  color: white;
  float: left;
  margin: 50px 80px 0;
}

.hamburger {
  position: absolute;
  float: left;
  margin-left: 5px;
  margin-top: 5px;
  z-index: 1;
}

.hamburger .button-show {
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
  margin-left: 263px;
  transition: 0.5s ease-in;
}

.hamburger .button-hide {
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
  margin-left: 0px;
  transition: 0.5s ease-in;
}

.hamburger svg path {
  fill: white;
}

.hamburger button:hover {
  cursor: pointer;
}

/* svg animation */
.show {
  transform: rotate(0deg);
  transition: 0.3s ease-in;
}

.hide {
  transform: rotate(90deg);
  transition: 0.3s ease-in;
}
/* svg animation */

.drawerOn {
  margin-left: 0px;
  transition: 0.5s ease-in;
}

.drawerOff {
  margin-left: -320px;
  transition: 0.5s ease-in;
}
</style>
