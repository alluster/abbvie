<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br>
    <router-link to="/search">Search</router-link>
    <router-link to="/hello">Hello</router-link>
    <router-link to="/Test">Test</router-link>
    <router-link to="/">Login</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Test from './components/Test'
import Search from './components/Search'
import Login from './components/Login'

export default {
  name: 'app',
  components: {
       'Test': Test,
       'Hello': Hello,
       'Search': Search,
       'Login': Login,
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
  margin-top: 60px;
}
img {
  max-width: 20%;
  margin: 20px
}
</style>
