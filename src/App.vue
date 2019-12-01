<template>
  <div id="app">
    <site-header />
    <router-view />
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader';

export default {
  components: {
    SiteHeader,
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
  height: 100%;
}
</style>
