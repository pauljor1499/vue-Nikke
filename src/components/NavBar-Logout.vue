<template>
  <nav>
    <a href="/"><h1 style="color: black">Nikke</h1></a>
    <ul>
      <router-link :to="'/login'">
        <n-button color="black" size="medium" id="loginBtn" style="margin: 10px"
          >Logout</n-button
        >
      </router-link>
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

nav ul button {
  float: right;
  padding: 10px;
}
</style>
