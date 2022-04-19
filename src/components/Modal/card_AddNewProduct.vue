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
    <div class="card-body">
      <div class="field">
        <label for="itemName">Item Name</label>
        <input v-model="item_name" type="text" name="" id="itemName" />
      </div>
      <div class="field">
        <label for="itemType">Item Type</label>
        <input v-model="item_type" type="text" name="" id="itemType" />
      </div>
      <div class="field">
        <label for="itemPrice">Item Price</label>
        <input v-model="item_price" type="number" name="" id="itemPrice" />
      </div>
    </div>
    <div class="card-footer">
      <n-button class="button-left" @click="this.$emit('click_closeModal')"
        >Cancel</n-button
      >
      <n-button
        class="button-right"
        color="black"
        @click="this.$emit('click_addNewProduct')"
        >Add</n-button
      >
    </div>
  </n-card>
</template>
<script>
export default {
  setup() {},
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
  padding: 5px;
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
}
</style>
