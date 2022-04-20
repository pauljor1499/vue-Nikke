<template>
  <body>
    <div class="list">
      <div class="header">
        <input
          v-model="search"
          type="text"
          name=""
          id=""
          placeholder="Search"
        />
        <select name="" id="filter">
          <option value="featured">Featured</option>
          <option value="newest">Newest</option>
          <option value="high">Price: High-Low</option>
          <option value="low">Price: Low-High</option>
        </select>
      </div>
      <div class="content">
        <div class="actions">
          <AddNewProduct />
        </div>
        <div
          :class="
            PRODUCTS.length === 0 ? 'empty-message-show' : 'empty-message-hide'
          "
        >
          <h2>No Products Available</h2>
        </div>
        <div :class="sidebar_status ? 'items' : 'items-5'">
          <div class="item" v-for="product in search_product" :key="product">
            <div class="item-content">
              <img
                :src="require(`../../assets/landing_page/${product.IMAGE}`)"
                :alt="`${product.IMAGE}`"
              />
              <!-- <div class="id">{{ product.ID }}</div> -->
              <div class="name">{{ product.NAME }}</div>
              <div class="type">{{ product.TYPE }}</div>
              <div class="price">
                <!-- en-US means to have commas -->
                {{
                  product.PRICE.toLocaleString("en-US", {
                    style: "currency",
                    currency: "PHP",
                  })
                }}
              </div>
              <!-- <div class="price">{{ product.COLOR }}</div> -->
              <!-- <div>{{ product.DESCRIPTION }}</div> -->
            </div>
          </div>
        </div>
      </div>
      <div class="footer"></div>
    </div>
  </body>
</template>
<script>
import { computed, ref } from "@vue/runtime-core";
import { API } from "../../api/ProductList.js";
import AddNewProduct from "../Modal/AddNewProduct.vue";

export default {
  name: "AdminProducts",
  components: { AddNewProduct },
  props: { sidebar_status: Boolean },

  setup() {
    let PRODUCTS = API.prototype.getProducts();

    const search = ref("");

    const search_product = computed(() => {
      var output2 = PRODUCTS.value.filter((product) =>
        product.NAME.toLowerCase().includes(search.value)
      );
      return output2;
    });

    return {
      PRODUCTS,
      search,
      search_product,
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

.list {
  width: 100%;
  height: 100%;
  float: right;
}

.header {
  padding: 10px;
  background-color: black;
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

.content .actions {
  overflow: hidden;
  margin-bottom: 50px;
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

.content .items-5 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
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

.content .item .id,
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
