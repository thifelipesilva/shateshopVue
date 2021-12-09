<template>
  <div id="app">
    <Header/>

    <router-view></router-view>
    
    <Footer/>

  </div>
</template>

<script>
import './assets/style/global.css';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components:{
    Header,    
    Footer
  },
  data () {
    return {


    }
  }
}
</script>

<style>
</style>
