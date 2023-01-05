<template>
  <div class="app">
    <form-item
      :id="'floors'"
      :labelValue="'Установить количество этажей:'"
      :placeholderValue="'Введите количество этажей...'"
      @handleClick="changeNumberOfFloors"
    />
    <form-item
      :id="'shafts'"
      :labelValue="'Установить количество лифтовых шахт:'"
      :placeholderValue="'Введите количество лифтовых шахт...'"
      @handleClick="changeNumberOfShafts"
    />
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
import FormItem from "@/components/FormItem.vue";
import { useFloorsStore } from "@/stores/FloorsStore";

export default {
  name: "App",
  components: {
    HallRow,
    ShaftColumn,
    FormItem,
  },
  methods: {
    changeNumberOfShafts(numberOfShafts) {
      if (numberOfShafts > 0) {
        this.floorsStore.changeNumberOfShafts(numberOfShafts);
      } else {
        alert("Минимальное количество лифтовых шахт: 1");
      }
    },
    changeNumberOfFloors(numberOfFloors) {
      if (numberOfFloors > 1) {
        this.floorsStore.changeNumberOfFloors(numberOfFloors);
      } else {
        alert("Минимальное количество этажей: 2");
      }
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
</style>
