// SAMLPLE

<template>
  <body>
    <div class="container">
      <div class="filter"></div>
      <div class="list">
        <div class="header">
          <input type="text" name="" id="" placeholder="Search" />
          <select name="" id="Gender">
            <option value="volvo">Featured</option>
            <option value="saab">Newest</option>
            <option value="saab">Price: High-Low</option>
            <option value="saab">Price: Low-High</option>
          </select>
        </div>
        <div class="content">
          <div
            :class="
              PRODUCTS.length === 0
                ? 'empty-message-show'
                : 'empty-message-hide'
            "
          >
            <h2>No Products Available</h2>
          </div>
          <div class="items">
            <div class="item" v-for="product in PRODUCTS" :key="product">
              <div class="item-content">
                <img
                  :src="require(`../assets/landing_page/${product.IMAGE}`)"
                  alt=""
                />
                <div class="name">{{ product.NAME }}</div>
                <div class="type">{{ product.TYPE }}</div>
                <div class="price">{{ product.PRICE }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer"></div>
      </div>
    </div>
  </body>
</template>
<script>
import { ref } from "@vue/reactivity";
import { products } from "../api/ProductList.js";
export default {
  name: "ProductList",
  components: {},
  setup() {
    let PRODUCTS = ref(products);

    return {
      PRODUCTS,
    };
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}

.container {
  width: 100%;
  height: 100%;
  background-color: red;
  display: flex;
}

.filter {
  width: 30%;
  background-color: blue;
  float: left;
}

.list {
  width: 100%;
  float: right;
}

.header {
  padding: 10px;
  background-color: red;
  overflow: hidden;
  position: relative;
}

.header input {
  float: left;
  margin-left: 5%;
  width: 250px;
  padding: 10px;
}

.header select {
  float: right;
  margin-right: 5%;
}

.content {
  padding: 20px;
  background-color: rgb(245, 245, 245);
}

.content .empty-message-show {
  display: block;
}

.content .empty-message-hide {
  display: none;
}

.content .items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 40px;
}

.content .item {
  width: 100%;
  background-color: white;
  border: 1px solid white;
}

.content .item:hover {
  border: 1px solid black;
  box-shadow: 0px 0px 5px 0px rgb(207, 207, 207);
  cursor: pointer;
}

.content .item .item-content {
  padding: 20px;
}

.content .item img {
  width: 100%;
  height: 200px;
}

.content .item .name,
.content .item .type,
.content .item .price {
  width: 100%;
  text-align: left;
}

.content .item .name {
  font-weight: bold;
}

.content .item .type {
  color: gray;
  font-weight: bold;
}

.footer {
  width: 100%;
  height: 200px;
  background-color: black;
}
</style>
