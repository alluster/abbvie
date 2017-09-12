import Vue from 'vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import App from './App'
import Etusivu from './components/Etusivu'
import Kayttajatili from './components/Kayttajatili'
import Haku from './components/Haku'
import Login from './components/Login'
import Julkaisu from './components/Julkaisu'


var contentful = require('contentful')


Vue.use(vueResource)
Vue.use(VueRouter)

const routes = [  { path: '/', component: Login},
                  { path: '/Haku', component: Haku},
                  { path: '/etusivu', component: Etusivu},
                  { path: '/Kayttajatili', component: Kayttajatili},
                  { path: '/Julkaisu/:id', component: Julkaisu}
                ]

const router = new VueRouter({routes})

new Vue({
	router,
	el: '#app',
	template: '<App/>',
	components: { App },
})
