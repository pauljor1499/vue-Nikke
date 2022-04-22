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
            <router-link to="/admin/dashboard" class="nav">
              <div>
                <span class="icon"><i class="fas fa-home"></i></span>
                <span class="item">Dashboard</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/admin/products" class="nav">
              <div>
                <span class="icon"><i class="fas fa-desktop"></i></span>
                <span class="item">Products</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/admin" class="nav">
              <div>
                <span class="icon"><i class="fas fa-user-friends"></i></span>
                <span class="item">Users</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/admin" class="nav">
              <div>
                <span class="icon"><i class="fas fa-tachometer-alt"></i></span>
                <span class="item">Reports</span>
              </div>
            </router-link>
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
        <router-view></router-view>
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

    return {
      sidebar_show,
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
.router-link-exact-active,
.router-link-exact-active div {
  background: black;
  color: white;
  transition: 0.3s ease;
}

.nav:hover {
  background: black;
  color: white;
}

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
  background: black;
  transition: 0.3s ease;
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
  transition: 0.5s ease;
}

.hamburger .button-hide {
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
  margin-left: 0px;
  transition: 0.5s ease;
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
  transition: 0.3s ease;
}

.hide {
  transform: rotate(90deg);
  transition: 0.3s ease;
}
/* svg animation */

.drawerOn {
  margin-left: 0px;
  transition: 0.5s ease;
}

.drawerOff {
  margin-left: -320px;
  transition: 0.5s ease;
}
</style>
