<template>
  <div class="app">
    <form @submit.prevent class="form">
      <label for="shafts">Установить количество лифтовых шахт:</label>
      <input
        class="form__input"
        v-model="numberOfElevators"
        type="text"
        name="shafts"
        id="shafts"
        placeholder="Введите количество лифтовых шахт..."
      />
      <button class="form__btn" @click="changeNumberOfElevators">
        Установить
      </button>
    </form>
    <form @submit.prevent class="form">
      <label for="floors">Установить количество этажей:</label>
      <input
        class="form__input"
        v-model="numberOfFloors"
        type="text"
        name="floors"
        id="floors"
        placeholder="Введите количество этажей..."
      />
      <button class="form__btn" @click="changeNumberOfFloors">
        Установить
      </button>
    </form>
    <div class="building">
      <div class="shafts">
        <shaft-column
          v-for="elevatorNumber in floorsStore.numberOfElevators"
          :key="elevatorNumber"
          :numberOfFloors="floorsStore.numberOfFloors"
        />
      </div>
      <div class="hall">
        <hall-row
          v-for="floorNumber in floorsStore.numberOfFloors"
          :key="floorNumber"
          :floorNumber="floorNumber"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HallRow from "@/components/HallRow.vue";
import ShaftColumn from "@/components/ShaftColumn.vue";
import { useFloorsStore } from "@/stores/FloorsStore";

export default {
  name: "App",
  components: {
    HallRow,
    ShaftColumn,
  },
  data() {
    return {
      numberOfFloors: "",
      numberOfElevators:"",
    };
  },
  methods: {
    changeNumberOfElevators() {
      const numberOfElevators = this.numberOfElevators;
      if (numberOfElevators > 0) {
        this.floorsStore.changeNumberOfElevators(numberOfElevators);
      } else {
        alert("Минимальное количество лифтовых шахт: 1");
      }
      this.numberOfElevators = "";
    },
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

<style scoped>
.building {
  display: flex;
}

.hall {
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
}

.shafts {
  display: flex;
}

.form {
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 20px;
}

.form__input {
  width: 200px;
  height: 40px;
  padding: 0 15px;
  font-size: 15px;
  margin-left: 10px;
}

.form__btn {
  height: 44px;
  margin-left: 10px;
  font-size: 15px;
}
</style>
