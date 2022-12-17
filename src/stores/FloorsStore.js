import { defineStore } from "pinia";

export const useFloorsStore = defineStore("floorsStore", {
  state: () => ({
    numberOfFloors: 5,
    callQueue: [],
    currentFloor: 1,
    direction: "stop",
    isElevatorActive: false,
  }),
  actions: {
    addToCallQueue(id) {
      this.callQueue.push(id);
    }
  }
});
