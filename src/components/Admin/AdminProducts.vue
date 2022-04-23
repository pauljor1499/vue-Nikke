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
      </div>
      <div class="content">
        <div class="actions">
          <AddNewProduct />
        </div>
        <div class="error-message-show" v-show="PRODUCTS.length === 0">
          <h2>No products available.</h2>
        </div>
        <div
          class="error-message-show"
          v-show="PRODUCTS.length != 0 && search_product == ''"
        >
          <h2>No product match your search.</h2>
        </div>
        <div class="items">
          <div class="item" v-for="product in search_product" :key="product">
            <router-link :to="{ name: 'Select', params: { id: product.ID } }">
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
            </router-link>
          </div>
        </div>
      </div>
      <div class="footer"></div>
    </div>
  </body>
</template>
<script>
import { computed, ref } from "@vue/runtime-core";
import { Product_Service } from "../../api/ProductList.js";
import AddNewProduct from "../Modal/AddNewProduct.vue";

export default {
  name: "AdminProducts",
  components: { AddNewProduct },
  props: { sidebar_status: Boolean },

  setup() {
    let PRODUCTS = Product_Service.prototype.getProducts();

    const search = ref("");

    const search_product = computed(() => {
      var output = Product_Service.prototype.searchProductByName(search.value);

      return output;
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
  margin-bottom: 25px;
}

.content .error-message-show {
  margin-top: 25vh;
  margin-bottom: 25vh;
  display: block;
}

.content .error-message-hide {
  display: none;
}

.content .items {
  display: flex;
  flex-wrap: wrap;
  grid-gap: 12px;
  row-gap: 30px;
}

.content .item {
  width: 250px;
  height: 300px;
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
  color: black;
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
