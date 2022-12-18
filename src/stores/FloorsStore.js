import { defineStore } from "pinia";

export const useFloorsStore = defineStore("floorsStore", {
  state: () => ({
    numberOfFloors: 5,
    callQueue: [],
    currentFloor: 1,
    direction: "stop",
    isElevatorActive: false,
  }),
  getters: {
    isFloorInCallQueue: (state) => {
      return (floorNumber) => state.callQueue.includes(floorNumber);
    },
  },
  actions: {
    addToCallQueue(id) {
      this.callQueue.push(id);
    },
    changeElevatorActive(value) {
      this.isElevatorActive = value;
    }
  },
});
