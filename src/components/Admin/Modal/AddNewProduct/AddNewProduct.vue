<template>
  <n-button @click="showModal = true">Add New Product</n-button>
  <n-modal v-model:show="showModal" :mask-closable="false">
    <ContentAddNewProduct
      @closeModal="closeModal()"
      @addNewProductInput="
        addNewProductInput($event) ? (showModal = false) : ''
      "
      :invalid_name="error_name"
      :invalid_type="error_type"
      :invalid_price="error_price"
      :invalid_color="error_color"
      :invalid_description="error_description"
    />
  </n-modal>
  <SuccessToast
    v-show="product_successfullyAdded"
    :message="'Product successfully added.'"
  />
</template>

<script>
import { defineComponent, ref } from "vue";
import { Product_Service } from "../../../../api/ProductList.js";
import ContentAddNewProduct from "./ContentAddNewProduct.vue";
import SuccessToast from "../../../Popups/SuccessToast.vue";

export default defineComponent({
  name: "CreateNewProduct",
  components: { ContentAddNewProduct, SuccessToast },

  setup() {
    let showModal = ref(false);
    let product_successfullyAdded = ref(false);

    let error_name = ref(false);
    let error_type = ref(false);
    let error_price = ref(false);
    let error_color = ref(false);
    let error_description = ref(false);

    function addNewProductInput(new_product) {
      if (new_product.NAME.value == "") {
        error_name.value = true;
      } else {
        error_name.value = false;
      }

      if (new_product.TYPE.value == "") {
        error_type.value = true;
      } else {
        error_type.value = false;
      }

      if (new_product.PRICE.value == 0) {
        error_price.value = true;
      } else {
        error_price.value = false;
      }

      if (new_product.COLOR.value == "") {
        error_color.value = true;
      } else {
        error_color.value = false;
      }

      if (new_product.DESCRIPTION.value == "") {
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
        Product_Service.prototype.addNewProduct(new_product);
        product_successfullyAdded.value = true;
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
      addNewProductInput,
      error_name,
      error_type,
      error_price,
      error_color,
      error_description,
      closeModal,
      product_successfullyAdded,
    };
  },
});
</script>

<style scoped>
.n-button {
  float: left;
}
</style>
