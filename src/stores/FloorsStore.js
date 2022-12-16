import { defineStore } from "pinia";

export const useFloorsStore = defineStore("floorsStore", {
  state: () => ({
    numberOfFloors: 5,
  }),
});
