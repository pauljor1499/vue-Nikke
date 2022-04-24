<template>
  <n-card :bordered="false" size="small">
    <!-- {{ $route.params.id }} -->
    <div class="card-header">
      <div class="title"><h4>Warning</h4></div>
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
      <h3>Do you want to delete this product?</h3>
    </div>
    <div class="card-footer">
      <n-button class="button-left" @click="this.$emit('click_closeModal')">
        Cancel
      </n-button>
      <n-button
        class="button-right"
        color="red"
        @click="this.$emit('click_DeleteProduct', product_ID)"
      >
        Update
      </n-button>
    </div>
  </n-card>
</template>
<script>
export default {
  props: {
    product_ID: Number,
  },

  setup() {
    return {};
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
