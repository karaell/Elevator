<template>
  <div class="hall">
    <button
      class="btn"
      @click="elevatorCallHandleClick"
      :class="{
        active: floorsStore.isFloorInCallQueue(floorNumber),
        next: floorsStore.firstFloorInCallQueue === floorNumber,
      }"
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
    elevatorCallHandleClick() {
      const isFloorInQueue = this.floorsStore.isFloorInCallQueue(
        this.floorNumber
      );
      const isElevatorActive = this.floorsStore.isElevatorActive;

      if (!isFloorInQueue) {
        this.addToQueue(this.floorNumber);
      }

      if (!isElevatorActive) {
        this.changeElevatorActive(true);
        this.moveNextFloor();
      }
    },
    isElevatorOnCurrentFloor() {
      return this.floorsStore.currentFloor === this.floorNumber;
    },
  },
  setup() {
    const floorsStore = useFloorsStore();

    const addToQueue = (id) => floorsStore.addToCallQueue(id);
    const changeElevatorActive = (value) =>
      floorsStore.changeElevatorActive(value);
    const moveNextFloor = () => floorsStore.moveNextFloor();

    return {
      floorsStore,
      addToQueue,
      changeElevatorActive,
      moveNextFloor,
    };
  },
};
</script>

<style scoped>
.hall {
  padding: 10px;
  /* border: rgb(0, 0, 0); */
}

.btn {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  border: 1px solid #000;
  cursor: pointer;
  font-weight: 600;
}

.next {
  box-shadow: 0 0 0 2px rgb(255, 255, 255), 0 0 0 5px rgb(100, 161, 218);
}

.active {
  background-color: rgb(100, 161, 218);
}
</style>
