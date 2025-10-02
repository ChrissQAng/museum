<template>
  <div class="tile-grid">
    <h1>Vitrine 1</h1>
    <div class="grid">
      <Tile
        v-for="(d,i) in objectText"
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
import { ref, onMounted } from 'vue';
import Papa from 'papaparse';
const objectText= ref([]);

onMounted(() => {
  fetch('/test01.csv')
    .then(response => response.text())
    .then(csvText => {
      console.log("csvText:", csvText);
      objectText.value = Papa.parse(csvText, {
        header: false,
        skipEmptyLines: true
      }).data;
      console.log("objectText:", objectText.value);
    })
    .catch(error => {
      console.error('Error fetching or parsing CSV:', error);
    });
  // console.log("objectText:", objectText.value);
});

</script>

<style scoped>
.tile-grid {
  padding: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px; background-color: #9A9F86;
}
</style>