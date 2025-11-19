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
 
  <div class="tile">
  <router-link :to="link" @click="handleClick">
    <h3 class="tile-number">{{ number }}</h3>
    <p class="tile-text">{{ text }}</p>
    
  </router-link>
</div>
 
</template>

<style scoped>
.tile {
  border: 1px solid white;
  padding: 0px 16px;
  margin: 6px;
  text-align: center;
  transition: transform 0.2s;
  background-color: white;
  box-shadow: 5px 5px 20px 0px rgba(51, 51, 51, 0.77);
}
.tile:hover {
  transform: scale(1.02);
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