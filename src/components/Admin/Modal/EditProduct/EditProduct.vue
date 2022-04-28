<template>
  <button @click="showModal = true">Edit Details</button>
  <n-modal v-model:show="showModal" :mask-closable="false">
    <ContentEditProduct
      @closeModal="closeModal()"
      @editProductInput="editProductInput($event) ? (showModal = false) : ''"
      :invalid_name="error_name"
      :invalid_type="error_type"
      :invalid_price="error_price"
      :invalid_color="error_color"
      :invalid_description="error_description"
      :product_ID="$route.params.id"
    />
  </n-modal>
</template>

<script>
import { defineComponent, ref } from "vue";
import { Product_Service } from "../../../../api/ProductList.js";
import ContentEditProduct from "./ContentEditProduct.vue";

export default defineComponent({
  name: "EditProduct",
  components: { ContentEditProduct },

  setup() {
    let showModal = ref(false);

    let error_name = ref(false);
    let error_type = ref(false);
    let error_price = ref(false);
    let error_color = ref(false);
    let error_description = ref(false);

    function editProductInput(update_product) {
      if (update_product.NAME.value == "") {
        error_name.value = true;
      } else {
        error_name.value = false;
      }
      if (update_product.TYPE.value == "") {
        error_type.value = true;
      } else {
        error_type.value = false;
      }
      if (update_product.PRICE.value == 0) {
        error_price.value = true;
      } else {
        error_price.value = false;
      }
      if (update_product.COLOR.value == "") {
        error_color.value = true;
      } else {
        error_color.value = false;
      }
      if (update_product.DESCRIPTION.value == "") {
        error_description.value = true;
      } else {
        error_description.value = false;
      }
      if (
        !error_name.value &&
        !error_type.value &&
        !error_price.value &&
        !error_color.value &&
        !error_description.value
      ) {
        Product_Service.prototype.updateProductByID(
          update_product.ID,
          update_product
        );
        return true;
      }
      return false;
    }

    function closeModal() {
      showModal.value = false;

      error_name.value = false;
      error_type.value = false;
      error_price.value = false;
      error_color.value = false;
      error_description.value = false;
    }

    return {
      showModal,
      editProductInput,
      error_name,
      error_type,
      error_price,
      error_color,
      error_description,
      closeModal,
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
