// SAMLPLE

<template>
  <body>
    <div class="container">
      <div class="cards">
        <div class="card"></div>
      </div>
    </div>
  </body>
</template>
<script>
export default {
  name: "SamplePage",
  components: {},
  setup() {
    return {};
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}

body {
  height: 100vh;
  background-color: rgb(250, 250, 250);
}

.container {
  display: grid;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 10px;
}

.card {
  width: 100%;
  height: 200px;
  background-color: blue;
  border: 1px solid black;
}
</style>
