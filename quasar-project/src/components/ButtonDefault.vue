<template>
  <button class="join-us-button" @click="handleClick">
    <span>{{ text }}</span>
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  text: String,
});

const emits = defineEmits(['click']);

const handleClick = () => {
  emits.click();
};
</script>

<style scoped lang="scss">
.join-us-button {
  width: 10rem;
  color: black;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 0 5px #fff;
  padding: 0.8rem;
  cursor: pointer;
  font-family: 'Outfit';
  font-weight: bolder;
  border: none;
  font-size: 1rem;

  span {
    color: black;
  }
}
</style>
