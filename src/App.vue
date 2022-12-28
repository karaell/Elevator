<template>
  <div class="app">
    <form @submit.prevent class="form">
      <input
        class="form__input"
        v-model="numberOfFloors"
        type="text"
        placeholder="Введите количество этажей..."
      />
      <button class="form__btn" @click="changeNumberOfFloors">
        Установить
      </button>
    </form>
    <div class="building">
      <div class="shafts">
        <shaft-column :numberOfFloors="floorsStore.numberOfFloors" />
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
}

.form__input {
  width: 200px;
  height: 40px;
  padding: 0 15px;
  font-size: 15px;
}

.form__btn {
  height: 44px;
  margin-left: 10px;
  font-size: 15px;
}
</style>
