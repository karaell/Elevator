<template>
  <div class="app">
    <floor-row
      v-for="(floor, floorNumber) in floorsStore.numberOfFloors"
      :key="floorNumber"
      :floorNumber="floorNumber + 1"
    />
    <elevator-cabin />
    <form @submit.prevent class="form">
      <input
        v-model="numberOfFloors"
        type="text"
        placeholder="Введите количество этажей..."
      />
      <button @click="changeNumberOfFloors">Установить</button>
    </form>
  </div>
</template>

<script>
import FloorRow from "@/components/FloorRow.vue";
import ElevatorCabin from "@/components/FloorItems/ElevatorCabin.vue";
import { useFloorsStore } from "@/stores/FloorsStore";

export default {
  name: "App",
  components: {
    FloorRow,
    ElevatorCabin,
  },
  data() {
    return {
      numberOfFloors: "",
    };
  },
  methods: {
    changeNumberOfFloors() {
      const numberOfFloors = this.numberOfFloors;
      if (numberOfFloors > 1) {
        this.floorsStore.changeNumberOfFloors(numberOfFloors);
      } else {
        alert("Минимальное количество этажей: 2");
      }
      this.numberOfFloors = "";
    },
  },
  setup() {
    const floorsStore = useFloorsStore();

    return {
      floorsStore,
    };
  },
};
</script>

<style>
.app {
  display: flex;
  flex-direction: column-reverse;
  position: relative;
}

.form {
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: start;
}

.form input {
  width: 200px;
  height: 40px;
  padding: 0 15px;
  font-size: 15px;
}

.form button {
  height: 44px;
  margin-left: 10px;
  font-size: 15px;
}
</style>
