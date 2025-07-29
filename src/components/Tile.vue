<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  number: {
    type: Number,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="tile">
    <h3>{{ number }}</h3>
    <p>{{ text }}</p>
    <a :href="link">Details</a>
  </div>
</template>

<style scoped>
.tile {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  text-align: center;
  transition: transform 0.2s;
}

.tile:hover {
  transform: scale(1.05);
}
</style>