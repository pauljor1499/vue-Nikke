<template>
  <div class="container">
    <div class="message">{{ message }}</div>
  </div>
</template>
<script>
export default {
  props: {
    message: String,
  },
  setup() {},
};
</script>
<style scoped>
.container {
  width: 100%;
  overflow: hidden;
}

.container .message {
  position: absolute;
  top: 100px;
  right: 20px;
  width: 200px;
  padding: 20px;
  z-index: 1;
  border-radius: 5px;
  color: white;
  background-color: rgb(45, 201, 71);

  animation-name: showup;
  animation-duration: 3s;
  opacity: 0;
}

@keyframes showup {
  from {
    opacity: 1;
    right: 20px;
  }
  to {
    opacity: 1;
    right: 20px;
  }
}
</style>
