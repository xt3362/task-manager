<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import MainPage from './components/pages/MainPage.vue';
</script>

<template>
  <MainPage />
</template>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass";
@import 'vue-select/dist/vue-select.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
