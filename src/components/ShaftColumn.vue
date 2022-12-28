<template>
  <div class="shaftColumn">
    <shaft-item v-for="floor in numberOfFloors" :key="floor" />
    <elevator-cabin />
  </div>
</template>

<script>
import ShaftItem from "@/components/FloorItems/ShaftItem.vue";
import ElevatorCabin from "@/components/FloorItems/ElevatorCabin.vue";

export default {
  name: "shaft-column",
  components: {
    ShaftItem,
    ElevatorCabin,
  },
  props: {
    numberOfFloors: {
      type: Number,
    },
  },
};
</script>

<style scoped>
.shaftColumn {
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  margin-left: 5px;
  width: 150px;
}
</style>
