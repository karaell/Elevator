<template>
  <div class="hall">
    <button
      class="btn"
      @click="elevatorCallBtnClick"
      :class="{ active: floorsStore.isFloorInCallQueue(floorNumber) }"
      :disabled="isElevatorOnCurrentFloor()"
      
    >
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
  methods: {
    elevatorCallBtnClick() {
      const isFloorInQueue = this.floorsStore.isFloorInCallQueue(
        this.floorNumber
      );
      const isElevatorActive = this.floorsStore.isElevatorActive;

      if (!isFloorInQueue) {
        this.addToQueue(this.floorNumber);
      }
      if (!isElevatorActive) {
        this.changeElevatorActive(true);
      }
    },
    isElevatorOnCurrentFloor() {
      return this.floorsStore.currentFloor === this.floorNumber;
    }
  },
  setup() {
    const floorsStore = useFloorsStore();

    const addToQueue = (id) => floorsStore.addToCallQueue(id);
    const changeElevatorActive = (value) =>
      floorsStore.changeElevatorActive(value);

    return {
      floorsStore,
      addToQueue,
      changeElevatorActive,
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
  box-shadow: 0 0 5px 3px rgb(148, 184, 218);
}

.active {
  background-color: rgb(100, 161, 218);
}
</style>
