<template>
  <div class="floor">
    <vertical-line />
    <elevator-item />
    <vertical-line />
    <hall-item />
  </div>
</template>

<script>
import ElevatorItem from "@/components/ElevatorItem.vue";
import HallItem from "@/components/HallItem.vue";

export default {
  name: "floor-row",
  components: {
    ElevatorItem,
    HallItem,
  },
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
