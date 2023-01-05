<template>
  <form @submit.prevent class="form">
    <label :for="id">{{ labelValue }}</label>
    <input
      class="form__input"
      v-model="inputValue"
      type="text"
      :name="id"
      :id="id"
      :placeholder="placeholderValue"
    />
    <button class="form__btn" @click="handleClick">Установить</button>
  </form>
</template>

<script>
export default {
  props: {
    labelValue: {
      type: String,
    },
    placeholderValue: {
      type: String,
    },
    id: {
      type: String,
    },
  },
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    handleClick() {
      this.$emit("handleClick", this.inputValue);
      this.inputValue = "";
    },
  },
};
</script>

<style scoped>
.form {
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 20px;
}

.form__input {
  width: 280px;
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
