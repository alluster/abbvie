<template>
  <div id="app" >
    <div v-cloak>
<md-toolbar style="background-color: #051B4A; margin-bottom: 0; color: white; z-index: 101">
    <router-link to="/" style="margin-left: auto; margin-right: auto; width: 8em ">
      <img style="display: block; margin-left: auto; margin-right: auto; padding: 2px; width: 10em;" src="./assets/logo-white.png">
    </router-link>  

  <h2 class="md-button" style="flex: 1; margin-left: 2em">Duodopa®</h2>
  <h2 class="md-button" style="flex: 1; margin-left: 2em">Humira®</h2>
  <h2 class="md-button" style="flex: 1; margin-left: 2em">Exviera®</h2>
  <h2 class="md-button" style="flex: 1; margin-left: 2em">Chirocaine®</h2>
  <h2 class="md-button" style="flex: 1; margin-left: 2em">Norvir®</h2>
  <router-link to="/asetukset" class="md-button" >Kalle Oksa&nbsp;&nbsp;&nbsp;&nbsp;<md-icon style="margin-left: 10px">lock</md-icon></router-link>
</md-toolbar>


<!-- <md-toolbar style="background-color: gray; color: white;">


  <router-link to="/"><h2 style="flex: 1; margin-left: 2em" class="md-button md-raised">Etusivu</h2></router-link>
  <router-link to="/asetukset"><h2 style="flex: 2; font-weight: 300; text-transform: none" class="md-button md-raised">Asetukset</h2></router-link>
  <router-link to="/ohjeet"><h2  style="flex: 2; font-weight: 300; text-transform: none" class="md-button md-raised">Ohjeet</h2></router-link>
  <router-link to="/haku"><h2  style="flex: 2; font-weight: 300; text-transform: none" class="md-button md-raised">Haku</h2></router-link>
</md-toolbar>
 -->


  
    <md-toolbar v-sticky :z-index="100"
  :sticky-top="64" v-if="['Haku', 'Asetukset', 'Ohjeet', 'Julkaisu' ].indexOf($route.name) > -1" class="secondary-nav">
      <div class="links">

        <router-link to="/" style="flex: 2; font-weight: 400; text-transform: none" class="md-button"><h5>Duodopa®</h5></router-link>
        <router-link to="/" style="flex: 2; font-weight: 400; text-transform: none" class="md-button"><h5>Etusivu</h5></router-link>
        <router-link to="/asetukset" style="flex: 2; font-weight: 300; text-transform: none" class="md-button"><h5>Asetukset</h5></router-link>
        <router-link to="/haku" style="flex: 2; font-weight: 300; text-transform: none" class="md-button"><h5>Haku</h5></router-link>
        <router-link to="/ohjeet" style="flex: 2; font-weight: 300; text-transform: none" class="md-button"><h5>Ohjeet</h5></router-link>
      </div>    
    </md-toolbar>
    <router-view></router-view>
<md-bottom-bar style="background-color: #212121">
  <md-bottom-bar-item ><router-link to="/" style="margin-left: auto; margin-right: auto; width: 8em ">
      <img style="display: block; margin-left: auto; margin-right: auto; padding: 2px; width: 10em;" src="./assets/logo-white.png">
    </router-link> </md-bottom-bar-item>

</md-bottom-bar>
  </div>
</div>
</template>
<script>
  import VueSticky from 'vue-sticky'


const access_token = '36d87b4c5f2c055c76428045c3c755b8281c1da923ff9293f6cb387d5eb925a7'
const spaces = 'crri95q24zbr'

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




/*Secondary nav*/
.secondary-nav {
  background: rgba(255,255,255,1);
  box-shadow: 0 10px 20px rgba(80,80,80,.08);
  position: fixed; 
  min-width: 100%; 
  text-align: center; 
  z-index: 100;
  top: 64px;
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
