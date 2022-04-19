<template>
  <n-button @click="showModal = true">Add New Item</n-button>
  <n-modal
    v-model:show="showModal"
    class="custom-card"
    preset="card"
    :style="bodyStyle"
    title="Add New Item"
    :bordered="false"
    size="small"
    :segmented="segmented"
  >
    <template #header-extra></template>
    <div class="content">
      <div class="field">
        <label for="item-name">Item Name</label>
        <input
          v-model="item_name"
          type="text"
          id="item-name"
          placeholder="Name"
        />
      </div>
      <div class="field">
        <label for="item-type">Item Name</label>
        <input
          v-model="item_type"
          type="text"
          id="item-type"
          placeholder="Type"
        />
      </div>
      <div class="field">
        <label for="item-type" id="item-price">Item Price</label>
        <input
          v-model="item_price"
          type="number"
          id="item-price"
          placeholder="Price"
        />
      </div>
    </div>
    <template #footer>
      <div class="bottom-button">
        <n-button class="left_button" @click="showModal = false"
          >Cancel</n-button
        >
        <n-button
          class="right_button"
          color="black"
          type="primary"
          @click="addNewProduct() ? (showModal = false) : false"
        >
          Add
        </n-button>
      </div>
    </template>
  </n-modal>
</template>

<script>
import { defineComponent, ref } from "vue";
import { API } from "../../api/ProductList.js";

export default defineComponent({
  name: "CreateNewProduct",
  components: {},

  setup() {
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
      bodyStyle: {
        width: "400px",
      },
      segmented: {
        content: "soft",
        footer: "soft",
      },
      showModal: ref(false),
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
