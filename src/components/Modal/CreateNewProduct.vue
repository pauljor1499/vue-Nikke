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
      <label for="item-name">Item Name</label><br />
      <input
        v-model="item_name"
        type="text"
        id="item-name"
        placeholder="Name"
      /><br /><br />
      <label for="item-type">Item Name</label><br />
      <input
        v-model="item_type"
        type="text"
        id="item-type"
        placeholder="Type"
      /><br /><br />
      <label for="item-type" id="item-price">Item Price</label><br />
      <input
        v-model="item_price"
        type="number"
        id="item-price"
        placeholder="Price"
      />
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
  {{ counter }}
</template>

<script>
import { defineComponent, ref, watch } from "vue";
import { products, API } from "../../api/ProductList.js";

export default defineComponent({
  name: "CreateNewProduct",
  components: {},

  setup() {
    // let PRODUCTS = ref(products);

    let PRODUCTS = ref(API.prototype.getProducts());
    // alert(PRODUCTS.value);

    let counter = ref(
      parseInt(PRODUCTS.value[PRODUCTS.value.length - 1].ID + 1)
    );

    var item_name = ref(null);
    var item_type = ref(null);
    var item_price = ref(null);

    function addNewProduct() {
      // PRODUCTS.value.push({
      //   ID: 1,
      //   NAME: counter.value++,
      //   TYPE: "1",
      //   PRICE: "1",
      //   IMAGE: "default_image.png",
      // });
      API.prototype.addNewProduct({
        ID: 1,
        NAME: counter.value++,
        TYPE: "1",
        PRICE: "1",
        IMAGE: "default_image.png",
      });
      return true;
    }

    return {
      addNewProduct,

      //Styles
      bodyStyle: {
        width: "600px",
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
      counter,
    };
  },
});
</script>

<style scoped>
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
