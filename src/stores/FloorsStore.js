import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const useFloorsStore = defineStore("floorsStore", {
  state: () => ({
    numberOfElevators: useLocalStorage("numberOfElevators", 1),
    numberOfFloors: useLocalStorage("numberOfFloors", 5),
    callQueue: useLocalStorage("callQueue", []),
    currentFloor: useLocalStorage("currentFloor", 1),
    elevatorDirection: useLocalStorage("elevatorDirection", "stop"),
    isElevatorActive: useLocalStorage("isElevatorActive", false),
    isElevatorWaiting: useLocalStorage("isElevatorWaiting", false),
    pxTransform: useLocalStorage("pxTransform", 0),
    elevatorSpeed: useLocalStorage("elevatorSpeed", 0),
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
    changeNumberOfFloors(number) {
      this.numberOfFloors = Number(number);
    },
    changeNumberOfElevators(number) {
      this.numberOfElevators = Number(number);
    },
    moveNextFloor() {
      const isCallQueueEmpty = !this.callQueue.length;

      if (isCallQueueEmpty) {
        this.isElevatorActive = false;
        this.elevatorDirection = "stop";
        return;
      }

      const currentFloor = this.currentFloor;
      const nextFloor = this.firstFloorInCallQueue;

      this.pxTransform = -(200 * (nextFloor - 1));
      this.elevatorSpeed = Math.abs(nextFloor - currentFloor);
      this.elevatorDirection = currentFloor < nextFloor ? "up" : "down";
      this.currentFloor = nextFloor;
    },
  },
});
