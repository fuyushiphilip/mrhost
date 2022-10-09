<template>
  <div id="app">
    <HomeView />
  </div>
</template>

<script>
import HomeView from "../src/view/HomeView.vue";

export default {
  name: "App",
  components: {
    HomeView,
  },
};
</script>

<style scoped>
#app {
  font-family: poppins, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 30px;
}
</style>
