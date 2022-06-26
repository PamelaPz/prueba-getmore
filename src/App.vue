<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "./view/Home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style lang="stylus">
@import "./styles/styles.styl";
</style>
