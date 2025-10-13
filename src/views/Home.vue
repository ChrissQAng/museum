<template>
  <div>
    <h1>Willkommen im Siebold Museum</h1>
    <img src="../../public/museumBanner.jpg" alt="Banner Siebold Museum">
    <TileGrid />
  </div>
</template>

<script setup>
import TileGrid from '../components/TileGrid.vue'
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}
img {
  width: 15%;
  height: auto;
  margin-left: 80%;
  margin-top: -10%;
}
</style>