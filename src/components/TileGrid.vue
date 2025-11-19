<template>
  <div class="tile-grid">
    <h3>Vitrine 1</h3>
    <div class="grid">
      <Tile
        v-for="(d,i) in objectText"
        :key="i"
        :number=objectText[i][1]
        :text=objectText[i][2]
        :textEN=objectText[i][3]
        :textJP=objectText[i][4]
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
      objectText.value = Papa.parse(csvText, {
        header: false,
        skipEmptyLines: true
      }).data;
      console.log("objectText:", objectText.value);
    })
    .catch(error => {
      console.error('Error fetching or parsing CSV:', error);
    });

});

</script>

<style scoped>
.tile-grid {
  padding: 20px;
}
h3 {
  font-size: 1.9rem;
  background-color: white;
  margin-left: 0.3rem;
  border: 0.0625rem solid #ccc;
  padding: 0.375rem;
  display: inline-block;
  box-shadow: 5px 5px 20px 0px rgba(51, 51, 51, 0.77);
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
</style>