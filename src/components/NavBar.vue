<template>
  <nav>
    <div class="title">
      <router-link :to="'/'">
        <h1 style="color: black">Nikke</h1>
      </router-link>
    </div>
    <div class="actions">
      <ul>
        <li><a href="#">Men</a></li>
        <li><a href="#">Women</a></li>
        <li><a href="#">Kids</a></li>
        <li><a href="#">Sale</a></li>
        <li><a href="#">SNKRS</a></li>
        <li><a class="vl">|</a></li>
        <router-link :to="'/login'">
          <n-button
            color="black"
            size="medium"
            id="loginBtn"
            style="margin: 10px"
            >Log In</n-button
          >
        </router-link>
        <router-link :to="'/register'">
          <n-button
            color="#253759"
            type="default"
            size="medium"
            id="signupBtn"
            style="margin: 10px; color: #253759"
            ghost
            >Sign Up</n-button
          >
        </router-link>
      </ul>
    </div>
  </nav>
  <div class="sub"></div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;

  list-style: none;
  font-family: "Open Sans", sans-serif;
}
nav {
  background-color: white;
  border-bottom: 1px solid rgb(189, 189, 189);
  overflow: hidden;
}

nav .title {
  float: left;
  margin-left: 5%;
}

nav .title h1 {
  font-size: 35px;
}

nav ul {
  float: right;
  display: flex; /*align list */
  font-size: 18px;
  margin-right: 5%;
}

nav ul li a {
  float: right;
  padding: 14px 16px;
  color: black;
  border-bottom: 2px solid white;
}

nav ul .n-button {
  float: right;
  padding: 10px;
}

nav ul li a:hover:not(.active, .vl) {
  border-bottom: 2px solid black;
}

.active {
  background-color: #d0ebff;
  border-bottom: 1px solid black;
}
</style>
