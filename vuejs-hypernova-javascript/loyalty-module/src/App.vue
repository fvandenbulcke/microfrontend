<template>
  <div id="app">
    <LysModule msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import LysModule from './components/LysModule.vue';

export default {
  name: 'app',
  components: {
    LysModule,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
