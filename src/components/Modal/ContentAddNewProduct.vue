<template>
  <n-card :bordered="false" size="small">
    <div class="card-header">
      <div class="title"><h3>Add New Product</h3></div>
      <n-button
        color="black"
        round
        @click="this.$emit('click_closeModal')"
        text
      >
        <i class="fa-solid fa-circle-xmark fa-2x"></i>
      </n-button>
    </div>
    <div class="error-message-show" v-show="invalid_name">
      <span>• Invalid name input.</span>
      <span>• Invalid type input.</span>
      <span>• Invalid price input.</span>
      <span>• Invalid color input.</span>
      <span>• Invalid description input.</span>
    </div>
    <div class="card-body">
      <div class="field">
        <label for="itemName">Name</label>
        <input v-model="product_name" type="text" name="" id="itemName" />
      </div>
      <div class="field">
        <label for="itemType">Type</label>
        <select v-model="product_type" name="" id="itemType">
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
          <option value="SNKRS">SNKRS</option>
        </select>
      </div>
      <div class="field">
        <label for="itemPrice">Price</label>
        <input v-model="product_price" type="number" name="" id="itemPrice" />
      </div>
      <div class="field">
        <label for="itemColor">Color</label>
        <select v-model="product_color" name="" id="itemColor">
          <option value="Black">Black</option>
          <option value="White">White</option>
          <option value="Gray">Gray</option>
          <option value="Blue">Blue</option>
        </select>
      </div>
      <div class="field">
        <label for="itemDescription">Description</label>
        <textarea
          v-model="product_description"
          name=""
          id="itemDescription"
          cols="0"
          rows="5"
        />
      </div>
    </div>
    <div class="card-footer">
      <n-button class="button-left" @click="this.$emit('click_closeModal')"
        >Cancel</n-button
      >
      <n-button
        class="button-right"
        color="black"
        @click="this.$emit('click_addNewProduct', new_product)"
        >Add</n-button
      >
    </div>
  </n-card>
</template>
<script>
import { ref } from "@vue/reactivity";
import { API } from "../../api/ProductList.js";

export default {
  props: { invalid_name: Boolean },

  setup() {
    let product_name = ref("");
    let product_type = ref("");
    let product_price = ref(0);
    let product_color = ref("");
    let product_description = ref("");

    let PRODUCTS = API.prototype.getProducts();
    let lastIndex_ByID =
      parseInt(PRODUCTS.value[PRODUCTS.value.length - 1].ID) + 1;

    let new_product = {
      ID: lastIndex_ByID++,
      NAME: product_name,
      TYPE: product_type,
      PRICE: product_price,
      COLOR: product_color,
      DESCRIPTION: product_description,
      IMAGE: "default_image.png",
    };

    return {
      PRODUCTS,
      lastIndex_ByID,
      product_name,
      product_type,
      product_price,
      product_color,
      product_description,
      new_product,
    };
  },
};
</script>
<style scoped>
.n-card {
  padding: 10px;
  max-width: 450px;
}

.n-card .card-header {
  overflow: hidden;
}

.n-card .card-header .title {
  float: left;
}

.n-card .card-header .n-button {
  float: right;
}

.error-message-show {
  display: grid;
  padding: 6px;
  color: red;
  background-color: rgb(255, 239, 239);
  border: 0.5px solid rgb(250, 160, 160);
  margin-top: 25px;
}

.n-card .card-body {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 10px;
  margin-top: 20px;
  margin-bottom: 40px;
}

.n-card .card-body .field {
  display: grid;
  grid-template-columns: 1fr 2fr;
}

.n-card .card-body .field input,
.n-card .card-body .field select,
.n-card .card-body .field textarea {
  padding: 5px;
}

.n-card .card-footer {
  overflow: hidden;
}

.n-card .button-left,
.n-card .button-right {
  width: 80px;
  padding: 5px;
}

.n-card .button-left {
  float: left;
}

.n-card .button-right {
  float: right;
}
</style>
