<template>
  <div class="app">
    <floor-row
      v-for="floorNumber in floorsStore.numberOfFloors"
      :key="floorNumber"
      :floorNumber="floorNumber"
    />
    <elevator-cabin />
  </div>
</template>

<script>
import FloorRow from "@/components/FloorRow.vue";
import ElevatorCabin from "@/components/FloorItems/ElevatorCabin.vue";
import { useFloorsStore } from "@/stores/FloorsStore";

export default {
  name: "App",
  components: {
    FloorRow,
    ElevatorCabin,
  },
  setup() {
    const floorsStore = useFloorsStore();

    return {
      floorsStore,
    };
  },
};
</script>

<style>
.app {
  display: flex;
  flex-direction: column-reverse;
  position: relative;
}
</style>
