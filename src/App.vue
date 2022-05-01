<template>
  <navBar/>
  <backGround/>
  <caRousel/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import backGround from './components/background.vue'
import navBar from './components/navBar.vue'
import caRousel from './components/carousel.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    backGround,
    navBar,
    caRousel
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
