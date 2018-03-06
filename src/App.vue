<template>
  
  <main id="app">
    
    <accountmanager></accountmanager>
    <!-- <First></First> -->
  </main>
</template>

<script>

import accountmanager from "./components/accountmanager.vue";

export default {
  name: "app",
  components: {
    accountmanager
  }
};
</script>

<style lang="scss">

@import '../node_modules/bootstrap/scss/bootstrap.scss';

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>