<template>
  <n-button @click="showModal = true">Add New Item</n-button>
  <n-modal v-model:show="showModal" :mask-closable="true">
    <AddNewProduct
      @click_closeModal="showModal = false"
      @click="
        click_addNewProduct = addNewProduct()
          ? ((showModal = false),
            (item_name = ''),
            (item_type = ''),
            (item_price = ''))
          : ''
      "
    />
  </n-modal>
</template>

<script>
import { defineComponent, ref } from "vue";
import { API } from "../../api/ProductList.js";
import AddNewProduct from "./card_AddNewProduct.vue";

export default defineComponent({
  name: "CreateNewProduct",
  components: { AddNewProduct },

  setup() {
    var showModal = ref(false);

    var item_name = ref(null);
    var item_type = ref(null);
    var item_price = ref(null);

    let PRODUCTS = ref(API.prototype.getProducts());

    let lastIndex_ByID = ref(
      parseInt(PRODUCTS.value[PRODUCTS.value.length - 1].ID) + 1
    );

    function addNewProduct() {
      API.prototype.addNewProduct({
        ID: lastIndex_ByID.value++,
        NAME: item_name.value,
        TYPE: item_type.value,
        PRICE: item_price.value,
        IMAGE: "default_image.png",
      });
      return true;
    }

    return {
      //Styles
      // bodyStyle: {
      //   width: "400px",
      // },
      // segmented: {
      //   content: "soft",
      //   footer: "soft",
      // },

      showModal,
      PRODUCTS,
      item_name,
      item_type,
      item_price,
      lastIndex_ByID,
      addNewProduct,
    };
  },
});
</script>

<style scoped>
/* .n-card {
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

.n-card .card-body .field input {
  width: 85%;
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
} */

.content {
  width: 100%;
  display: grid;
  grid-template: 1fr;
  row-gap: 10px;
}

.content .field {
  display: grid;
  grid-template-columns: 0.4fr 1fr;
}

.content input {
  padding: 5px;
}

.n-button {
  float: left;
}

.bottom-button .n-button {
  width: 100px;
}

.right_button {
  float: right;
}
</style>
