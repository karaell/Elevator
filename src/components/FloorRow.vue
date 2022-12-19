<template>
  <div class="floor">
    <vertical-line />
    <shaft-item />
    <vertical-line />
    <hall-item :floorNumber="floorNumber" />
  </div>
</template>

<script>
import ShaftItem from "@/components/FloorItems/ShafItem.vue";
import HallItem from "@/components/FloorItems/HallItem.vue";

export default {
  name: "floor-row",
  components: {
    ShaftItem,
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
.floor {
  height: 200px;
  width: 100%;
  display: flex;
  background-color: #fff;
  outline: 1px solid rgba(0, 0, 0, 0.164);
}
</style>
