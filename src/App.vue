<template>
  <div id="app">
      <ul class="nav">
        <li><router-link to="/etusivu"><img src="./assets/logo.png">Duodopa® -palvelu</router-link></li>
        <li><router-link to="/Haku">Haku</router-link></li>
        <li><router-link to="/etusivu">Etusivu</router-link></li>
        <li><router-link to="/Kayttajatili">Käyttäjätili</router-link></li>
        <li><router-link to="/">Kirjaudu palveluun</router-link></li>
      </ul>
    <router-view></router-view>

  </div>
</template>

<script>
const access_token = '36d87b4c5f2c055c76428045c3c755b8281c1da923ff9293f6cb387d5eb925a7'
const spaces = 'crri95q24zbr'
import Etusivu from './components/Etusivu'
import Kayttajatili from './components/Kayttajatili'
import Haku from './components/Haku'
import Login from './components/Login'
import Julkaisu from './components/Julkaisu'




export default {
  name: 'app',

  components: {
       'Kayttajatili': Kayttajatili,
       'Etusivu': Etusivu,
       'Haku': Haku,
       'Login': Login,
       'Julkaisu': Julkaisu
  },

}
</script >

<style lang="css">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
body {margin: 0;}

.nav {
    display: table-cell;
    vertical-align: middle;
    background-color: white;
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 0;
    justify-content: space-between;
    box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);
    margin-bottom: 40px

}
ul {
    display: flex;
    text-align: left;
    list-style-type: none;
    margin: 0;
    padding: 20px;
    overflow: hidden;
    background-color: white;
    color: gray;

}
ul:first-child {
  vertical-align: middle;
}

li {
    flex: 1;
    flex-wrap: wrap;
    float: left;

}

li img {
    flex: 1;
    float: left;
    max-width: 150px;
    vertical-align: middle;
    padding: 0;
    margin-bottom: 10px

}
li a {
    color: gray;
    text-decoration: none;
    vertical-align: middle;
}

li a:hover {
    background-color: white;
    color: purple
}

</style>
