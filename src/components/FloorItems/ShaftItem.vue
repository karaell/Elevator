<template>
  <div class="shaftItem"></div>
</template>

<script>
export default {
  name: "shaft-item",
  props: {
    numberOfFloors: {
      type: Number,
    },
  },
};
</script>

<style scoped>
.shaftItem {
  background-color: #fff;
  height: 200px;
  outline: 1px solid rgba(0, 0, 0, 0.397);
}
</style>
