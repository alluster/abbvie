// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import App from './App'
import Hello from './components/Hello'
import Test from './components/Test'
import Search from './components/Search'
import Login from './components/Login'

var contentful = require('contentful')


Vue.use(vueResource)
Vue.use(VueRouter)


const routes = [  { path: '/', component: Login},
                  { path: '/search', component: Search},
                  { path: '/hello', component: Hello},
                  { path: '/Test', component: Test}
                ]

const router = new VueRouter({routes})

// contentful login information

// var ACCESS_TOKEN = '36d87b4c5f2c055c76428045c3c755b8281c1da923ff9293f6cb387d5eb925a7';
// var SPACE_ID = 'crri95q24zbr';
//
// var contentfulClient = contentful.createClient({
//     accessToken: ACCESS_TOKEN,
//     space: SPACE_ID
// });
//
//


/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App },

})
