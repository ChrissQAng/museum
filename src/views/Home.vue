<template>
  <Header />
  <div class="home">
    
    <TileGrid />
  </div>
</template>

<script setup>
import TileGrid from '../components/TileGrid.vue'
import Header from '../components/Header.vue'
</script>

<style scoped>
.home {
background-color: #9A9F86;
}

</style>