<template>
  <body>
    <div class="container">
      <div class="photos">
        <div class="item">
          <img
            src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b5d338dd-58b5-4134-8951-692c89477116/air-zoom-pegasus-39-road-running-shoes-kmZSD6.png"
            alt=""
          />
        </div>
        <div class="item">
          <img
            src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/70fdfeea-35c1-4fd6-8012-cd04e1231ecd/air-zoom-pegasus-39-road-running-shoes-kmZSD6.png"
            alt=""
          />
        </div>
      </div>
      <div class="details">
        <div class="item-name">Nike Air Zoom Pegasus 39</div>
        <div class="item-type">Men's Road Running Shoes</div>
        <div class="item-price">₱6,595</div>
        <div class="description">
          Running is your daily ritual, with every step taking you closer to
          your personal goal. Let the Nike Air Zoom Pegasus 39 help you ascend
          to new heights—whether you're training or jogging—with its intuitive
          design. More lightweight up top than the Pegasus 38 and ideal to wear
          in any season, it has a supportive sensation to help keep your feet
          contained, while underfoot cushioning and double Zoom Air units (1
          more than the Peg 38) give you an extra pop to your step. Your trusted
          workhorse with wings is back. Time to fly.
        </div>
        <div class="item-size">
          <div class="title">Select Size</div>
          <ul>
            <li>US 7</li>
            <li>US 7.5</li>
            <li>US 8</li>
            <li>US 8.5</li>
            <li>US 9</li>
            <li>US 9.5</li>
            <li>US 10</li>
            <li>US 10.5</li>
            <li>US 11</li>
          </ul>
        </div>
        <button>Buy Product</button>
      </div>
    </div>
  </body>
  <Footer />
</template>
<script>
import Footer from "../Footer.vue";

export default {
  components: {
    Footer,
  },

  setup() {},
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
}

.container {
  margin-bottom: 100px;
  padding: 20px;
  display: flex;
}

.container .photos {
  flex: 2;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
}

.container .photos .item {
  margin: auto;
}

.container .photos .item img {
  width: 100%;
}

.details {
  flex: 1;
  padding: 20px;
  text-align: left;
}

.details .item-name {
  font-size: 30px;
}

.details .item-type {
  font-size: 20px;
}

.details .item-price {
  font-size: 18px;
}

.details .description {
  margin-top: 40px;
  text-align: justify;
}

.details .item-size {
  margin-top: 40px;
}

.details .item-size .title {
  font-size: 18px;
}

.details .item-size ul {
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
}

.details .item-size ul li {
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: 1px solid rgb(206, 206, 206);

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
}

.details .item-size ul li:hover {
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: 1px solid black;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
}

.details button {
  width: 100%;
  margin-top: 10px;
  border-radius: 20px;
  background-color: black;
  color: white;
  padding: 20px;
  font-size: 18px;
}
</style>
