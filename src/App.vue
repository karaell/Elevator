<template>
  <div></div>
  <div class="app">
    <floor-row
      v-for="i in floorsStore.numberOfFloors"
      :key="i"
      :floorNumber="i"
    />
  </div>
</template>

<script>
import FloorRow from "@/components/FloorRow.vue";
import { useFloorsStore } from "@/stores/FloorsStore";

export default {
  name: "App",
  components: {
    FloorRow,
  },
  data() {
    return {};
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
  border-top: 2px solid rgba(0, 0, 0, 0.356);
  border-bottom: 2px solid rgba(0, 0, 0, 0.356);
  display: flex;
  flex-direction: column-reverse;
  row-gap: 2px;
  background-color: rgba(0, 0, 0, 0.356);
}
</style>
