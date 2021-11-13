<template>
  <div id="app">
    <div id = "header">
      <Header username="random" email="email@random.com"/>
    </div>
    <div id = "content">
      <router-view/>
    </div>
    <div id = "footer">
      <Footer/>
    </div>
  </div>
</template>

<script>
import store from './store/store'
import Header from './components/common/Header'
import Footer from './components/common/Footer'

export default {
  name: 'App',
  store,
  mounted () {
    this.$store.dispatch('fetchAllPosts')
  },
  components: {
    Header,
    Footer
  }

}
</script>

<style>
#header{
  width: 100%;
  min-height:10vh;
}
#footer{
  width: 100%;
  min-height:10vh;
}
#content{
  min-height: 70vh;
  width:100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
