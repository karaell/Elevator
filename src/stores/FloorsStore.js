import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const useFloorsStore = defineStore("floorsStore", {
  state: () => ({
    numberOfElevators: useLocalStorage("numberOfElevators", 1),
    numberOfFloors: useLocalStorage("numberOfFloors", 5),
    elevators: useLocalStorage("elevators", [
      {
        callQueue: [],
        currentFloor: 1,
        elevatorDirection: "stop",
        isElevatorActive: false,
        isElevatorWaiting: false,
        pxTransform: 0,
        elevatorSpeed: 0,
      },
    ]),
  }),
  getters: {
    isFloorInCallQueue: (state) => {
      return (floorNumber) =>
        state.elevators[0].callQueue.includes(floorNumber);
    },
    firstFloorInCallQueue: (state) => {
      return state.elevators[0].callQueue[0];
    },
  },
  actions: {
    changeNumberOfFloors(number) {
      this.numberOfFloors = Number(number);
    },
    changeNumberOfShafts(number, item) {
      this.numberOfElevators = Number(number);
      this.elevators = Array(this.numberOfElevators).fill(item);
    },
    addToCallQueue(id) {
      this.elevators[0].callQueue.push(id);
    },
    removeFromCallQueue() {
      this.elevators[0].callQueue = this.elevators[0].callQueue.filter(
        (item) => item !== this.elevators[0].currentFloor
      );
    },
    changeElevatorActive(value) {
      this.elevators[0].isElevatorActive = value;
    },
    changeElevatorWaiting(value) {
      this.elevators[0].isElevatorWaiting = value;
    },
    moveNextFloor() {
      const isCallQueueEmpty = !this.elevators[0].callQueue.length;

      if (isCallQueueEmpty) {
        this.elevators[0].isElevatorActive = false;
        this.elevators[0].elevatorDirection = "stop";
        return;
      }

      const currentFloor = this.elevators[0].currentFloor;
      const nextFloor = this.firstFloorInCallQueue;

      this.elevators[0].pxTransform = -(200 * (nextFloor - 1));
      this.elevators[0].elevatorSpeed = Math.abs(nextFloor - currentFloor);
      this.elevators[0].elevatorDirection =
        currentFloor < nextFloor ? "up" : "down";
      // this.elevators[0].currentPxLocation = Math.abs(
      //   this.elevators[0].pxTransform
      // );
      // this.elevators[0].currentPxLocation = this.elevators[0].pxTransform;
      this.elevators[0].currentFloor = nextFloor;
    },
  },
});
