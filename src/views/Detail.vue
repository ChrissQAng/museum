<template>
  <div class="detail-view">
  <div class="detail">
    <h1>Objekt {{ store.selectedObject?.number }}</h1>
    <div>
    <p>{{ store.selectedObject?.text }}</p>
    <p>{{ store.selectedObject?.textEN }}</p>
    <p>{{ store.selectedObject?.textJP }}</p>
  </div>
</div>
<router-link to="/">ZURÜCK</router-link>
  </div>
</template>

<script setup>
import { store } from '../stores/objectStore';
</script>
<style scoped>
.detail-view {
background-color: #9A9F86;
height: 100vh;
}
.detail-view a{
  position: relative;
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2vh 2vh;
  background-color: white;
  text-decoration: none;
  color: black;
    font-size: 2rem;
}
.detail {
border: 1px solid white;
  padding: 0px 16px;
  margin: 6px;
  text-align: center;
  transition: transform 0.2s;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.detail p, h1 {
  background-color: white ;
  text-decoration: none;
  color: black;
}
p {
  padding: 2% 0;

}
</style>