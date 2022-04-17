<template>
  <NavBarLogout />
  <body>
    <div class="container">
      <div
        class="sidebar-show"
        :class="sidebar_show ? 'drawerOn' : 'drawerOff'"
      >
        <div class="profile">
          <img
            src="https://thetaiwantimes.com/wp-content/uploads/2020/06/President_Rodrigo_Duterte-1.jpg"
            alt="profile_picture"
          />
          <h3>Rodrigo Duterte</h3>
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
              class="page_status == 'reports' ? 'active' : ''"
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
      <!-- Board -->
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
      <div class="board">
        <div
          :class="
            page_status == 'dashboard' ? 'board-body-show' : 'board-body-hide'
          "
        >
          <h1>Welcome to your Dashboard!</h1>
          <!-- Card -->
          <div :class="sidebar_show ? 'cards-4' : 'cards-5'">
            <div class="card">
              <n-card
                title="Subjects"
                :segmented="{
                  content: true,
                  footer: 'soft',
                }"
                hoverable
              >
                <template #header-extra>View</template>
                Card Content
              </n-card>
            </div>
            <div class="card">
              <n-card
                title="Classes"
                :segmented="{
                  content: true,
                  footer: 'soft',
                }"
                hoverable
              >
                <template #header-extra>View</template>
                Card Content
              </n-card>
            </div>
            <div class="card">
              <n-card
                title="Notifications"
                :segmented="{
                  content: true,
                  footer: 'soft',
                }"
                hoverable
              >
                <template #header-extra>View</template>
                Card Content
              </n-card>
            </div>
            <div class="card">
              <n-card class="calendar" hoverable>
                <div class="date">21</div>
                <div>
                  <div class="month">December</div>
                  <div class="year">2018</div>
                  <div class="day">Sunday</div>
                </div>
              </n-card>
            </div>
          </div>
        </div>
        <div
          :class="page_status == 'products' ? 'products-show' : 'products-hide'"
        >
          <AdminProducts :sidebar_status="sidebar_show" />
        </div>
      </div>
    </div>
  </body>
  <footer></footer>
</template>

<script>
import { ref } from "@vue/reactivity";
import NavBarLogout from "../components/NavBar-Logout.vue";
import AdminProducts from "../views/AdminProducts.vue";

export default {
  name: "AdminPage",
  components: {
    NavBarLogout,
    AdminProducts,
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

/* shide-bar show */
.sidebar-show {
  background-color: white;
  width: 280px;
  height: 100%;
}

.sidebar-show .profile {
  margin-top: 50px;
}

.sidebar-show .profile img {
  display: block;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 0 auto;
  border: 2px solid black;
}

.sidebar-show .profile h3 {
  color: black;
  margin: 20px 0 10px;
}

.sidebar-show .profile p {
  color: black;
  font-size: 14px;
}

.sidebar-show .profile a {
  display: inline-block;
  font-size: 12px;
  padding: 10px;
  padding-left: 140px;
  color: rgba(255, 255, 255, 0.61);
}

.sidebar-show ul {
  display: inline-block;
  margin-top: 20px;
  width: 85%;
}

.sidebar-show ul li a {
  display: block;
  border-bottom: 1px solid gray;
  color: black;
  font-size: 16px;
  padding: 15px;
}

.sidebar-show ul li a div {
  text-align: left;
}

.sidebar-show ul li a .icon {
  margin-right: 15px;
}

.sidebar-show ul li a:hover,
.sidebar-show ul li a.active {
  border-radius: 10px;
  background: black;
  transition: 0.6s ease-in;
}

.sidebar-show ul li a:hover .icon,
.sidebar-show ul li a.active .icon,
.sidebar-show ul li a:hover .item,
.sidebar-show ul li a.active .item {
  color: white;
}
/* shide-bar show */

/* body */
.container {
  display: flex;
  background-color: hsl(0, 0%, 95%);
  height: 750px;
}

.board {
  width: 100%;
  height: 200px;
  background-color: gray;
}

.board .board-body-show,
.board .products-show {
  display: block;
}

.board .board-body-hide,
.board .products-hide {
  display: none;
}

.board h1 {
  color: white;
  float: left;
  margin: 50px 80px 0;
}

/* cards - sidebar showing */
.card {
  width: 100%;
  height: 200px;
  text-align: left;
}

.cards-4 {
  width: 95%;
  display: grid;
  margin: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 20px;
}

.cards-4 .card .n-card {
  max-width: 300px;
  top: 50px;
}

.cards-4 .card .calendar {
  display: flex;
}

.cards-4 .card .calendar .date {
  float: left;
  font-weight: bold;
  font-size: 55px;
  margin: 0px 20px 0px;
}

.cards-4.card .calendar .month {
  font-weight: bold;
  font-size: 16px;
  margin: 10px 0px 0px;
}
/* cards - sidebar showing */

footer {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 100px;
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
  margin-left: 240px;
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

/* cards - sidebar not showing */
.cards-5 {
  width: 95%;
  display: grid;
  margin: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 20px;
}

.cards-5 .card .n-card {
  max-width: 300px;
  top: 50px;
}

.cards-5 .card .calendar {
  display: flex;
}

.cards-5 .card .calendar .date {
  float: left;
  font-weight: bold;
  font-size: 55px;
  margin: 0px 20px 0px;
}

.cards-5 .card .calendar .month {
  font-weight: bold;
  font-size: 16px;
  margin: 10px 0px 0px;
}
/* cards - sidebar not showing */

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
  margin-left: -280px;
  transition: 0.5s ease-in;
}
</style>
