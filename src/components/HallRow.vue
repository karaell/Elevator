<template>
  <div class="hallRow">
    <hall-item :floorNumber="floorNumber" />
  </div>
</template>

<script>
import HallItem from "@/components/FloorItems/HallItem.vue";

export default {
  name: "hall-row",
  components: {
    HallItem,
  },
  props: {
    floorNumber: {
      type: Number,
    },
  },
};
</script>

<style scoped>
.hallRow {
  height: 200px;
  width: 100%;
  background-color: #fff;
  outline: 1px solid rgba(0, 0, 0, 0.164);
}
</style>
