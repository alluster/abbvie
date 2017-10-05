import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import VeeValidate from 'vee-validate'
import VueVideoPlayer from 'vue-video-player'

import Etusivu from './components/Etusivu'
import Haku from './components/Haku'
import Julkaisu from './components/Julkaisu'
import Ohjeet from './components/Ohjeet'
import Asetukset from './components/Asetukset'



Vue.use(vueResource)
Vue.use(VueRouter)
Vue.use(VeeValidate)
Vue.use(VueMaterial)
Vue.use(VueVideoPlayer)


Vue.material.registerTheme('default', {
  primary: ' #051B4A',
  accent: '#051B4A',
  warn: 'red',
  background: 'light-grey'


})
const routes = [  { path: '/', name: 'Etusivu', component: Etusivu},
                  { path: '/haku',  name: 'Haku', component: Haku},
                  { path: '/julkaisu/:id',  name: 'Julkaisu', component: Julkaisu},
                  { path: '/asetukset',  name: 'Asetukset', component: Asetukset},
                  { path: '/ohjeet',  name: 'Ohjeet', component: Ohjeet}
                ]

const router = new VueRouter({routes})

new Vue({
	router,
	el: '#app',
	template: '<App/>',
	components: { App, VueVideoPlayer }

})
