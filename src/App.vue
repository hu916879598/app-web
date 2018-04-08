<template>
  <div id="app">
    <router-view></router-view>
    <tabbar v-if="$route.meta.navShow"></tabbar>
  </div>
</template>

<script>

import Tabbar from "@view/tabbar";

export default {
  name: 'App',
  components:{
    Tabbar
  },
  data() {
    return {
    }
  },
  mounted() {
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
