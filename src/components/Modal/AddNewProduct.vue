<template>
  <n-button @click="showModal = true">Add New Product</n-button>
  <n-modal v-model:show="showModal" :mask-closable="false">
    <ContentAddNewProduct
      @click_closeModal="showModal = false"
      @click_addNewProduct="addNewProduct($event) ? (showModal = false) : ''"
      :invalid_name="valid_name"
    />
  </n-modal>
</template>

<script>
import { defineComponent, ref } from "vue";
import { API } from "../../api/ProductList.js";
import ContentAddNewProduct from "./ContentAddNewProduct.vue";

export default defineComponent({
  name: "CreateNewProduct",
  components: { ContentAddNewProduct },

  setup() {
    let showModal = ref(false);

    let valid_name = ref(true);

    function addNewProduct(new_product) {
      API.prototype.addNewProduct(new_product);
      return true;
    }

    return {
      showModal,
      addNewProduct,
      valid_name,
    };
  },
});
</script>

<style scoped>
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
