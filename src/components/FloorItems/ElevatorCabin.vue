<template>
  <div
    class="elevator"
    :class="{ blink: floorsStore.elevatorsStatus[0].isElevatorWaiting }"
    :style="{
      transform: `translateY(${floorsStore.elevatorsStatus[0].pxTransform}px)`,
      'transition-duration': `${floorsStore.elevatorsStatus[0].elevatorSpeed}s`,
    }"
    @transitionend="moveNextFloor"
  >
    <div class="scoreboard">
      {{ floorsStore.elevatorsStatus[0].currentFloor }}
      <img
        :src="require(`@/assets/${floorsStore.elevatorsStatus[0].elevatorDirection}.svg`)"
        alt="elevatorDirection"
        v-if="floorsStore.elevatorsStatus[0].elevatorDirection !== 'stop'"
      />
    </div>
  </div>
</template>

<script>
import { useFloorsStore } from "@/stores/FloorsStore";

export default {
  methods: {
    moveNextFloor() {
      const isCallQueueEmpty = !this.floorsStore.elevatorsStatus[0].callQueue.length;

      if (isCallQueueEmpty) return false;

      this.changeElevatorWaiting(true);

      setTimeout(() => {
        this.changeElevatorWaiting(false);
        this.floorsStore.removeFromCallQueue();
        this.floorsStore.moveNextFloor();
      }, 3000);
    },
  },
  mounted() {
    this.moveNextFloor();
  },
  setup() {
    const floorsStore = useFloorsStore();
    const changeElevatorWaiting = (value) =>
      floorsStore.changeElevatorWaiting(value);
    return {
      floorsStore,
      changeElevatorWaiting,
    };
  },
};
</script>

<style scoped>
.elevator {
  background-color: rgb(70, 255, 255);
  height: 200px;
  width: 150px;
  position: absolute;
}

.blink {
  animation: blink 1s linear infinite;
}

@keyframes blink {
  0% {
    background-color: rgb(70, 255, 255, 0);
  }
  50% {
    background-color: rgb(70, 255, 255, 0.5);
  }
  100% {
    background-color: rgba(70, 255, 255, 1);
  }
}

.scoreboard {
  background-color: rgba(0, 0, 0, 0.281);
  border: 1px solid #000;
  width: 30px;
  margin: 0 auto;
  margin-top: 15px;
  padding: 5px 10px;
  font-size: 20px;
}

.scoreboard img {
  width: 15px;
  height: 15px;
}
</style>
