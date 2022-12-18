import { defineStore } from "pinia";

export const useFloorsStore = defineStore("floorsStore", {
  state: () => ({
    numberOfFloors: 5,
    callQueue: [],
    currentFloor: 1,
    direction: "stop",
    isElevatorActive: false,
    isElevatorWaiting: false,
    transform: 0,
    transitionDuration: 0,
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
      this.callQueue = this.callQueue.filter(item => item!==this.currentFloor)
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
