<template>
  <div class="hall">
    <button class="btn" @click="addToQueue(floorNumber)">
      {{ floorNumber }}
    </button>
  </div>
</template>

<script>
import { useFloorsStore } from "@/stores/FloorsStore";

export default {
  name: "hall-item",
  props: {
    floorNumber: {
      type: Number,
    },
  },
  setup() {
    const floorsStore = useFloorsStore();

    const addToQueue = (id) => floorsStore.addToCallQueue(id)

    return {
      addToQueue
    };
  },
};
</script>

<style scoped>
.hall {
  padding: 10px;
}

.btn {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  border: 1px solid #000;
  cursor: pointer;
  font-weight: 600;
}

.btn:hover {
  background-color: rgb(148, 184, 218);
}
</style>
