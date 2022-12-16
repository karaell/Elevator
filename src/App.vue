<template>
  <div class="app">
    <floor-row />
    <floor-row />
  </div>
</template>

<script>
import FloorRow from "@/components/FloorRow.vue";

export default {
  name: "App",
  components: {
    FloorRow,
  },
};
</script>

<style>
.app {
  border-top: 2px solid rgba(0, 0, 0, 0.356);
  border-bottom: 2px solid rgba(0, 0, 0, 0.356);
  display: grid;
  row-gap: 2px;
  background-color: rgba(0, 0, 0, 0.356);
}
</style>
