<template>
  <button @click="showModal = true">Delete</button>
  <n-modal v-model:show="showModal" :mask-closable="false">
    <ContentDeleteProduct
      @click_closeModal="showModal = false"
      @click_DeleteProduct="deleteProduct($event) ? (showModal = false) : ''"
      :product_ID="$route.params.id"
    />
  </n-modal>
</template>

<script>
import { defineComponent, ref } from "vue";
import { Product_Service } from "../../../../api/ProductList.js";
import ContentDeleteProduct from "./ContentDeleteProduct.vue";

export default defineComponent({
  name: "DeleteProduct",
  components: { ContentDeleteProduct },

  setup() {
    let showModal = ref(false);

    function deleteProduct(delete_product_ID) {
      Product_Service.prototype.deleteProductByID(delete_product_ID);
      this.$router.push({ path: "/admin/products" });
      return true;
    }

    return {
      showModal,
      deleteProduct,
    };
  },
});
</script>

<style scoped>
.details .button button {
  width: 100%;
  margin-top: 10px;
  border-radius: 40px;
  background-color: black;
  color: white;
  padding: 20px;
  font-size: 18px;
  cursor: pointer;
}
</style>
