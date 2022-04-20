<template>
  <nav>
    <a href="/"><h1 style="color: black">Nikke</h1></a>
    <ul>
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
      <router-link :to="'/login'">
        <n-button color="black" size="medium" id="loginBtn" style="margin: 10px"
          >Log In</n-button
        >
      </router-link>
      <li><a class="vl">|</a></li>
      <li><a href="#">SNKRS</a></li>
      <li><a href="#">Sale</a></li>
      <li><a href="#">Kids</a></li>
      <li><a href="#">Women</a></li>
      <li><a href="#">Men</a></li>
    </ul>
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
}

nav h1 {
  float: left;
  margin: 5px 0px 0px 5%;
  font-size: 30px;
}

nav ul {
  overflow: hidden;
  font-size: 18px;
  margin-right: 5%;
}

nav ul .n-button {
  float: right;
  padding: 10px;
}

nav ul li a {
  float: right;
  padding: 14px 16px;
  color: black;
  border-bottom: 2px solid white;
}

nav ul li a:hover:not(.active, .vl) {
  border-bottom: 2px solid black;
}

.active {
  background-color: #d0ebff;
  border-bottom: 1px solid black;
}
</style>
