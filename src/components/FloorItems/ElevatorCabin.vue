<template>
  <div
    class="elevator"
    :class="{blink: floorsStore.isElevatorWaiting}"
    :style="{
      transform: `translateY(${floorsStore.transform}px)`,
      'transition-duration': `${floorsStore.transitionDuration}s`,
    }"
    @transitionend="transitionEnd"
  >
    <div class="scoreboard">
      {{ floorsStore.currentFloor }} {{ floorsStore.direction }}
    </div>
  </div>
</template>

<script>
import { useFloorsStore } from "@/stores/FloorsStore";

export default {
  methods: {
    transitionEnd() {
      this.changeElevatorWaiting(true);

      setTimeout(() => {
        this.changeElevatorWaiting(false);
        this.floorsStore.removeFromCallQueue();
        this.floorsStore.goNextFloor();
      }, 3000);
      // this.changeElevatorActive(false)
    }
  },
  setup() {
    const floorsStore = useFloorsStore();
    const changeElevatorActive = (value) =>
      floorsStore.changeElevatorActive(value);
      const changeElevatorWaiting = (value) =>
      floorsStore.changeElevatorWaiting(value);
    return {
      floorsStore,
      changeElevatorActive,
      changeElevatorWaiting
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
  margin-left: 2px;
}

.blink {
  animation: blink 1s linear infinite;
}

@keyframes blink {
  0% { background-color: rgb(70, 255, 255, 0); }
  50% {background-color: rgb(70, 255, 255, 0.5);}
  100% { background-color: rgba(70, 255, 255, 1); }
}

.scoreboard {
  background-color: rgba(0, 0, 0, 0.281);
  border: 1px solid #000;
  width: 50px;
  margin: 0 auto;
  margin-top: 15px;
  padding: 5px;
  text-align: center;
}
</style>
