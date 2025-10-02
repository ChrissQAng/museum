<template>
  <div class="detail">
    <h1>Detailseite {{ id }}</h1>
    <p>Hier sind die Details zur ausgewählten Kachel.</p>
    <router-link to="/">Zurück zur Startseite</router-link>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  id: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.detail {
  padding: 20px;
  text-align: center;
}
</style>