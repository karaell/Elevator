<template>
  <div class="floor">
    <vertical-line />
    <elevator-item />
    <vertical-line />
    <hall-item :floorNumber="floorNumber"/>
  </div>
</template>

<script>
import ElevatorItem from "@/components/FloorItems/ElevatorItem.vue";
import HallItem from "@/components/FloorItems/HallItem.vue";

export default {
  name: "floor-row",
  components: {
    ElevatorItem,
    HallItem,
  },
  props: {
    floorNumber: {
      type: Number,
    }
  }
};
</script>

<style scoped>
.floor {
  height: 200px;
  width: 100%;
  display: flex;
  background-color: #fff;
}
</style>
