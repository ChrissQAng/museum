<script setup>
import { defineProps } from 'vue';
import { store } from '../stores/objectStore';

const props = defineProps({
  number: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  textEN: {
    type: String,
    required: true
  },
  textJP: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});

const handleClick = () => {
  store.setSelectedObject({
    number: props.number,
    text: props.text,
    textEN: props.textEN,
    textJP: props.textJP
  });
}
</script>

<template>
  <router-link :to="link" @click="handleClick">
  <div class="tile">
    <h3 class="tile-number">{{ number }}</h3>
    <p class="tile-text">{{ text }}</p>
    
  </div>
  </router-link>
</template>

<style scoped>
.tile {
  border: 1px solid black;
  border-radius: 8px;
  padding: 0px 16px;
  margin: 6px;
  text-align: center;
  transition: transform 0.2s;
  background-color: white;
}
.tile:hover {
  transform: scale(1.05);
}
.tile p {
  background-color: white ;
}
a {
  text-decoration: none;
  color: inherit;
}
.tile-number {
  font-size: 1.8em;
  margin-bottom: 8px;
  background-color: white;
}



</style>