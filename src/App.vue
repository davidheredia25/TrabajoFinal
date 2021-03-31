<template>
  <div id="app">
    
    <BarraNav></BarraNav>
    <router-view></router-view>
    <Footer></Footer>

  </div>
</template>

<script>
import BarraNav from './components/BarraNav.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    BarraNav,
    Footer
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
  }
 
  
</style>
