<template>
  <div id="app" >
<md-toolbar style="background-color: #051B4A; margin-bottom: 0; color: white; z-index: 101">
    <router-link to="/" style="margin-left: auto; margin-right: auto; width: 8em ">
      <img style="display: block; margin-left: auto; margin-right: auto; padding: 2px; width: 10em; border: none" src="./assets/logo-white.png">
    </router-link>  

  <h2 class="md-button" style="flex: 1; margin-left: 2em">Parkinsonin tauti</h2>
  <h2 class="md-button" style="flex: 1; margin-left: 2em">Autoimmuunisairaudet </h2>
  <h2 class="md-button" style="flex: 1; margin-left: 2em">C-hepatiitti</h2>


  <router-link to="/asetukset" class="md-button" >Kalle Oksa&nbsp;&nbsp;&nbsp;&nbsp;<md-icon style="margin-left: 10px">lock</md-icon></router-link>
</md-toolbar>



  
    <div v-sticky :z-index="100" v-if="[ '#', 'Haku', 'Asetukset', 'Ohjeet', 'Julkaisu' ].indexOf($route.name) > -1" class="secondary-nav">
      <div class="links">
        <router-link to="/" style=" font-weight: 400; text-transform: none" class="md-button"><h5>Duodopa®</h5></router-link>
        <router-link to="/" style="font-weight: 400; text-transform: none" class="md-button"><h5>Etusivu</h5></router-link>
        <router-link to="/asetukset" style="font-weight: 300; text-transform: none" class="md-button"><h5>Asetukset</h5></router-link>
        <router-link to="/haku" style="font-weight: 300; text-transform: none" class="md-button"><h5>Haku</h5></router-link>
        <router-link to="/ohjeet" style="font-weight: 300; text-transform: none" class="md-button"><h5>Ohjeet</h5></router-link>
      </div>    
    </div>
    <router-view></router-view>


  </div>
</template>
<script>
  import VueSticky from 'vue-sticky'



const access_token = process.env.API_KEY
const spaces = process.env.API_SPACE

import Etusivu from './components/Etusivu'
import Asetukset from './components/Asetukset'
import Haku from './components/Haku'
import Julkaisu from './components/Julkaisu'
import Ohjeet from './components/Ohjeet'




export default {
  name: 'app',
  directives: {
    'sticky': VueSticky,
  },
  components: {
    'Asetukset': Asetukset,
    'Etusivu': Etusivu,
    'Haku': Haku,
    'Julkaisu': Julkaisu,
    'Ohjeet': Ohjeet,
  },
 }

</script>
<style lang="css">
#app {
  overflow: show;
}

.container {
  margin: 0%
}

/* Add some top padding to the page content to prevent sudden quick movement (as the navigation bar gets a new position at the top of the page (position:fixed and top:0) */


/*Secondary nav*/
.secondary-nav {
  background: white;
  box-shadow: 0 2px 7px rgba(34,43,52,0.1), 0 1px 0 rgba(227,230,233,0.5);  position: fixed; 
  width: 100%; 
  text-align: center; 
  z-index: 100;
  max-height: 60px;
  min-height: 20px;
}
.links {
  max-width: 100rem;
  margin-left: auto;
  margin-right: auto;
}

/*//Tooltip*/

/* Tooltip container */
.tooltip {
    position: relative;
    display: inline-block;
    color: #051B4A;
}

/* Tooltip text */
.tooltip .tooltiptext {
    visibility: hidden;
    width: 200px;
    background-color: #051B4A;
    color: white;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    top: 150%;
    left: 50%;
    margin-left: -100px;
    padding: 20px;

}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
    visibility: visible;

}
.tooltip .tooltiptext::after {
    content: " ";
    position: absolute;
    bottom: 100%;  /* At the top of the tooltip */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #051B4A transparent;

}

/*Toolip end */


/*Secondary nav*/



md-button {
  font-weight: 300;
  text-transform: none;
  background-color:#051B4A ;
}
html, .root {
  font-size: 18px;
  line-height: 27px;
}
p{
  font-size: 1,5rem;
  line-height: 1,5rem;
  margin: auto;
  font-family: Roboto;

}
md-bottom-bar {
  margin-top: 100rem;
}
h1, .h1 {
  font-size: 4rem;
  line-height: 4.5rem;
  margin-bottom: 3rem;
  font-weight: 400;
}
h2, .h2 {
  font-size: 2rem;
  line-height: 2rem;
  margin-bottom: 1.5rem;
  font-weight: 400; 
}
h3, .h3 {
  font-size: 1.6rem;
  font-weight: 400;
}
h4, .h4 {
  font-size: 1rem;
  font-weight: 400;
}
h5, .h5 {
  font-size: 1rem;
  margin-top: 0rem;
  margin-bottom: 0rem;
  font-weight: 400;
  text-transform: uppercase;
}
p, ul, ol, pre, table, blockquote {
  margin-top: 0rem;
  margin-bottom: 1.5rem;
}
ul ul, ol ol, ul ol, ol ul {
  margin-top: 0rem;
  margin-bottom: 0rem;
}

/* Let's make sure all's aligned */
hr, .hr {
  border: 1px solid;
  margin: -1px 0;
}
a, b, i, strong, em, small, code {
  line-height: 0;
  color: inherit;
  line-height: inherit
}
sub, sup {
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sup {
  top: -0.5em;
}
sub {
  bottom: -0.25em;
}
</style>
