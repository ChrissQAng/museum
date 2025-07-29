<template>
  <div class="tile-grid">
    <h1>Tile Grid</h1>
    <div class="grid">
      <Tile
        v-for="i in 27"
        :key="i"
        :number="i"
        :text="'Tile ' + i"
        :link="'/detail/' + i"
      />
    </div>
  </div>
</template>

<script setup>
import Tile from './Tile.vue'
</script>

<style scoped>
.tile-grid {
  padding: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
}
</style>