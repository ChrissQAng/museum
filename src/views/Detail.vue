<template>
  <div class="detail">
    <h1>Detailseite {{ store.selectedObject?.number }}</h1>
    <p>{{ store.selectedObject?.text }}</p>
    <p>{{ store.selectedObject?.textEN }}</p>
    <p>{{ store.selectedObject?.textJP }}</p>
    
    <router-link to="/">Zurück zur Startseite</router-link>
  </div>
</template>

<script setup>
import { store } from '../stores/objectStore';
</script>

<style scoped>
.detail {
  padding: 20px;
  text-align: center;
}
</style>