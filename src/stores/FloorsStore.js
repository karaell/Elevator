import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const useFloorsStore = defineStore("floorsStore", {
  state: () => ({
    numberOfElevators: useLocalStorage("numberOfElevators", 1),
    numberOfFloors: useLocalStorage("numberOfFloors", 5),
    elevatorsStatus: useLocalStorage("elevatorsStatus", [
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
        state.elevatorsStatus[0].callQueue.includes(floorNumber);
    },
    firstFloorInCallQueue: (state) => {
      return state.elevatorsStatus[0].callQueue[0];
    },
  },
  actions: {
    changeNumberOfFloors(number) {
      this.numberOfFloors = Number(number);
    },
    changeNumberOfShafts(number, item) {
      this.numberOfElevators = Number(number);
      this.elevatorsStatus = Array(this.numberOfElevators).fill(item);
    },
    addToCallQueue(id) {
      this.elevatorsStatus[0].callQueue.push(id);
    },
    removeFromCallQueue() {
      this.elevatorsStatus[0].callQueue =
        this.elevatorsStatus[0].callQueue.filter(
          (item) => item !== this.elevatorsStatus[0].currentFloor
        );
    },
    changeElevatorActive(value) {
      this.elevatorsStatus[0].isElevatorActive = value;
    },
    changeElevatorWaiting(value) {
      this.elevatorsStatus[0].isElevatorWaiting = value;
    },
    moveNextFloor() {
      const isCallQueueEmpty = !this.elevatorsStatus[0].callQueue.length;

      if (isCallQueueEmpty) {
        this.elevatorsStatus[0].isElevatorActive = false;
        this.elevatorsStatus[0].elevatorDirection = "stop";
        return;
      }

      const currentFloor = this.elevatorsStatus[0].currentFloor;
      const nextFloor = this.firstFloorInCallQueue;

      this.elevatorsStatus[0].pxTransform = -(200 * (nextFloor - 1));
      this.elevatorsStatus[0].elevatorSpeed = Math.abs(
        nextFloor - currentFloor
      );
      this.elevatorsStatus[0].elevatorDirection =
        currentFloor < nextFloor ? "up" : "down";
      this.elevatorsStatus[0].currentFloor = nextFloor;
    },
  },
});
