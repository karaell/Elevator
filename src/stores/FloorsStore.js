import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const useFloorsStore = defineStore("floorsStore", {
  state: () => ({
    numberOfFloors: useLocalStorage("numberOfFloors", 5),
    callQueue: useLocalStorage("callQueue", []),
    currentFloor: useLocalStorage("currentFloor", 1),
    direction: useLocalStorage("direction", "stop"),
    isElevatorActive: useLocalStorage("isElevatorActive", false),
    isElevatorWaiting: useLocalStorage("isElevatorWaiting", false),
    transform: useLocalStorage("transform", 0),
    transitionDuration: useLocalStorage("transitionDuration", 0),
  }),
  getters: {
    isFloorInCallQueue: (state) => {
      return (floorNumber) => state.callQueue.includes(floorNumber);
    },
    firstFloorInCallQueue: (state) => {
      return state.callQueue[0];
    },
  },
  actions: {
    addToCallQueue(id) {
      this.callQueue.push(id);
    },
    removeFromCallQueue() {
      this.callQueue = this.callQueue.filter(
        (item) => item !== this.currentFloor
      );
    },
    changeElevatorActive(value) {
      this.isElevatorActive = value;
    },
    changeElevatorWaiting(value) {
      this.isElevatorWaiting = value;
    },
    goNextFloor() {
      if (!this.callQueue.length) {
        this.isElevatorActive = false;
        this.direction = "stop";
        return;
      }

      const currentFloor = this.currentFloor;
      const nextFloor = this.firstFloorInCallQueue;

      this.transform = -((nextFloor - 1) * 200);
      this.transitionDuration = Math.abs(nextFloor - currentFloor);
      this.direction = currentFloor < nextFloor ? "up" : "down";
      this.currentFloor = nextFloor;
    },
  },
});
