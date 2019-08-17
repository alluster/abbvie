webpackJsonp([2],{

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_router__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_resource__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_material__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_material___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue_material__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_material_dist_vue_material_css__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_material_dist_vue_material_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vue_material_dist_vue_material_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vee_validate__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue_video_player__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue_video_player___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_vue_video_player__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Etusivu__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Haku__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Julkaisu__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Ohjeet__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_Asetukset__ = __webpack_require__(45);
















__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_vue_resource__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_vue_router__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_6_vee_validate__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_4_vue_material___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_7_vue_video_player___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__webpack_require__(431));

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].material.registerTheme('default', {
  primary: ' #051B4A',
  accent: '#051B4A',
  warn: 'red',
  background: 'light-grey'
});

var routes = [{ path: '/', name: 'Etusivu', component: __WEBPACK_IMPORTED_MODULE_8__components_Etusivu__["a" /* default */] }, { path: '/haku', name: 'Haku', component: __WEBPACK_IMPORTED_MODULE_9__components_Haku__["a" /* default */] }, { path: '/julkaisu/:id', name: 'Julkaisu', component: __WEBPACK_IMPORTED_MODULE_10__components_Julkaisu__["a" /* default */] }, { path: '/asetukset', name: 'Asetukset', component: __WEBPACK_IMPORTED_MODULE_12__components_Asetukset__["a" /* default */] }, { path: '/ohjeet', name: 'Ohjeet', component: __WEBPACK_IMPORTED_MODULE_11__components_Ohjeet__["a" /* default */] }];

var router = new __WEBPACK_IMPORTED_MODULE_2_vue_router__["a" /* default */]({ routes: routes });

new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  router: router,
  el: '#app',
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */], VueVideoPlayer: __WEBPACK_IMPORTED_MODULE_7_vue_video_player___default.a }

});

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_dbb0e428_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(423);
function injectStyle (ssrContext) {
  __webpack_require__(206)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_dbb0e428_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 206:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_sticky__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_sticky___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_sticky__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Etusivu__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Asetukset__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Haku__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Julkaisu__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Ohjeet__ = __webpack_require__(85);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var access_token = Object({"NODE_ENV":"production"}).API_KEY;
var spaces = Object({"NODE_ENV":"production"}).API_SPACE;







/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app',
  directives: {
    'sticky': __WEBPACK_IMPORTED_MODULE_0_vue_sticky___default.a
  },
  components: {
    'Asetukset': __WEBPACK_IMPORTED_MODULE_2__components_Asetukset__["a" /* default */],
    'Etusivu': __WEBPACK_IMPORTED_MODULE_1__components_Etusivu__["a" /* default */],
    'Haku': __WEBPACK_IMPORTED_MODULE_3__components_Haku__["a" /* default */],
    'Julkaisu': __WEBPACK_IMPORTED_MODULE_4__components_Julkaisu__["a" /* default */],
    'Ohjeet': __WEBPACK_IMPORTED_MODULE_5__components_Ohjeet__["a" /* default */]
  }
});

/***/ }),

/***/ 210:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({

  name: 'etusivu',
  data: function data() {
    return {
      // header: 'Tervetuloa Abbvie Duodopa® palveluun',
      // lead: 'Ole hyvä ja kirjaudu jatkaaksesi palveluun. Mikäli sinulla ei vielä ole tunnuksia voit rekisteröityä. mikäli olet unohtanut salasanasi tai käyttäjätunnuksesi, paina tästä',
      header: 'Duodopa® Infuusiojärjestelmä ',
      lead: 'Duodopa®-valmistetta käytetään Parkinsonin taudin hoitoon.'
    };
  },

  method: {
    login: function login() {
      console.log("jee");
      this.name = true;
    }
  }
});

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"etusivu"},[_c('div',{staticClass:"tausta"},[_c('md-layout',{staticStyle:{"color":"white"}},[_c('md-layout',{staticStyle:{"box-shadow":"none","border":"none","position":"relative"},attrs:{"md-tag":"md-card"}},[_c('hgroup',{staticStyle:{"color":"white","margin-left":"auto","margin-right":"auto"}},[_c('h1',[_vm._v(_vm._s(_vm.header))]),_vm._v(" "),_c('h2',[_vm._v(_vm._s(_vm.lead))]),_vm._v(" "),_c('router-link',{attrs:{"to":"/haku"}},[_c('md-button',{staticClass:"md-raised md-primary",staticStyle:{"background-color":"#051B4A","color":"white"}},[_vm._v("Kirjaudu  "),_c('md-icon',{staticStyle:{"color":"white"}},[_vm._v("arrow_right")])],1)],1),_vm._v(" "),_c('router-link',{attrs:{"to":"/asetukset"}},[_c('md-button',{staticClass:"md-raised md-primary",staticStyle:{"background-color":"white","color":"#051B4A"}},[_vm._v("Rekisteröidy käyttäjäksi  "),_c('md-icon',{staticStyle:{"color":"#051B4A"}},[_vm._v("lock_open")])],1)],1)],1)])],1)],1),_vm._v(" "),_c('div',{staticClass:"container"},[_c('div',{staticClass:"container-content"},[_c('h2',{staticStyle:{"display":"inline"}},[_c('md-icon',[_vm._v("lock_open")]),_vm._v("  Tervetuloa Abbvien Duodopa® -palveluun (beta).")],1),_vm._v(" "),_c('router-link',{attrs:{"to":"/haku"}},[_c('md-button',{staticClass:"md-raised md-primary",staticStyle:{"display":"inline","float":"right","background-color":"#051B4A","color":"white"}},[_vm._v("Kirjaudu  "),_c('md-icon',{staticStyle:{"color":"white"}},[_vm._v("arrow_right")])],1)],1),_vm._v(" "),_c('h4',[_vm._v("Tämä sivusto on luotu esittelemään rakenteilla olevaa Duodopa® palvelua. Palveluun rekisteröityminen ei ole pakollista, vaan voit vapaasti siirtyä palveluun painamalla \"Kirjaudu\".  ")])],1)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 213:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'asetukset',

  data: function data() {
    return {
      newUser: {},
      users: [],
      user: {
        firstName: 'Aleksanteri',
        lastName: 'Heliövaara'
      }
    };
  },

  methods: {
    buttonPress: function buttonPress() {
      answer.innerHTML = 'moi';
    },
    pressKey: function pressKey(e) {
      console.log(e.target.value);
    },
    hitEnter: function hitEnter() {
      console.log('enter');
    },
    deleteUser: function deleteUser(user) {
      this.users.splice(this.users.indexOf(user), 1);
    },
    addUser: function addUser(e) {
      //Viedään user eteenpäin
      this.users.push({
        name: this.newUser.name,
        email: this.newUser.email,
        contacted: false
      });
      // estetään formia menemästä läpi oikesti
      e.preventDefault();
    }

  },
  computed: {
    fullName: function fullName() {
      return this.user.firstName + ' ' + this.user.lastName;
    }
  }

});

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"asetukset"},[_c('div',{staticClass:"tausta"},[_c('md-layout',{staticStyle:{"color":"white"}},[_c('md-layout',{staticStyle:{"overflow":"hidden"}},[_c('div',{staticStyle:{"min-width":"60rem","margin-right":"auto","margin-left":"auto","margin-top":"2rem"}},[_c('h1',[_vm._v("Asetukset")]),_vm._v(" "),_c('h2',[_vm._v("Tällä sivulla voit muuttaa käyttäjätietojasi ja muita asetuksia")])])])],1)],1),_vm._v(" "),_c('div',{staticClass:"container"},[_c('h3',[_vm._v("Kalle Oksa")]),_vm._v(" "),_c('form',{attrs:{"novalidate":""},on:{"submit":function($event){$event.stopPropagation();$event.preventDefault();_vm.submit($event)}}},[_c('md-input-container',[_c('label',[_vm._v("Nimi")]),_vm._v(" "),_c('md-input',{model:{value:(_vm.initialValue),callback:function ($$v) {_vm.initialValue=$$v},expression:"initialValue"}})],1),_vm._v(" "),_c('md-input-container',[_c('label',[_vm._v("Sukunimi")]),_vm._v(" "),_c('md-autocomplete',{attrs:{"fetch":_vm.fetchFunction},model:{value:(_vm.autocompleteValue),callback:function ($$v) {_vm.autocompleteValue=$$v},expression:"autocompleteValue"}})],1),_vm._v(" "),_c('md-input-container',[_c('label',[_vm._v("Sähköpostiosoite")]),_vm._v(" "),_c('md-input',{attrs:{"placeholder":"kalle.oksa@siili.com  "}})],1),_vm._v(" "),_c('router-link',{attrs:{"to":"/haku"}},[_c('md-button',{staticClass:"md-raised md-primary",staticStyle:{"background-color":"#051B4A","color":"white"}},[_vm._v("Tallenna  "),_c('md-icon',{staticStyle:{"color":"white"}},[_vm._v("save")])],1)],1),_vm._v(" "),_c('router-link',{attrs:{"to":"/haku"}},[_c('md-button',{staticClass:"md-raised md-primary",staticStyle:{"background-color":"#051B4A","color":"white"}},[_vm._v("Palaa etusivulle  "),_c('md-icon',{staticStyle:{"color":"white"}},[_vm._v("keyboard_return")])],1)],1)],1)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 216:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Video__ = __webpack_require__(47);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var access_token = '01a2c19d945b439da132249d1b2c265ea71e71a39be1ffa0cce5328a7d10d388';
var spaces = 'gux1c3twzpd4';



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'haku',
  data: function data() {
    return {
      testSearch: '',
      filter: '',
      search: '',
      moi: '',
      result: [],
      filters: [{
        id: 6,
        name: 'Video',
        active: false

      }, {
        id: 1,
        name: 'Hoidon toteutus',
        active: false
      }, {
        id: 2,
        name: 'Hoidon suunnittelu',
        active: false

      }, {
        id: 3,
        name: 'Hoidon seuranta',
        active: false

      }, {
        id: 4,
        name: 'Potilasmateriaali',
        active: false

      }, {
        id: 5,
        name: 'Tutkimukset',
        active: false
      }],
      seenList: false,
      seenCards: true,
      vertical: 'bottom',
      horizontal: 'center',
      duration: 6000

    };
  },

  components: {
    'Video': __WEBPACK_IMPORTED_MODULE_0__Video__["a" /* default */]
  },
  methods: {
    open: function open() {
      this.$refs.snackbar.open();
    },
    changeSearch: function changeSearch(event) {
      this.search = event.target.value;
    },
    active: function active(filter) {
      filter.active = !filter.active;
    },
    fetchItems: function fetchItems() {
      var _this = this;

      this.$http.get('https://cdn.contentful.com/spaces/' + spaces + '/entries?access_token=' + access_token + '')
      // https://cdn.contentful.com/spaces/gux1c3twzpd4/entries?access_token=01a2c19d945b439da132249d1b2c265ea71e71a39be1ffa0cce5328a7d10d388
      .then(function (response) {
        _this.result = JSON.parse(response.body).items.map(function (a) {
          var imageId = a.fields.images ? a.fields.images : [{ 'sys': { 'id': '' } }];
          var sisaltoTyyppi = a.fields.sisaltoTyyppi;

          var dataObject = {
            'id': a.sys.id,
            'name': a.fields.name,
            'leadParagraph': a.fields.leadParagraph,
            'bodyText': a.fields.bodyText,
            'imageUrl': '',
            'createdAt': a.sys.createdAt,
            'imageId': imageId,
            'type': sisaltoTyyppi || []
          };
          if (imageId[0].sys.id) {
            _this.$http.get('https://cdn.contentful.com/spaces/' + spaces + '/assets/' + imageId[0].sys.id + '?access_token=' + access_token + '')
            // https://cdn.contentful.com/spaces/gux1c3twzpd4/assets/4SDu2OUqvS4C2MseqqGyAs?access_token=01a2c19d945b439da132249d1b2c265ea71e71a39be1ffa0cce5328a7d10d388
            .then(function (response) {
              dataObject.imageUrl = JSON.parse(response.body).fields.file.url;
            });
          }
          return dataObject;
        });
      });
    },


    filterCards: function filterCards() {
      $('#filterList').addClass('.show-list');
    }

  },
  created: function created() {
    this.fetchItems();
  },

  computed: {
    filteredSearch: function filteredSearch() {
      var _this2 = this;

      return this.result.filter(function (item) {
        if (item && item.name && item && item.leadParagraph && item && item.bodyText && item.type) {
          return item.name.toLowerCase().indexOf(_this2.search.toLowerCase()) > -1 || item.leadParagraph.toLowerCase().indexOf(_this2.search.toLowerCase()) > -1 || item.bodyText.toLowerCase().indexOf(_this2.search.toLowerCase()) > -1 || item.type.includes(_this2.search);
        }
      });
    }
  }
});

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_video_player__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_video_player___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_video_player__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

__webpack_require__(220);
__webpack_require__(221);


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'video',
  data: function data() {
    return {
      src: '',
      loadedRatio: 0,
      page: 1,
      numPages: 0,
      rotate: 0,
      playerOptions: {
        muted: true,
        autoplay: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: "video/mp4",
          src: '/static/video.mp4'
        }],
        poster: "/static/favicon.png"
      }
    };
  },

  components: {
    videoPlayer: __WEBPACK_IMPORTED_MODULE_0_vue_video_player__["videoPlayer"]

  },
  methods: {
    onPlayerPlay: function onPlayerPlay(player) {
      // console.log('player play!', player)
    },
    onPlayerPause: function onPlayerPause(player) {
      // console.log('player pause!', player)
    },

    // ...player event

    // or listen state event
    playerStateChanged: function playerStateChanged(playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },


    // player is ready
    playerReadied: function playerReadied(player) {
      console.log('the player is readied', player);
      // you can use it to do something...
      // player.[methods]
    }
  },
  computed: {
    player: function player() {
      return this.$refs.videoPlayer.player;
    }
  }

});

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_player_vue__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_bd7a2f54_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_vue_loader_lib_selector_type_template_index_0_player_vue__ = __webpack_require__(251);
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_player_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_bd7a2f54_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_vue_loader_lib_selector_type_template_index_0_player_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);

//
//
//
//
//
//

window.videojs = __webpack_require__(49);
videojs = videojs.default || videojs;
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'video-player',
  props: {
    options: {
      type: Object,
      required: true
    },
    start: {
      type: Number,
      default: function _default() {
        return 0;
      }
    },
    playsinline: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    customEventName: {
      type: String,
      default: function _default() {
        return 'statechanged';
      }
    }
  },
  mounted: function mounted() {
    if (!this.player) {
      this.initialize();
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.player) {
      this.dispose();
    }
  },
  methods: {
    initialize: function initialize() {

      // init
      var self = this;
      this.player = null;

      // videojs options
      var videoOptions = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({
        autoplay: false,
        controls: true,
        preload: 'auto',
        fluid: false,
        muted: false,
        width: '100%',
        height: '360',
        language: 'en',
        controlBar: {
          remainingTimeDisplay: false,
          playToggle: {},
          progressControl: {},
          fullscreenToggle: {},
          volumeMenuButton: {
            inline: false,
            vertical: true
          }
        },
        techOrder: ['html5'],
        plugins: {}
      }, this.options);

      // check sources
      /*
      if (!videoOptions.sources || !videoOptions.sources.length) {
        console.warn('Missing required option: "sources".')
        return false
      }
      */

      // ios fullscreen
      var playsinline = this.playsinline;
      if (playsinline) {
        this.$el.children[0].setAttribute('playsinline', playsinline);
        this.$el.children[0].setAttribute('webkit-playsinline', playsinline);
      }

      // emit event
      var emitPlayerState = function emitPlayerState(event, value) {
        if (event) {
          self.$emit(event, self.player);
        }
        if (value) {
          var values = {};
          values[event] = value;
          self.$emit(self.customEventName, values);
        }
      };

      // videoOptions
      // console.log(videoOptions)

      // avoid error "VIDEOJS: ERROR: Unable to find plugin: __ob__"
      if (videoOptions.plugins) {
        delete videoOptions.plugins.__ob__;
      }

      this.player = videojs(this.$el.children[0], videoOptions, function () {

        // player readied
        var _this = this;
        self.$emit('ready', self.player);

        // events
        var events = ['loadeddata', 'canplay', 'canplaythrough', 'play', 'pause', 'waiting', 'playing', 'ended', 'error'];
        for (var i = 0; i < events.length; i++) {
          (function (event) {
            _this.on(event, function () {
              emitPlayerState(event, true);
            });
          })(events[i]);
        }

        this.on('timeupdate', function () {
          emitPlayerState('timeupdate', this.currentTime());
        });
      });
    },
    dispose: function dispose() {
      if (this.player && videojs) {
        this.player.pause && this.player.pause();
        videojs(this.$el.children[0]).dispose();
        if (!this.$el.children.length) {
          var video = document.createElement('video');
          video.className = 'video-js';
          this.$el.appendChild(video);
        }
        this.player = null;
      }
    }
  },
  watch: {
    options: {
      deep: true,
      handler: function handler(options, oldOptions) {
        this.dispose();
        if (options && options.sources && options.sources.length) {
          this.initialize();
        }
      }
    }
  }
});

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"video-player"},[_c('video',{staticClass:"video-js"})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"video "},[_c('md-card-media',[_c('div',{staticClass:"item"},[_c('div',{staticClass:"player"},[_c('video-player',{ref:"videoPlayer",staticClass:"vjs-custom-skin",attrs:{"options":_vm.playerOptions,"playsinline":true},on:{"play":function($event){_vm.onPlayerPlay($event)},"pause":function($event){_vm.onPlayerPause($event)},"ended":function($event){_vm.onPlayerEnded($event)},"loadeddata":function($event){_vm.onPlayerLoadeddata($event)},"waiting":function($event){_vm.onPlayerWaiting($event)},"playing":function($event){_vm.onPlayerPlaying($event)},"timeupdate":function($event){_vm.onPlayerTimeupdate($event)},"canplay":function($event){_vm.onPlayerCanplay($event)},"canplaythrough":function($event){_vm.onPlayerCanplaythrough($event)},"read":_vm.playerReadied,"statechanged":function($event){_vm.playerStateChanged($event)}}})],1)])])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"haku"},[_c('div',{staticClass:"container"},[_c('div',{staticStyle:{"min-width":"60rem","margin-right":"auto","margin-left":"auto","margin-top":"2rem"}}),_vm._v(" "),_c('div',[_c('input',{staticClass:"search-input",attrs:{"type":"search","placeholder":"Anna hakusana"},on:{"input":_vm.changeSearch}})]),_vm._v(" "),_vm._l((_vm.filters),function(filter){return _c('div',{staticClass:"btn-group",staticStyle:{"display":"inline-block"}},[_c('button',{staticClass:"button",class:{active: filter.active },staticStyle:{"font-size":"12px","color":"white"},on:{"click":function($event){_vm.active(filter); _vm.search=(_vm.search + filter.name)}}},[_vm._v(_vm._s(filter.name))])])}),_vm._v(" "),_c('div',{staticClass:"tooltip"},[_c('md-icon',[_vm._v("help")]),_vm._v(" "),_c('span',{staticClass:"tooltiptext"},[_vm._v("Aktivoi filteri klikkaamalla sitä. Poista käytöstä painamalla ")])],1),_vm._v(" "),_c('div',{staticStyle:{"flex":"1","flex-wrap":"nowrap","align-self":"flex-end","margin-top":"2rem"}},[_c('p',{staticStyle:{"text-align":"right"}},[_c('md-button',{staticClass:"filter-button-left",on:{"click":function($event){_vm.seenList=false}}},[_c('md-icon',[_vm._v("view_week")])],1),_vm._v(" "),_c('md-button',{staticClass:"filter-button-right",on:{"click":function($event){_vm.seenList=true}}},[_c('md-icon',[_vm._v("view_stream")])],1)],1)]),_vm._v(" "),(_vm.seenList)?_c('md-table',_vm._l((_vm.filteredSearch),function(item){return _c('md-table-body',[_c('md-table-row',[_c('md-table-cell',{staticStyle:{"color":"#051B4A"}},[_c('router-link',{attrs:{"to":'/julkaisu/'+item.id}},[_c('h3',[_vm._v(_vm._s(item.name))])])],1),_vm._v(" "),_c('md-table-cell',{staticStyle:{"width":"20%"}},[_c('router-link',{attrs:{"to":'/julkaisu/'+item.id}},[_c('md-button',{staticClass:"md-raised md-primary",staticStyle:{"background-color":"#051B4A","color":"white","width":"100%"}},[_vm._v("Tarkastele sisältöä  "),_c('md-icon',{staticStyle:{"color":"white"}},[_vm._v("search")])],1)],1)],1)],1)],1)})):_vm._e(),_vm._v(" "),_c('div',{staticClass:"cards"},_vm._l((_vm.filteredSearch),function(item){return _c('div',{staticClass:"card radius shadowDepth1"},[_c('router-link',{attrs:{"to":'/julkaisu/'+item.id}},[_c('div',{staticClass:"card__image border-tlr-radius"},[(item.imageUrl)?_c('img',{attrs:{"src":item.imageUrl,"alt":"Image"}}):_c('img',{attrs:{"src":__webpack_require__(254),"alt":"Product image"}})])]),_vm._v(" "),_c('div',{staticClass:"card__content card__padding"},[_c('article',{staticClass:"card__article"},[_c('router-link',{attrs:{"to":'/julkaisu/'+item.id}},[_c('a',[_c('h3',{staticStyle:{"color":"#051B4A"}},[_vm._v(_vm._s(item.name))])])]),_vm._v(" "),_c('div',{staticStyle:{"font-size":"15px","margin-bottom":"5px"}},[_c('a',{staticStyle:{"font-weight":"700"},attrs:{"href":"#"}},[_vm._v(" "+_vm._s(_vm._f("moment")(item.createdAt,"D.M.YYYY")))])]),_vm._v(" "),_c('p',[_vm._v(_vm._s(item.leadParagraph))]),_vm._v(" "),_vm._l((item.type),function(type){return _c('div',{staticClass:"md-chip"},[_c('span',[_vm._v(_vm._s(type)+" ")])])})],2)]),_vm._v(" "),_c('div',{staticClass:"card__action"})],1)})),_vm._v(" "),_c('form',{attrs:{"novalidate":""},on:{"submit":function($event){$event.stopPropagation();$event.preventDefault();_vm.open($event)}}},[_c('md-button',{staticClass:"md-primary md-raised",attrs:{"type":"submit"}},[_vm._v("Anna lisäneuvoja käytön tueksi")]),_vm._v(" "),_c('md-snackbar',{ref:"snackbar",attrs:{"md-position":_vm.vertical + ' ' + _vm.horizontal,"md-duration":_vm.duration}},[_c('span',[_vm._v("Mikäli et näe hakutuloksia, kokeile päivittää ikkuna.")]),_vm._v(" "),_c('md-button',{staticClass:"md-accent",attrs:{"md-theme":"light-blue"},on:{"click":function($event){_vm.$refs.snackbar.close()}}},[_vm._v("Sulje")])],1)],1)],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/logo.3c4ede3.png";

/***/ }),

/***/ 255:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_markdown__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_markdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_markdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Video__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Pdf__ = __webpack_require__(372);
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var access_token = '01a2c19d945b439da132249d1b2c265ea71e71a39be1ffa0cce5328a7d10d388';
var spaces = 'gux1c3twzpd4';

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'julkaisu',
  data: function data() {
    return {
      id: this.$route.params.id,
      result: []
    };
  },

  components: {
    VueMarkdown: __WEBPACK_IMPORTED_MODULE_0_vue_markdown___default.a,
    'Video': __WEBPACK_IMPORTED_MODULE_1__Video__["a" /* default */],
    'Pdf': __WEBPACK_IMPORTED_MODULE_2__Pdf__["a" /* default */]
  },
  methods: {
    fetchJulkaisu: function fetchJulkaisu() {
      var _this = this;

      this.$http.get('https://cdn.contentful.com/spaces/' + spaces + '/entries/' + this.id + '/?access_token=' + access_token + '').then(function (response) {
        _this.result = JSON.parse(response.body);
      });
    }
  },

  created: function created() {
    this.fetchJulkaisu(this.$route.params.id);
  }

});

/***/ }),

/***/ 282:
/***/ (function(module, exports) {

module.exports = {"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\"","QUOT":"\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}

/***/ }),

/***/ 332:
/***/ (function(module, exports) {

module.exports = {"100":"💯","1234":"🔢","grinning":"😀","smiley":"😃","smile":"😄","grin":"😁","laughing":"😆","satisfied":"😆","sweat_smile":"😅","joy":"😂","rofl":"🤣","relaxed":"☺️","blush":"😊","innocent":"😇","slightly_smiling_face":"🙂","upside_down_face":"🙃","wink":"😉","relieved":"😌","heart_eyes":"😍","kissing_heart":"😘","kissing":"😗","kissing_smiling_eyes":"😙","kissing_closed_eyes":"😚","yum":"😋","stuck_out_tongue_winking_eye":"😜","stuck_out_tongue_closed_eyes":"😝","stuck_out_tongue":"😛","money_mouth_face":"🤑","hugs":"🤗","nerd_face":"🤓","sunglasses":"😎","clown_face":"🤡","cowboy_hat_face":"🤠","smirk":"😏","unamused":"😒","disappointed":"😞","pensive":"😔","worried":"😟","confused":"😕","slightly_frowning_face":"🙁","frowning_face":"☹️","persevere":"😣","confounded":"😖","tired_face":"😫","weary":"😩","triumph":"😤","angry":"😠","rage":"😡","pout":"😡","no_mouth":"😶","neutral_face":"😐","expressionless":"😑","hushed":"😯","frowning":"😦","anguished":"😧","open_mouth":"😮","astonished":"😲","dizzy_face":"😵","flushed":"😳","scream":"😱","fearful":"😨","cold_sweat":"😰","cry":"😢","disappointed_relieved":"😥","drooling_face":"🤤","sob":"😭","sweat":"😓","sleepy":"😪","sleeping":"😴","roll_eyes":"🙄","thinking":"🤔","lying_face":"🤥","grimacing":"😬","zipper_mouth_face":"🤐","nauseated_face":"🤢","sneezing_face":"🤧","mask":"😷","face_with_thermometer":"🤒","face_with_head_bandage":"🤕","smiling_imp":"😈","imp":"👿","japanese_ogre":"👹","japanese_goblin":"👺","hankey":"💩","poop":"💩","shit":"💩","ghost":"👻","skull":"💀","skull_and_crossbones":"☠️","alien":"👽","space_invader":"👾","robot":"🤖","jack_o_lantern":"🎃","smiley_cat":"😺","smile_cat":"😸","joy_cat":"😹","heart_eyes_cat":"😻","smirk_cat":"😼","kissing_cat":"😽","scream_cat":"🙀","crying_cat_face":"😿","pouting_cat":"😾","open_hands":"👐","raised_hands":"🙌","clap":"👏","pray":"🙏","handshake":"🤝","+1":"👍","thumbsup":"👍","-1":"👎","thumbsdown":"👎","fist_oncoming":"👊","facepunch":"👊","punch":"👊","fist_raised":"✊","fist":"✊","fist_left":"🤛","fist_right":"🤜","crossed_fingers":"🤞","v":"✌️","metal":"🤘","ok_hand":"👌","point_left":"👈","point_right":"👉","point_up_2":"👆","point_down":"👇","point_up":"☝️","hand":"✋","raised_hand":"✋","raised_back_of_hand":"🤚","raised_hand_with_fingers_splayed":"🖐","vulcan_salute":"🖖","wave":"👋","call_me_hand":"🤙","muscle":"💪","middle_finger":"🖕","fu":"🖕","writing_hand":"✍️","selfie":"🤳","nail_care":"💅","ring":"💍","lipstick":"💄","kiss":"💋","lips":"👄","tongue":"👅","ear":"👂","nose":"👃","footprints":"👣","eye":"👁","eyes":"👀","speaking_head":"🗣","bust_in_silhouette":"👤","busts_in_silhouette":"👥","baby":"👶","boy":"👦","girl":"👧","man":"👨","woman":"👩","blonde_woman":"👱‍♀","blonde_man":"👱","person_with_blond_hair":"👱","older_man":"👴","older_woman":"👵","man_with_gua_pi_mao":"👲","woman_with_turban":"👳‍♀","man_with_turban":"👳","policewoman":"👮‍♀","policeman":"👮","cop":"👮","construction_worker_woman":"👷‍♀","construction_worker_man":"👷","construction_worker":"👷","guardswoman":"💂‍♀","guardsman":"💂","female_detective":"🕵️‍♀️","male_detective":"🕵","detective":"🕵","woman_health_worker":"👩‍⚕","man_health_worker":"👨‍⚕","woman_farmer":"👩‍🌾","man_farmer":"👨‍🌾","woman_cook":"👩‍🍳","man_cook":"👨‍🍳","woman_student":"👩‍🎓","man_student":"👨‍🎓","woman_singer":"👩‍🎤","man_singer":"👨‍🎤","woman_teacher":"👩‍🏫","man_teacher":"👨‍🏫","woman_factory_worker":"👩‍🏭","man_factory_worker":"👨‍🏭","woman_technologist":"👩‍💻","man_technologist":"👨‍💻","woman_office_worker":"👩‍💼","man_office_worker":"👨‍💼","woman_mechanic":"👩‍🔧","man_mechanic":"👨‍🔧","woman_scientist":"👩‍🔬","man_scientist":"👨‍🔬","woman_artist":"👩‍🎨","man_artist":"👨‍🎨","woman_firefighter":"👩‍🚒","man_firefighter":"👨‍🚒","woman_pilot":"👩‍✈","man_pilot":"👨‍✈","woman_astronaut":"👩‍🚀","man_astronaut":"👨‍🚀","woman_judge":"👩‍⚖","man_judge":"👨‍⚖","mrs_claus":"🤶","santa":"🎅","princess":"👸","prince":"🤴","bride_with_veil":"👰","man_in_tuxedo":"🤵","angel":"👼","pregnant_woman":"🤰","bowing_woman":"🙇‍♀","bowing_man":"🙇","bow":"🙇","tipping_hand_woman":"💁","information_desk_person":"💁","sassy_woman":"💁","tipping_hand_man":"💁‍♂","sassy_man":"💁‍♂","no_good_woman":"🙅","no_good":"🙅","ng_woman":"🙅","no_good_man":"🙅‍♂","ng_man":"🙅‍♂","ok_woman":"🙆","ok_man":"🙆‍♂","raising_hand_woman":"🙋","raising_hand":"🙋","raising_hand_man":"🙋‍♂","woman_facepalming":"🤦‍♀","man_facepalming":"🤦‍♂","woman_shrugging":"🤷‍♀","man_shrugging":"🤷‍♂","pouting_woman":"🙎","person_with_pouting_face":"🙎","pouting_man":"🙎‍♂","frowning_woman":"🙍","person_frowning":"🙍","frowning_man":"🙍‍♂","haircut_woman":"💇","haircut":"💇","haircut_man":"💇‍♂","massage_woman":"💆","massage":"💆","massage_man":"💆‍♂","business_suit_levitating":"🕴","dancer":"💃","man_dancing":"🕺","dancing_women":"👯","dancers":"👯","dancing_men":"👯‍♂","walking_woman":"🚶‍♀","walking_man":"🚶","walking":"🚶","running_woman":"🏃‍♀","running_man":"🏃","runner":"🏃","running":"🏃","couple":"👫","two_women_holding_hands":"👭","two_men_holding_hands":"👬","couple_with_heart_woman_man":"💑","couple_with_heart":"💑","couple_with_heart_woman_woman":"👩‍❤️‍👩","couple_with_heart_man_man":"👨‍❤️‍👨","couplekiss_man_woman":"💏","couplekiss_woman_woman":"👩‍❤️‍💋‍👩","couplekiss_man_man":"👨‍❤️‍💋‍👨","family_man_woman_boy":"👪","family":"👪","family_man_woman_girl":"👨‍👩‍👧","family_man_woman_girl_boy":"👨‍👩‍👧‍👦","family_man_woman_boy_boy":"👨‍👩‍👦‍👦","family_man_woman_girl_girl":"👨‍👩‍👧‍👧","family_woman_woman_boy":"👩‍👩‍👦","family_woman_woman_girl":"👩‍👩‍👧","family_woman_woman_girl_boy":"👩‍👩‍👧‍👦","family_woman_woman_boy_boy":"👩‍👩‍👦‍👦","family_woman_woman_girl_girl":"👩‍👩‍👧‍👧","family_man_man_boy":"👨‍👨‍👦","family_man_man_girl":"👨‍👨‍👧","family_man_man_girl_boy":"👨‍👨‍👧‍👦","family_man_man_boy_boy":"👨‍👨‍👦‍👦","family_man_man_girl_girl":"👨‍👨‍👧‍👧","family_woman_boy":"👩‍👦","family_woman_girl":"👩‍👧","family_woman_girl_boy":"👩‍👧‍👦","family_woman_boy_boy":"👩‍👦‍👦","family_woman_girl_girl":"👩‍👧‍👧","family_man_boy":"👨‍👦","family_man_girl":"👨‍👧","family_man_girl_boy":"👨‍👧‍👦","family_man_boy_boy":"👨‍👦‍👦","family_man_girl_girl":"👨‍👧‍👧","womans_clothes":"👚","shirt":"👕","tshirt":"👕","jeans":"👖","necktie":"👔","dress":"👗","bikini":"👙","kimono":"👘","high_heel":"👠","sandal":"👡","boot":"👢","mans_shoe":"👞","shoe":"👞","athletic_shoe":"👟","womans_hat":"👒","tophat":"🎩","mortar_board":"🎓","crown":"👑","rescue_worker_helmet":"⛑","school_satchel":"🎒","pouch":"👝","purse":"👛","handbag":"👜","briefcase":"💼","eyeglasses":"👓","dark_sunglasses":"🕶","closed_umbrella":"🌂","open_umbrella":"☂️","dog":"🐶","cat":"🐱","mouse":"🐭","hamster":"🐹","rabbit":"🐰","fox_face":"🦊","bear":"🐻","panda_face":"🐼","koala":"🐨","tiger":"🐯","lion":"🦁","cow":"🐮","pig":"🐷","pig_nose":"🐽","frog":"🐸","monkey_face":"🐵","see_no_evil":"🙈","hear_no_evil":"🙉","speak_no_evil":"🙊","monkey":"🐒","chicken":"🐔","penguin":"🐧","bird":"🐦","baby_chick":"🐤","hatching_chick":"🐣","hatched_chick":"🐥","duck":"🦆","eagle":"🦅","owl":"🦉","bat":"🦇","wolf":"🐺","boar":"🐗","horse":"🐴","unicorn":"🦄","bee":"🐝","honeybee":"🐝","bug":"🐛","butterfly":"🦋","snail":"🐌","shell":"🐚","beetle":"🐞","ant":"🐜","spider":"🕷","spider_web":"🕸","turtle":"🐢","snake":"🐍","lizard":"🦎","scorpion":"🦂","crab":"🦀","squid":"🦑","octopus":"🐙","shrimp":"🦐","tropical_fish":"🐠","fish":"🐟","blowfish":"🐡","dolphin":"🐬","flipper":"🐬","shark":"🦈","whale":"🐳","whale2":"🐋","crocodile":"🐊","leopard":"🐆","tiger2":"🐅","water_buffalo":"🐃","ox":"🐂","cow2":"🐄","deer":"🦌","dromedary_camel":"🐪","camel":"🐫","elephant":"🐘","rhinoceros":"🦏","gorilla":"🦍","racehorse":"🐎","pig2":"🐖","goat":"🐐","ram":"🐏","sheep":"🐑","dog2":"🐕","poodle":"🐩","cat2":"🐈","rooster":"🐓","turkey":"🦃","dove":"🕊","rabbit2":"🐇","mouse2":"🐁","rat":"🐀","chipmunk":"🐿","feet":"🐾","paw_prints":"🐾","dragon":"🐉","dragon_face":"🐲","cactus":"🌵","christmas_tree":"🎄","evergreen_tree":"🌲","deciduous_tree":"🌳","palm_tree":"🌴","seedling":"🌱","herb":"🌿","shamrock":"☘️","four_leaf_clover":"🍀","bamboo":"🎍","tanabata_tree":"🎋","leaves":"🍃","fallen_leaf":"🍂","maple_leaf":"🍁","mushroom":"🍄","ear_of_rice":"🌾","bouquet":"💐","tulip":"🌷","rose":"🌹","wilted_flower":"🥀","sunflower":"🌻","blossom":"🌼","cherry_blossom":"🌸","hibiscus":"🌺","earth_americas":"🌎","earth_africa":"🌍","earth_asia":"🌏","full_moon":"🌕","waning_gibbous_moon":"🌖","last_quarter_moon":"🌗","waning_crescent_moon":"🌘","new_moon":"🌑","waxing_crescent_moon":"🌒","first_quarter_moon":"🌓","moon":"🌔","waxing_gibbous_moon":"🌔","new_moon_with_face":"🌚","full_moon_with_face":"🌝","sun_with_face":"🌞","first_quarter_moon_with_face":"🌛","last_quarter_moon_with_face":"🌜","crescent_moon":"🌙","dizzy":"💫","star":"⭐️","star2":"🌟","sparkles":"✨","zap":"⚡️","fire":"🔥","boom":"💥","collision":"💥","comet":"☄","sunny":"☀️","sun_behind_small_cloud":"🌤","partly_sunny":"⛅️","sun_behind_large_cloud":"🌥","sun_behind_rain_cloud":"🌦","rainbow":"🌈","cloud":"☁️","cloud_with_rain":"🌧","cloud_with_lightning_and_rain":"⛈","cloud_with_lightning":"🌩","cloud_with_snow":"🌨","snowman_with_snow":"☃️","snowman":"⛄️","snowflake":"❄️","wind_face":"🌬","dash":"💨","tornado":"🌪","fog":"🌫","ocean":"🌊","droplet":"💧","sweat_drops":"💦","umbrella":"☔️","green_apple":"🍏","apple":"🍎","pear":"🍐","tangerine":"🍊","orange":"🍊","mandarin":"🍊","lemon":"🍋","banana":"🍌","watermelon":"🍉","grapes":"🍇","strawberry":"🍓","melon":"🍈","cherries":"🍒","peach":"🍑","pineapple":"🍍","kiwi_fruit":"🥝","avocado":"🥑","tomato":"🍅","eggplant":"🍆","cucumber":"🥒","carrot":"🥕","corn":"🌽","hot_pepper":"🌶","potato":"🥔","sweet_potato":"🍠","chestnut":"🌰","peanuts":"🥜","honey_pot":"🍯","croissant":"🥐","bread":"🍞","baguette_bread":"🥖","cheese":"🧀","egg":"🥚","fried_egg":"🍳","bacon":"🥓","pancakes":"🥞","fried_shrimp":"🍤","poultry_leg":"🍗","meat_on_bone":"🍖","pizza":"🍕","hotdog":"🌭","hamburger":"🍔","fries":"🍟","stuffed_flatbread":"🥙","taco":"🌮","burrito":"🌯","green_salad":"🥗","shallow_pan_of_food":"🥘","spaghetti":"🍝","ramen":"🍜","stew":"🍲","fish_cake":"🍥","sushi":"🍣","bento":"🍱","curry":"🍛","rice":"🍚","rice_ball":"🍙","rice_cracker":"🍘","oden":"🍢","dango":"🍡","shaved_ice":"🍧","ice_cream":"🍨","icecream":"🍦","cake":"🍰","birthday":"🎂","custard":"🍮","lollipop":"🍭","candy":"🍬","chocolate_bar":"🍫","popcorn":"🍿","doughnut":"🍩","cookie":"🍪","milk_glass":"🥛","baby_bottle":"🍼","coffee":"☕️","tea":"🍵","sake":"🍶","beer":"🍺","beers":"🍻","clinking_glasses":"🥂","wine_glass":"🍷","tumbler_glass":"🥃","cocktail":"🍸","tropical_drink":"🍹","champagne":"🍾","spoon":"🥄","fork_and_knife":"🍴","plate_with_cutlery":"🍽","soccer":"⚽️","basketball":"🏀","football":"🏈","baseball":"⚾️","tennis":"🎾","volleyball":"🏐","rugby_football":"🏉","8ball":"🎱","ping_pong":"🏓","badminton":"🏸","goal_net":"🥅","ice_hockey":"🏒","field_hockey":"🏑","cricket":"🏏","golf":"⛳️","bow_and_arrow":"🏹","fishing_pole_and_fish":"🎣","boxing_glove":"🥊","martial_arts_uniform":"🥋","ice_skate":"⛸","ski":"🎿","skier":"⛷","snowboarder":"🏂","weight_lifting_woman":"🏋️‍♀️","weight_lifting_man":"🏋","person_fencing":"🤺","women_wrestling":"🤼‍♀","men_wrestling":"🤼‍♂","woman_cartwheeling":"🤸‍♀","man_cartwheeling":"🤸‍♂","basketball_woman":"⛹️‍♀️","basketball_man":"⛹","woman_playing_handball":"🤾‍♀","man_playing_handball":"🤾‍♂","golfing_woman":"🏌️‍♀️","golfing_man":"🏌","surfing_woman":"🏄‍♀","surfing_man":"🏄","surfer":"🏄","swimming_woman":"🏊‍♀","swimming_man":"🏊","swimmer":"🏊","woman_playing_water_polo":"🤽‍♀","man_playing_water_polo":"🤽‍♂","rowing_woman":"🚣‍♀","rowing_man":"🚣","rowboat":"🚣","horse_racing":"🏇","biking_woman":"🚴‍♀","biking_man":"🚴","bicyclist":"🚴","mountain_biking_woman":"🚵‍♀","mountain_biking_man":"🚵","mountain_bicyclist":"🚵","running_shirt_with_sash":"🎽","medal_sports":"🏅","medal_military":"🎖","1st_place_medal":"🥇","2nd_place_medal":"🥈","3rd_place_medal":"🥉","trophy":"🏆","rosette":"🏵","reminder_ribbon":"🎗","ticket":"🎫","tickets":"🎟","circus_tent":"🎪","woman_juggling":"🤹‍♀","man_juggling":"🤹‍♂","performing_arts":"🎭","art":"🎨","clapper":"🎬","microphone":"🎤","headphones":"🎧","musical_score":"🎼","musical_keyboard":"🎹","drum":"🥁","saxophone":"🎷","trumpet":"🎺","guitar":"🎸","violin":"🎻","game_die":"🎲","dart":"🎯","bowling":"🎳","video_game":"🎮","slot_machine":"🎰","car":"🚗","red_car":"🚗","taxi":"🚕","blue_car":"🚙","bus":"🚌","trolleybus":"🚎","racing_car":"🏎","police_car":"🚓","ambulance":"🚑","fire_engine":"🚒","minibus":"🚐","truck":"🚚","articulated_lorry":"🚛","tractor":"🚜","kick_scooter":"🛴","bike":"🚲","motor_scooter":"🛵","motorcycle":"🏍","rotating_light":"🚨","oncoming_police_car":"🚔","oncoming_bus":"🚍","oncoming_automobile":"🚘","oncoming_taxi":"🚖","aerial_tramway":"🚡","mountain_cableway":"🚠","suspension_railway":"🚟","railway_car":"🚃","train":"🚋","mountain_railway":"🚞","monorail":"🚝","bullettrain_side":"🚄","bullettrain_front":"🚅","light_rail":"🚈","steam_locomotive":"🚂","train2":"🚆","metro":"🚇","tram":"🚊","station":"🚉","helicopter":"🚁","small_airplane":"🛩","airplane":"✈️","flight_departure":"🛫","flight_arrival":"🛬","rocket":"🚀","artificial_satellite":"🛰","seat":"💺","canoe":"🛶","boat":"⛵️","sailboat":"⛵️","motor_boat":"🛥","speedboat":"🚤","passenger_ship":"🛳","ferry":"⛴","ship":"🚢","anchor":"⚓️","construction":"🚧","fuelpump":"⛽️","busstop":"🚏","vertical_traffic_light":"🚦","traffic_light":"🚥","world_map":"🗺","moyai":"🗿","statue_of_liberty":"🗽","fountain":"⛲️","tokyo_tower":"🗼","european_castle":"🏰","japanese_castle":"🏯","stadium":"🏟","ferris_wheel":"🎡","roller_coaster":"🎢","carousel_horse":"🎠","parasol_on_ground":"⛱","beach_umbrella":"🏖","desert_island":"🏝","mountain":"⛰","mountain_snow":"🏔","mount_fuji":"🗻","volcano":"🌋","desert":"🏜","camping":"🏕","tent":"⛺️","railway_track":"🛤","motorway":"🛣","building_construction":"🏗","factory":"🏭","house":"🏠","house_with_garden":"🏡","houses":"🏘","derelict_house":"🏚","office":"🏢","department_store":"🏬","post_office":"🏣","european_post_office":"🏤","hospital":"🏥","bank":"🏦","hotel":"🏨","convenience_store":"🏪","school":"🏫","love_hotel":"🏩","wedding":"💒","classical_building":"🏛","church":"⛪️","mosque":"🕌","synagogue":"🕍","kaaba":"🕋","shinto_shrine":"⛩","japan":"🗾","rice_scene":"🎑","national_park":"🏞","sunrise":"🌅","sunrise_over_mountains":"🌄","stars":"🌠","sparkler":"🎇","fireworks":"🎆","city_sunrise":"🌇","city_sunset":"🌆","cityscape":"🏙","night_with_stars":"🌃","milky_way":"🌌","bridge_at_night":"🌉","foggy":"🌁","watch":"⌚️","iphone":"📱","calling":"📲","computer":"💻","keyboard":"⌨️","desktop_computer":"🖥","printer":"🖨","computer_mouse":"🖱","trackball":"🖲","joystick":"🕹","clamp":"🗜","minidisc":"💽","floppy_disk":"💾","cd":"💿","dvd":"📀","vhs":"📼","camera":"📷","camera_flash":"📸","video_camera":"📹","movie_camera":"🎥","film_projector":"📽","film_strip":"🎞","telephone_receiver":"📞","phone":"☎️","telephone":"☎️","pager":"📟","fax":"📠","tv":"📺","radio":"📻","studio_microphone":"🎙","level_slider":"🎚","control_knobs":"🎛","stopwatch":"⏱","timer_clock":"⏲","alarm_clock":"⏰","mantelpiece_clock":"🕰","hourglass":"⌛️","hourglass_flowing_sand":"⏳","satellite":"📡","battery":"🔋","electric_plug":"🔌","bulb":"💡","flashlight":"🔦","candle":"🕯","wastebasket":"🗑","oil_drum":"🛢","money_with_wings":"💸","dollar":"💵","yen":"💴","euro":"💶","pound":"💷","moneybag":"💰","credit_card":"💳","gem":"💎","balance_scale":"⚖️","wrench":"🔧","hammer":"🔨","hammer_and_pick":"⚒","hammer_and_wrench":"🛠","pick":"⛏","nut_and_bolt":"🔩","gear":"⚙️","chains":"⛓","gun":"🔫","bomb":"💣","hocho":"🔪","knife":"🔪","dagger":"🗡","crossed_swords":"⚔️","shield":"🛡","smoking":"🚬","coffin":"⚰️","funeral_urn":"⚱️","amphora":"🏺","crystal_ball":"🔮","prayer_beads":"📿","barber":"💈","alembic":"⚗️","telescope":"🔭","microscope":"🔬","hole":"🕳","pill":"💊","syringe":"💉","thermometer":"🌡","toilet":"🚽","potable_water":"🚰","shower":"🚿","bathtub":"🛁","bath":"🛀","bellhop_bell":"🛎","key":"🔑","old_key":"🗝","door":"🚪","couch_and_lamp":"🛋","bed":"🛏","sleeping_bed":"🛌","framed_picture":"🖼","shopping":"🛍","shopping_cart":"🛒","gift":"🎁","balloon":"🎈","flags":"🎏","ribbon":"🎀","confetti_ball":"🎊","tada":"🎉","dolls":"🎎","izakaya_lantern":"🏮","lantern":"🏮","wind_chime":"🎐","email":"✉️","envelope":"✉️","envelope_with_arrow":"📩","incoming_envelope":"📨","e-mail":"📧","love_letter":"💌","inbox_tray":"📥","outbox_tray":"📤","package":"📦","label":"🏷","mailbox_closed":"📪","mailbox":"📫","mailbox_with_mail":"📬","mailbox_with_no_mail":"📭","postbox":"📮","postal_horn":"📯","scroll":"📜","page_with_curl":"📃","page_facing_up":"📄","bookmark_tabs":"📑","bar_chart":"📊","chart_with_upwards_trend":"📈","chart_with_downwards_trend":"📉","spiral_notepad":"🗒","spiral_calendar":"🗓","calendar":"📆","date":"📅","card_index":"📇","card_file_box":"🗃","ballot_box":"🗳","file_cabinet":"🗄","clipboard":"📋","file_folder":"📁","open_file_folder":"📂","card_index_dividers":"🗂","newspaper_roll":"🗞","newspaper":"📰","notebook":"📓","notebook_with_decorative_cover":"📔","ledger":"📒","closed_book":"📕","green_book":"📗","blue_book":"📘","orange_book":"📙","books":"📚","book":"📖","open_book":"📖","bookmark":"🔖","link":"🔗","paperclip":"📎","paperclips":"🖇","triangular_ruler":"📐","straight_ruler":"📏","pushpin":"📌","round_pushpin":"📍","scissors":"✂️","pen":"🖊","fountain_pen":"🖋","black_nib":"✒️","paintbrush":"🖌","crayon":"🖍","memo":"📝","pencil":"📝","pencil2":"✏️","mag":"🔍","mag_right":"🔎","lock_with_ink_pen":"🔏","closed_lock_with_key":"🔐","lock":"🔒","unlock":"🔓","heart":"❤️","yellow_heart":"💛","green_heart":"💚","blue_heart":"💙","purple_heart":"💜","black_heart":"🖤","broken_heart":"💔","heavy_heart_exclamation":"❣️","two_hearts":"💕","revolving_hearts":"💞","heartbeat":"💓","heartpulse":"💗","sparkling_heart":"💖","cupid":"💘","gift_heart":"💝","heart_decoration":"💟","peace_symbol":"☮️","latin_cross":"✝️","star_and_crescent":"☪️","om":"🕉","wheel_of_dharma":"☸️","star_of_david":"✡️","six_pointed_star":"🔯","menorah":"🕎","yin_yang":"☯️","orthodox_cross":"☦️","place_of_worship":"🛐","ophiuchus":"⛎","aries":"♈️","taurus":"♉️","gemini":"♊️","cancer":"♋️","leo":"♌️","virgo":"♍️","libra":"♎️","scorpius":"♏️","sagittarius":"♐️","capricorn":"♑️","aquarius":"♒️","pisces":"♓️","id":"🆔","atom_symbol":"⚛️","accept":"🉑","radioactive":"☢️","biohazard":"☣️","mobile_phone_off":"📴","vibration_mode":"📳","eight_pointed_black_star":"✴️","vs":"🆚","white_flower":"💮","ideograph_advantage":"🉐","secret":"㊙️","congratulations":"㊗️","u6e80":"🈵","a":"🅰️","b":"🅱️","ab":"🆎","cl":"🆑","o2":"🅾️","sos":"🆘","x":"❌","o":"⭕️","stop_sign":"🛑","no_entry":"⛔️","name_badge":"📛","no_entry_sign":"🚫","anger":"💢","hotsprings":"♨️","no_pedestrians":"🚷","do_not_litter":"🚯","no_bicycles":"🚳","non-potable_water":"🚱","underage":"🔞","no_mobile_phones":"📵","no_smoking":"🚭","exclamation":"❗️","heavy_exclamation_mark":"❗️","grey_exclamation":"❕","question":"❓","grey_question":"❔","bangbang":"‼️","interrobang":"⁉️","low_brightness":"🔅","high_brightness":"🔆","part_alternation_mark":"〽️","warning":"⚠️","children_crossing":"🚸","trident":"🔱","fleur_de_lis":"⚜️","beginner":"🔰","recycle":"♻️","white_check_mark":"✅","chart":"💹","sparkle":"❇️","eight_spoked_asterisk":"✳️","negative_squared_cross_mark":"❎","globe_with_meridians":"🌐","diamond_shape_with_a_dot_inside":"💠","m":"Ⓜ️","cyclone":"🌀","zzz":"💤","atm":"🏧","wc":"🚾","wheelchair":"♿️","parking":"🅿️","sa":"🈂️","passport_control":"🛂","customs":"🛃","baggage_claim":"🛄","left_luggage":"🛅","mens":"🚹","womens":"🚺","baby_symbol":"🚼","restroom":"🚻","put_litter_in_its_place":"🚮","cinema":"🎦","signal_strength":"📶","koko":"🈁","symbols":"🔣","information_source":"ℹ️","abc":"🔤","abcd":"🔡","capital_abcd":"🔠","ng":"🆖","ok":"🆗","up":"🆙","cool":"🆒","new":"🆕","free":"🆓","zero":"0️⃣","one":"1️⃣","two":"2️⃣","three":"3️⃣","four":"4️⃣","five":"5️⃣","six":"6️⃣","seven":"7️⃣","eight":"8️⃣","nine":"9️⃣","keycap_ten":"🔟","hash":"#️⃣","asterisk":"*️⃣","arrow_forward":"▶️","pause_button":"⏸","play_or_pause_button":"⏯","stop_button":"⏹","record_button":"⏺","next_track_button":"⏭","previous_track_button":"⏮","fast_forward":"⏩","rewind":"⏪","arrow_double_up":"⏫","arrow_double_down":"⏬","arrow_backward":"◀️","arrow_up_small":"🔼","arrow_down_small":"🔽","arrow_right":"➡️","arrow_left":"⬅️","arrow_up":"⬆️","arrow_down":"⬇️","arrow_upper_right":"↗️","arrow_lower_right":"↘️","arrow_lower_left":"↙️","arrow_upper_left":"↖️","arrow_up_down":"↕️","left_right_arrow":"↔️","arrow_right_hook":"↪️","leftwards_arrow_with_hook":"↩️","arrow_heading_up":"⤴️","arrow_heading_down":"⤵️","twisted_rightwards_arrows":"🔀","repeat":"🔁","repeat_one":"🔂","arrows_counterclockwise":"🔄","arrows_clockwise":"🔃","musical_note":"🎵","notes":"🎶","heavy_plus_sign":"➕","heavy_minus_sign":"➖","heavy_division_sign":"➗","heavy_multiplication_x":"✖️","heavy_dollar_sign":"💲","currency_exchange":"💱","tm":"™️","copyright":"©️","registered":"®️","wavy_dash":"〰️","curly_loop":"➰","loop":"➿","end":"🔚","back":"🔙","on":"🔛","top":"🔝","soon":"🔜","heavy_check_mark":"✔️","ballot_box_with_check":"☑️","radio_button":"🔘","white_circle":"⚪️","black_circle":"⚫️","red_circle":"🔴","large_blue_circle":"🔵","small_red_triangle":"🔺","small_red_triangle_down":"🔻","small_orange_diamond":"🔸","small_blue_diamond":"🔹","large_orange_diamond":"🔶","large_blue_diamond":"🔷","white_square_button":"🔳","black_square_button":"🔲","black_small_square":"▪️","white_small_square":"▫️","black_medium_small_square":"◾️","white_medium_small_square":"◽️","black_medium_square":"◼️","white_medium_square":"◻️","black_large_square":"⬛️","white_large_square":"⬜️","speaker":"🔈","mute":"🔇","sound":"🔉","loud_sound":"🔊","bell":"🔔","no_bell":"🔕","mega":"📣","loudspeaker":"📢","eye_speech_bubble":"👁‍🗨","speech_balloon":"💬","thought_balloon":"💭","right_anger_bubble":"🗯","spades":"♠️","clubs":"♣️","hearts":"♥️","diamonds":"♦️","black_joker":"🃏","flower_playing_cards":"🎴","mahjong":"🀄️","clock1":"🕐","clock2":"🕑","clock3":"🕒","clock4":"🕓","clock5":"🕔","clock6":"🕕","clock7":"🕖","clock8":"🕗","clock9":"🕘","clock10":"🕙","clock11":"🕚","clock12":"🕛","clock130":"🕜","clock230":"🕝","clock330":"🕞","clock430":"🕟","clock530":"🕠","clock630":"🕡","clock730":"🕢","clock830":"🕣","clock930":"🕤","clock1030":"🕥","clock1130":"🕦","clock1230":"🕧","white_flag":"🏳️","black_flag":"🏴","checkered_flag":"🏁","triangular_flag_on_post":"🚩","rainbow_flag":"🏳️‍🌈","afghanistan":"🇦🇫","aland_islands":"🇦🇽","albania":"🇦🇱","algeria":"🇩🇿","american_samoa":"🇦🇸","andorra":"🇦🇩","angola":"🇦🇴","anguilla":"🇦🇮","antarctica":"🇦🇶","antigua_barbuda":"🇦🇬","argentina":"🇦🇷","armenia":"🇦🇲","aruba":"🇦🇼","australia":"🇦🇺","austria":"🇦🇹","azerbaijan":"🇦🇿","bahamas":"🇧🇸","bahrain":"🇧🇭","bangladesh":"🇧🇩","barbados":"🇧🇧","belarus":"🇧🇾","belgium":"🇧🇪","belize":"🇧🇿","benin":"🇧🇯","bermuda":"🇧🇲","bhutan":"🇧🇹","bolivia":"🇧🇴","caribbean_netherlands":"🇧🇶","bosnia_herzegovina":"🇧🇦","botswana":"🇧🇼","brazil":"🇧🇷","british_indian_ocean_territory":"🇮🇴","british_virgin_islands":"🇻🇬","brunei":"🇧🇳","bulgaria":"🇧🇬","burkina_faso":"🇧🇫","burundi":"🇧🇮","cape_verde":"🇨🇻","cambodia":"🇰🇭","cameroon":"🇨🇲","canada":"🇨🇦","canary_islands":"🇮🇨","cayman_islands":"🇰🇾","central_african_republic":"🇨🇫","chad":"🇹🇩","chile":"🇨🇱","cn":"🇨🇳","christmas_island":"🇨🇽","cocos_islands":"🇨🇨","colombia":"🇨🇴","comoros":"🇰🇲","congo_brazzaville":"🇨🇬","congo_kinshasa":"🇨🇩","cook_islands":"🇨🇰","costa_rica":"🇨🇷","cote_divoire":"🇨🇮","croatia":"🇭🇷","cuba":"🇨🇺","curacao":"🇨🇼","cyprus":"🇨🇾","czech_republic":"🇨🇿","denmark":"🇩🇰","djibouti":"🇩🇯","dominica":"🇩🇲","dominican_republic":"🇩🇴","ecuador":"🇪🇨","egypt":"🇪🇬","el_salvador":"🇸🇻","equatorial_guinea":"🇬🇶","eritrea":"🇪🇷","estonia":"🇪🇪","ethiopia":"🇪🇹","eu":"🇪🇺","european_union":"🇪🇺","falkland_islands":"🇫🇰","faroe_islands":"🇫🇴","fiji":"🇫🇯","finland":"🇫🇮","fr":"🇫🇷","french_guiana":"🇬🇫","french_polynesia":"🇵🇫","french_southern_territories":"🇹🇫","gabon":"🇬🇦","gambia":"🇬🇲","georgia":"🇬🇪","de":"🇩🇪","ghana":"🇬🇭","gibraltar":"🇬🇮","greece":"🇬🇷","greenland":"🇬🇱","grenada":"🇬🇩","guadeloupe":"🇬🇵","guam":"🇬🇺","guatemala":"🇬🇹","guernsey":"🇬🇬","guinea":"🇬🇳","guinea_bissau":"🇬🇼","guyana":"🇬🇾","haiti":"🇭🇹","honduras":"🇭🇳","hong_kong":"🇭🇰","hungary":"🇭🇺","iceland":"🇮🇸","india":"🇮🇳","indonesia":"🇮🇩","iran":"🇮🇷","iraq":"🇮🇶","ireland":"🇮🇪","isle_of_man":"🇮🇲","israel":"🇮🇱","it":"🇮🇹","jamaica":"🇯🇲","jp":"🇯🇵","crossed_flags":"🎌","jersey":"🇯🇪","jordan":"🇯🇴","kazakhstan":"🇰🇿","kenya":"🇰🇪","kiribati":"🇰🇮","kosovo":"🇽🇰","kuwait":"🇰🇼","kyrgyzstan":"🇰🇬","laos":"🇱🇦","latvia":"🇱🇻","lebanon":"🇱🇧","lesotho":"🇱🇸","liberia":"🇱🇷","libya":"🇱🇾","liechtenstein":"🇱🇮","lithuania":"🇱🇹","luxembourg":"🇱🇺","macau":"🇲🇴","macedonia":"🇲🇰","madagascar":"🇲🇬","malawi":"🇲🇼","malaysia":"🇲🇾","maldives":"🇲🇻","mali":"🇲🇱","malta":"🇲🇹","marshall_islands":"🇲🇭","martinique":"🇲🇶","mauritania":"🇲🇷","mauritius":"🇲🇺","mayotte":"🇾🇹","mexico":"🇲🇽","micronesia":"🇫🇲","moldova":"🇲🇩","monaco":"🇲🇨","mongolia":"🇲🇳","montenegro":"🇲🇪","montserrat":"🇲🇸","morocco":"🇲🇦","mozambique":"🇲🇿","myanmar":"🇲🇲","namibia":"🇳🇦","nauru":"🇳🇷","nepal":"🇳🇵","netherlands":"🇳🇱","new_caledonia":"🇳🇨","new_zealand":"🇳🇿","nicaragua":"🇳🇮","niger":"🇳🇪","nigeria":"🇳🇬","niue":"🇳🇺","norfolk_island":"🇳🇫","northern_mariana_islands":"🇲🇵","north_korea":"🇰🇵","norway":"🇳🇴","oman":"🇴🇲","pakistan":"🇵🇰","palau":"🇵🇼","palestinian_territories":"🇵🇸","panama":"🇵🇦","papua_new_guinea":"🇵🇬","paraguay":"🇵🇾","peru":"🇵🇪","philippines":"🇵🇭","pitcairn_islands":"🇵🇳","poland":"🇵🇱","portugal":"🇵🇹","puerto_rico":"🇵🇷","qatar":"🇶🇦","reunion":"🇷🇪","romania":"🇷🇴","ru":"🇷🇺","rwanda":"🇷🇼","st_barthelemy":"🇧🇱","st_helena":"🇸🇭","st_kitts_nevis":"🇰🇳","st_lucia":"🇱🇨","st_pierre_miquelon":"🇵🇲","st_vincent_grenadines":"🇻🇨","samoa":"🇼🇸","san_marino":"🇸🇲","sao_tome_principe":"🇸🇹","saudi_arabia":"🇸🇦","senegal":"🇸🇳","serbia":"🇷🇸","seychelles":"🇸🇨","sierra_leone":"🇸🇱","singapore":"🇸🇬","sint_maarten":"🇸🇽","slovakia":"🇸🇰","slovenia":"🇸🇮","solomon_islands":"🇸🇧","somalia":"🇸🇴","south_africa":"🇿🇦","south_georgia_south_sandwich_islands":"🇬🇸","kr":"🇰🇷","south_sudan":"🇸🇸","es":"🇪🇸","sri_lanka":"🇱🇰","sudan":"🇸🇩","suriname":"🇸🇷","swaziland":"🇸🇿","sweden":"🇸🇪","switzerland":"🇨🇭","syria":"🇸🇾","taiwan":"🇹🇼","tajikistan":"🇹🇯","tanzania":"🇹🇿","thailand":"🇹🇭","timor_leste":"🇹🇱","togo":"🇹🇬","tokelau":"🇹🇰","tonga":"🇹🇴","trinidad_tobago":"🇹🇹","tunisia":"🇹🇳","tr":"🇹🇷","turkmenistan":"🇹🇲","turks_caicos_islands":"🇹🇨","tuvalu":"🇹🇻","uganda":"🇺🇬","ukraine":"🇺🇦","united_arab_emirates":"🇦🇪","gb":"🇬🇧","uk":"🇬🇧","us":"🇺🇸","us_virgin_islands":"🇻🇮","uruguay":"🇺🇾","uzbekistan":"🇺🇿","vanuatu":"🇻🇺","vatican_city":"🇻🇦","venezuela":"🇻🇪","vietnam":"🇻🇳","wallis_futuna":"🇼🇫","western_sahara":"🇪🇭","yemen":"🇾🇪","zambia":"🇿🇲","zimbabwe":"🇿🇼"}

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Pdf_vue__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7e2b68be_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Pdf_vue__ = __webpack_require__(418);
function injectStyle (ssrContext) {
  __webpack_require__(373)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7e2b68be"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Pdf_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7e2b68be_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Pdf_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 373:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_pdf__ = __webpack_require__(379);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var access_token = '01a2c19d945b439da132249d1b2c265ea71e71a39be1ffa0cce5328a7d10d388';
var spaces = 'gux1c3twzpd4';

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({
      id: this.$route.params.id,
      result: [],
      src: '',
      loadedRatio: 0,
      page: 1,
      numPages: 0,
      rotate: 0
    }, 'src', './static/hoidon_aloitus.pdf');
  },

  components: {
    pdf: __WEBPACK_IMPORTED_MODULE_1_vue_pdf__["a" /* default */]

  }

});

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_pdf_vue__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_pdf_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_pdf_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_c3506410_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_vue_loader_lib_selector_type_template_index_0_pdf_vue__ = __webpack_require__(417);
function injectStyle (ssrContext) {
  __webpack_require__(380)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_pdf_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_c3506410_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_vue_loader_lib_selector_type_template_index_0_pdf_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 380:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var PDFJS = __webpack_require__(382);
var resizeSensor = __webpack_require__(414);

function PDFJSWrapper(PDFJS, canvasElt, annotationLayerElt, emitEvent) {

	var pdfDoc = null;
	var pdfPage = null;
	var pdfRender = null;

	function clearCanvas() {

		canvasElt.getContext('2d').clearRect(0, 0, canvasElt.width, canvasElt.height);
	}

	function clearAnnotations() {

		while (annotationLayerElt.firstChild) annotationLayerElt.removeChild(annotationLayerElt.firstChild);
	}

	this.destroy = function () {

		if (pdfDoc === null) return;
		pdfDoc.destroy();
		pdfDoc = null;
	};

	this.getResolutionScale = function () {

		return canvasElt.offsetWidth / canvasElt.width;
	};

	this.printPage = function (dpi, pageNumberOnly) {

		if (pdfPage === null) return;

		// 1in == 72pt
		// 1in == 96px
		var PRINT_RESOLUTION = dpi === undefined ? 150 : dpi;
		var PRINT_UNITS = PRINT_RESOLUTION / 72.0;
		var CSS_UNITS = 96.0 / 72.0;

		var iframeElt = document.createElement('iframe');

		function removeIframe() {

			iframeElt.parentNode.removeChild(iframeElt);
		}

		new Promise(function (resolve, reject) {

			iframeElt.frameBorder = '0';
			iframeElt.scrolling = 'no';
			iframeElt.width = '0px;';
			iframeElt.height = '0px;';
			iframeElt.style.cssText = 'position: absolute; top: 0; left: 0';

			iframeElt.onload = function () {

				resolve(this.contentWindow);
			};

			window.document.body.appendChild(iframeElt);
		}).then(function (win) {

			win.document.title = '';

			return pdfDoc.getPage(1).then(function (page) {

				var viewport = page.getViewport(1);
				win.document.head.appendChild(win.document.createElement('style')).textContent = '@supports ((size:A4) and (size:1pt 1pt)) {' + '@page { margin: 1pt; size: ' + viewport.width * PRINT_UNITS / CSS_UNITS + 'pt ' + viewport.height * PRINT_UNITS / CSS_UNITS + 'pt; }' + '}' + '@media print {' + 'body { margin: 0 }' + 'canvas { page-break-before: avoid; page-break-after: always; page-break-inside: avoid }' + '}' + '@media screen {' + 'body { margin: 0 }' + '}' + '';
				return win;
			});
		}).then(function (win) {

			var allPages = [];

			for (var pageNumber = 1; pageNumber <= pdfDoc.numPages; ++pageNumber) {

				if (pageNumberOnly !== undefined && pageNumberOnly.indexOf(pageNumber) === -1) continue;

				allPages.push(pdfDoc.getPage(pageNumber).then(function (page) {

					var viewport = page.getViewport(1);

					var printCanvasElt = win.document.body.appendChild(win.document.createElement('canvas'));
					printCanvasElt.width = viewport.width * PRINT_UNITS;
					printCanvasElt.height = viewport.height * PRINT_UNITS;

					return page.render({
						canvasContext: printCanvasElt.getContext('2d'),
						transform: [// Additional transform, applied just before viewport transform.
						PRINT_UNITS, 0, 0, PRINT_UNITS, 0, 0],
						viewport: viewport,
						intent: 'print'
					}).promise;
				}));
			}

			Promise.all(allPages).then(function () {

				win.focus(); // Required for IE
				win.print();
				removeIframe();
			}).catch(function (err) {

				removeIframe();
				emitEvent('error', err);
			});
		});
	};

	this.renderPage = function (rotate) {

		if (pdfRender !== null) return pdfRender.cancel();

		if (pdfPage === null) return;

		if (rotate === undefined) rotate = 0;

		var viewport = pdfPage.getViewport(canvasElt.offsetWidth / pdfPage.getViewport(1).width, rotate);

		emitEvent('pageSize', viewport.width, viewport.height);

		canvasElt.width = viewport.width;
		canvasElt.height = viewport.height;

		pdfRender = pdfPage.render({
			canvasContext: canvasElt.getContext('2d'),
			viewport: viewport
		});

		annotationLayerElt.style.visibility = 'hidden';
		clearAnnotations();

		pdfPage.getAnnotations().then(function (annotations) {

			PDFJS.AnnotationLayer.render({
				viewport: viewport.clone({ dontFlip: true }),
				div: annotationLayerElt,
				annotations: annotations,
				page: pdfPage,
				//linkService: new LinkServiceMock(),
				renderInteractiveForms: false
			});
		});

		pdfRender.then(function () {

			annotationLayerElt.style.visibility = '';
			pdfRender = null;
		}).catch(function (err) {

			pdfRender = null;
			if (err === 'cancelled') return this.renderPage(rotate);
			emitEvent('error', err);
		}.bind(this));
	};

	this.loadPage = function (pageNumber, rotate) {

		pdfPage = null;

		if (pdfDoc === null) return;

		pdfDoc.getPage(pageNumber).then(function (page) {

			pdfPage = page;
			this.renderPage(rotate);
			emitEvent('pageLoaded', page.pageNumber);
		}.bind(this)).catch(function (err) {

			clearCanvas();
			clearAnnotations();
			emitEvent('error', err);
		});
	};

	this.loadDocument = function (src) {

		pdfDoc = null;
		pdfPage = null;

		emitEvent('numPages', undefined);

		if (!src) {

			canvasElt.removeAttribute('width');
			canvasElt.removeAttribute('height');
			clearAnnotations();
			return;
		}

		var loadingTask = PDFJS.getDocument(src);

		loadingTask.onPassword = function (updatePassword, reason) {

			var reasonStr;
			switch (reason) {
				case PDFJS.PasswordResponses.NEED_PASSWORD:
					reasonStr = 'NEED_PASSWORD';
					break;
				case PDFJS.PasswordResponses.INCORRECT_PASSWORD:
					reasonStr = 'INCORRECT_PASSWORD';
					break;
			}
			emitEvent('password', updatePassword, reasonStr);
		};

		loadingTask.onProgress = function (status) {

			var ratio = status.loaded / status.total;
			emitEvent('progress', Math.min(ratio, 1));
		};

		loadingTask.then(function (pdf) {

			pdfDoc = pdf;
			emitEvent('numPages', pdf.numPages);
			emitEvent('loaded');
		}).catch(function (err) {

			clearCanvas();
			clearAnnotations();
			emitEvent('error', err);
		}).then(function () {

			loadingTask._worker = null;
		});
	};

	PDFJS.CustomStyle.setProp('transform-origin', annotationLayerElt, '0 0');
}

module.exports = {
	components: {
		'resize-sensor': resizeSensor
	},
	props: {
		src: {
			type: [String, Object],
			default: ''
		},
		page: {
			type: Number,
			default: 1
		},
		rotate: {
			type: Number,
			default: 0
		},
		password: {
			type: Function,
			default: null
		}
	},
	watch: {
		src: function () {

			this.pdf.loadDocument(this.src);
		},
		page: function () {

			this.pdf.loadPage(this.page, this.rotate);
		},
		rotate: function () {

			this.pdf.renderPage(this.rotate);
		}
	},
	methods: {
		resize: function (size) {

			var canvasElt = this.$el.childNodes[0];
			var annotationLayerElt = this.$el.childNodes[1];

			// on IE10- canvas height must be set
			canvasElt.style.height = canvasElt.offsetWidth * (canvasElt.height / canvasElt.width) + 'px';

			// update the page when the resolution is too poor
			var resolutionScale = this.pdf.getResolutionScale();

			if (resolutionScale < 0.85 || resolutionScale > 1.15) this.pdf.renderPage(this.rotate);

			PDFJS.CustomStyle.setProp('transform', annotationLayerElt, 'scale(' + resolutionScale + ')');
		},
		print: function (dpi, pageList) {

			this.pdf.printPage(dpi, pageList);
		}
	},
	mounted: function () {

		var canvasElt = this.$el.childNodes[0];
		var annotationLayerElt = this.$el.childNodes[1];

		this.pdf = new PDFJSWrapper(PDFJS, canvasElt, annotationLayerElt, this.$emit.bind(this));

		this.$on('loaded', function () {

			this.pdf.loadPage(this.page, this.rotate);
		});

		this.$on('pageSize', function (width, height) {

			canvasElt.style.height = canvasElt.offsetWidth * (height / width) + 'px';
		});

		this.pdf.loadDocument(this.src);
	},
	destroyed: function () {

		this.pdf.destroy();
	}
};

/***/ }),

/***/ 388:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 405:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 406:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 407:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_resize_sensor_vue__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_resize_sensor_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_resize_sensor_vue__);
function injectStyle (ssrContext) {
  __webpack_require__(415)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_resize_sensor_vue___default.a,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 415:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//



module.exports = {

	// thanks to https://github.com/marcj/css-element-queries
	data: function () {
		return {
			size: {
				width: -1,
				height: -1
			}
		};
	},
	methods: {
		reset: function () {

			var expand = this.$el.firstChild;
			var shrink = this.$el.lastChild;
			expand.scrollLeft = 100000;
			expand.scrollTop = 100000;
			shrink.scrollLeft = 100000;
			shrink.scrollTop = 100000;
		},
		update: function () {

			this.size.width = this.$el.offsetWidth;
			this.size.height = this.$el.offsetHeight;
		}
	},
	watch: {
		size: {
			deep: true,
			handler: function (size) {

				this.reset();
				this.$emit('resize', { width: this.size.width, height: this.size.height });
			}
		}
	},
	render: function (create) {

		var style = 'position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;';
		var styleChild = 'position: absolute; left: 0; top: 0;';

		return create('div', {
			style: style + 'animation-name: resizeSensorVisibility;',
			on: {
				'~animationstart': this.update
			}
		}, [create('div', {
			style: style,
			on: {
				scroll: this.update
			}
		}, [create('div', {
			style: styleChild + 'width: 100000px; height: 100000px;'
		})]), create('div', {
			style: style,
			on: {
				scroll: this.update
			}
		}, [create('div', {
			style: styleChild + 'width: 200%; height: 200%;'
		})])]);
	},
	beforeDestroy: function () {

		this.$emit('resizeSensorBeforeDestroy');
	},
	mounted: function () {

		if (this.$el.offsetParent !== this.$el.parentNode) this.$el.parentNode.style.position = 'relative';

		if ('attachEvent' in this.$el && !('AnimationEvent' in window)) {

			var onresizeHandler = function () {

				this.update();
				removeOnresizeEvent();
			}.bind(this);

			var removeOnresizeEvent = function () {

				this.$el.detachEvent('onresize', onresizeHandler);
				this.$off('resizeSensorBeforeDestroy', removeOnresizeEvent);
			}.bind(this);

			this.$el.attachEvent('onresize', onresizeHandler);
			this.$on('resizeSensorBeforeDestroy', removeOnresizeEvent);
			this.reset();
		}
	}
};

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"position":"relative"}},[_c('canvas',{staticStyle:{"width":"100%","display":"block"}}),_c('div',{staticClass:"annotationLayer"}),_c('resize-sensor',{on:{"resize":_vm.resize}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pdf"},[_c('div',{staticClass:"pdf-reader"},[_c('pdf',{ref:"moi",staticClass:"pdf-show",attrs:{"src":_vm.src,"page":_vm.page},on:{"numPages":function($event){_vm.numPages = $event}}}),_vm._v(" "),_c('div',{staticClass:"pagination"},[_c('md-button',{staticClass:"md-raised md-primary ",staticStyle:{"background-color":"#051B4A","color":"white"},on:{"click":function($event){_vm.page -= 1}},model:{value:(_vm.page),callback:function ($$v) {_vm.page=_vm._n($$v)},expression:"page"}},[_vm._v("Edellinen")]),_vm._v(" "),_c('md-button',{staticClass:"md-raised md-primary",staticStyle:{"background-color":"#051B4A","color":"white"},on:{"click":function($event){_vm.page = 1}},model:{value:(_vm.page),callback:function ($$v) {_vm.page=_vm._n($$v)},expression:"page"}},[_vm._v("1")]),_vm._v(" "),_c('md-button',{staticClass:"md-raised md-primary",staticStyle:{"background-color":"#051B4A","color":"white"},on:{"click":function($event){_vm.page = 2}},model:{value:(_vm.page),callback:function ($$v) {_vm.page=_vm._n($$v)},expression:"page"}},[_vm._v("2")]),_vm._v(" "),_c('md-button',{staticClass:"md-raised md-primary",staticStyle:{"background-color":"#051B4A","color":"white"},on:{"click":function($event){_vm.page = 3}},model:{value:(_vm.page),callback:function ($$v) {_vm.page=_vm._n($$v)},expression:"page"}},[_vm._v("3")]),_vm._v(" "),_c('md-button',{staticClass:"md-raised md-primary",staticStyle:{"background-color":"#051B4A","color":"white"},on:{"click":function($event){_vm.page = 4}},model:{value:(_vm.page),callback:function ($$v) {_vm.page=_vm._n($$v)},expression:"page"}},[_vm._v("4")]),_vm._v(" "),_c('md-button',{staticClass:"md-raised md-primary",staticStyle:{"background-color":"#051B4A","color":"white"},on:{"click":function($event){_vm.page = 5}},model:{value:(_vm.page),callback:function ($$v) {_vm.page=_vm._n($$v)},expression:"page"}},[_vm._v("5")]),_vm._v(" "),_c('md-button',{staticClass:"md-raised md-primary",staticStyle:{"background-color":"#051B4A","color":"white"},on:{"click":function($event){_vm.page += 1}},model:{value:(_vm.page),callback:function ($$v) {_vm.page=_vm._n($$v)},expression:"page"}},[_vm._v("Seuraava")])],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"julkaisu"},[_c('div',{staticClass:"container"},[_c('router-link',{attrs:{"to":"/haku"}},[_c('md-button',{staticClass:"md-raised md-primary"},[_vm._v("Palaa hakutuloksiin  "),_c('md-icon',{staticStyle:{"color":"white"}},[_vm._v("keyboard_return")])],1)],1),_vm._v(" "),_c('h1',[_vm._v(_vm._s(_vm.result.fields.name))]),_vm._v(" "),_c('Video'),_vm._v(" "),_c('h2',[_vm._v(_vm._s(_vm.result.fields.leadParagraph))]),_vm._v(" "),_c('p',[_c('vue-markdown',[_vm._v(_vm._s(_vm.result.fields.bodyText))])],1),_vm._v(" "),_c('Pdf'),_vm._v(" "),_c('router-link',{attrs:{"to":"/haku"}},[_c('md-button',{staticClass:"md-raised md-primary"},[_vm._v("Palaa hakutuloksiin  "),_c('md-icon',{staticStyle:{"color":"white"}},[_vm._v("keyboard_return")])],1)],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 420:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'ohjeet',

  data: function data() {
    return {};
  },

  methods: {
    buttonPress: function buttonPress() {
      answer.innerHTML = 'moi';
    },
    pressKey: function pressKey(e) {
      console.log(e.target.value);
    },
    hitEnter: function hitEnter() {
      console.log('enter');
    },
    deleteUser: function deleteUser(user) {
      this.users.splice(this.users.indexOf(user), 1);
    },
    addUser: function addUser(e) {
      //Viedään user eteenpäin
      this.users.push({
        name: this.newUser.name,
        email: this.newUser.email,
        contacted: false
      });
      // estetään formia menemästä läpi oikesti
      e.preventDefault();
    }

  },
  computed: {
    fullName: function fullName() {
      return this.user.firstName + ' ' + this.user.lastName;
    }
  }

});

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ohjeet"},[_c('div',{staticClass:"tausta"},[_c('md-layout',{staticStyle:{"color":"white"}},[_c('md-layout',{staticStyle:{"overflow":"hidden"}},[_c('div',{staticStyle:{"min-width":"60rem","margin-right":"auto","margin-left":"auto","margin-top":"2rem"}},[_c('h1',[_vm._v("Ohjeet")]),_vm._v(" "),_c('h2',[_vm._v("Tervetuloa Duodopa ohjesivulle")])])])],1)],1),_vm._v(" "),_c('div',{staticClass:"container"},[_vm._m(0),_vm._v(" "),_vm._m(1),_vm._v(" "),_vm._m(2),_vm._v(" "),_vm._m(3),_vm._v(" "),_vm._m(4),_vm._v(" "),_c('md-button',{staticClass:"md-raised md-primary",staticStyle:{"background-color":"#051B4A","color":"white"}},[_vm._v("Tulosta ohjeet  "),_c('md-icon',{staticStyle:{"color":"white"}},[_vm._v("print")])],1),_vm._v(" "),_c('router-link',{attrs:{"to":"/haku"}},[_c('md-button',{staticClass:"md-raised md-primary",staticStyle:{"background-color":"#051B4A","color":"white"}},[_vm._v("Palaa etusivulle  "),_c('md-icon',{staticStyle:{"color":"white"}},[_vm._v("keyboard_return")])],1)],1)],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"margin-bottom":"6%"}},[_c('h3',[_vm._v("Rekisteröityminen")]),_vm._v(" "),_c('p',[_vm._v("Rekisteröitymiseen liityvät ohjeet kirjoitetaan tähän. Rekisteröitymiseen liityvät ohjeet kirjoitetaan tähän.Rekisteröitymiseen liityvät ohjeet kirjoitetaan tähän.Rekisteröitymiseen liityvät ohjeet kirjoitetaan tähän.Rekisteröitymiseen liityvät ohjeet kirjoitetaan tähän.Rekisteröitymiseen liityvät ohjeet kirjoitetaan tähän.Rekisteröitymiseen liityvät ohjeet kirjoitetaan tähän.Rekisteröitymiseen liityvät ohjeet kirjoitetaan tähän.Rekisteröitymiseen liityvät ohjeet kirjoitetaan tähän. ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"margin-bottom":"6%"}},[_c('h3',[_vm._v("Kirjautuminen")]),_vm._v(" "),_c('p',[_vm._v("Kirjautumiseen liityvät ohjeet kirjoitetaan tähän. Kirjautumiseen liityvät ohjeet kirjoitetaan tähän. Kirjautumiseen liityvät ohjeet kirjoitetaan tähän. Kirjautumiseen liityvät ohjeet kirjoitetaan tähän. Kirjautumiseen liityvät ohjeet kirjoitetaan tähän. Kirjautumiseen liityvät ohjeet kirjoitetaan tähän. Kirjautumiseen liityvät ohjeet kirjoitetaan tähän. Kirjautumiseen liityvät ohjeet kirjoitetaan tähän. Kirjautumiseen liityvät ohjeet kirjoitetaan tähän. Kirjautumiseen liityvät ohjeet kirjoitetaan tähän. Kirjautumiseen liityvät ohjeet kirjoitetaan tähän. ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"margin-bottom":"6%"}},[_c('h3',[_vm._v("Sisältöjen hakeminen")]),_vm._v(" "),_c('p',[_vm._v("Hakemiseen liityvät ohjeet kirjoitetaan tähän. Hakemiseen liityvät ohjeet kirjoitetaan tähän. Hakemiseen liityvät ohjeet kirjoitetaan tähän. Hakemiseen liityvät ohjeet kirjoitetaan tähän. Hakemiseen liityvät ohjeet kirjoitetaan tähän. Hakemiseen liityvät ohjeet kirjoitetaan tähän. Hakemiseen liityvät ohjeet kirjoitetaan tähän. Hakemiseen liityvät ohjeet kirjoitetaan tähän. Hakemiseen liityvät ohjeet kirjoitetaan tähän. Hakemiseen liityvät ohjeet kirjoitetaan tähän. Hakemiseen liityvät ohjeet kirjoitetaan tähän. Hakemiseen liityvät ohjeet kirjoitetaan tähän. ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"margin-bottom":"6%"}},[_c('h3',[_vm._v("Uloskirjautuminen")]),_vm._v(" "),_c('p',[_vm._v("Uloskirjautumiseen liityvät ohjeet kirjoitetaan tähän. Uloskirjautumiseen liityvät ohjeet kirjoitetaan tähän. Uloskirjautumiseen liityvät ohjeet kirjoitetaan tähän. Uloskirjautumiseen liityvät ohjeet kirjoitetaan tähän. Uloskirjautumiseen liityvät ohjeet kirjoitetaan tähän. Uloskirjautumiseen liityvät ohjeet kirjoitetaan tähän. Uloskirjautumiseen liityvät ohjeet kirjoitetaan tähän. Uloskirjautumiseen liityvät ohjeet kirjoitetaan tähän. Uloskirjautumiseen liityvät ohjeet kirjoitetaan tähän. Uloskirjautumiseen liityvät ohjeet kirjoitetaan tähän. ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"margin-bottom":"6%"}},[_c('h3',[_vm._v("Rekisteriseloste")]),_vm._v(" "),_c('p',[_vm._v("Rekisteriselosteeseen liityvät ohjeet kirjoitetaan tähän. Rekisteriselosteeseen liityvät ohjeet kirjoitetaan tähän. Rekisteriselosteeseen liityvät ohjeet kirjoitetaan tähän. Rekisteriselosteeseen liityvät ohjeet kirjoitetaan tähän. Rekisteriselosteeseen liityvät ohjeet kirjoitetaan tähän. Rekisteriselosteeseen liityvät ohjeet kirjoitetaan tähän. Rekisteriselosteeseen liityvät ohjeet kirjoitetaan tähän. Rekisteriselosteeseen liityvät ohjeet kirjoitetaan tähän. Rekisteriselosteeseen liityvät ohjeet kirjoitetaan tähän. Rekisteriselosteeseen liityvät ohjeet kirjoitetaan tähän. ")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('md-toolbar',{staticStyle:{"background-color":"#051B4A","margin-bottom":"0","color":"white","z-index":"101"}},[_c('router-link',{staticStyle:{"margin-left":"auto","margin-right":"auto","width":"8em"},attrs:{"to":"/"}},[_c('img',{staticStyle:{"display":"block","margin-left":"auto","margin-right":"auto","padding":"2px","width":"10em","border":"none"},attrs:{"src":__webpack_require__(424)}})]),_vm._v(" "),_c('h2',{staticClass:"md-button",staticStyle:{"flex":"1","margin-left":"2em"}},[_vm._v("Parkinsonin tauti")]),_vm._v(" "),_c('h2',{staticClass:"md-button",staticStyle:{"flex":"1","margin-left":"2em"}},[_vm._v("Autoimmuunisairaudet ")]),_vm._v(" "),_c('h2',{staticClass:"md-button",staticStyle:{"flex":"1","margin-left":"2em"}},[_vm._v("C-hepatiitti")]),_vm._v(" "),_c('router-link',{staticClass:"md-button",attrs:{"to":"/asetukset"}},[_vm._v("Kalle Oksa    "),_c('md-icon',{staticStyle:{"margin-left":"10px"}},[_vm._v("lock")])],1)],1),_vm._v(" "),([ '#', 'Haku', 'Asetukset', 'Ohjeet', 'Julkaisu' ].indexOf(_vm.$route.name) > -1)?_c('div',{directives:[{name:"sticky",rawName:"v-sticky"}],staticClass:"secondary-nav",attrs:{"z-index":100}},[_c('div',{staticClass:"links"},[_c('router-link',{staticClass:"md-button",staticStyle:{"font-weight":"400","text-transform":"none"},attrs:{"to":"/"}},[_c('h5',[_vm._v("Duodopa®")])]),_vm._v(" "),_c('router-link',{staticClass:"md-button",staticStyle:{"font-weight":"400","text-transform":"none"},attrs:{"to":"/"}},[_c('h5',[_vm._v("Etusivu")])]),_vm._v(" "),_c('router-link',{staticClass:"md-button",staticStyle:{"font-weight":"300","text-transform":"none"},attrs:{"to":"/asetukset"}},[_c('h5',[_vm._v("Asetukset")])]),_vm._v(" "),_c('router-link',{staticClass:"md-button",staticStyle:{"font-weight":"300","text-transform":"none"},attrs:{"to":"/haku"}},[_c('h5',[_vm._v("Haku")])]),_vm._v(" "),_c('router-link',{staticClass:"md-button",staticStyle:{"font-weight":"300","text-transform":"none"},attrs:{"to":"/ohjeet"}},[_c('h5',[_vm._v("Ohjeet")])])],1)]):_vm._e(),_vm._v(" "),_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 424:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 427:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 429:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 86,
	"./af.js": 86,
	"./ar": 87,
	"./ar-dz": 88,
	"./ar-dz.js": 88,
	"./ar-kw": 89,
	"./ar-kw.js": 89,
	"./ar-ly": 90,
	"./ar-ly.js": 90,
	"./ar-ma": 91,
	"./ar-ma.js": 91,
	"./ar-sa": 92,
	"./ar-sa.js": 92,
	"./ar-tn": 93,
	"./ar-tn.js": 93,
	"./ar.js": 87,
	"./az": 94,
	"./az.js": 94,
	"./be": 95,
	"./be.js": 95,
	"./bg": 96,
	"./bg.js": 96,
	"./bm": 97,
	"./bm.js": 97,
	"./bn": 98,
	"./bn.js": 98,
	"./bo": 99,
	"./bo.js": 99,
	"./br": 100,
	"./br.js": 100,
	"./bs": 101,
	"./bs.js": 101,
	"./ca": 102,
	"./ca.js": 102,
	"./cs": 103,
	"./cs.js": 103,
	"./cv": 104,
	"./cv.js": 104,
	"./cy": 105,
	"./cy.js": 105,
	"./da": 106,
	"./da.js": 106,
	"./de": 107,
	"./de-at": 108,
	"./de-at.js": 108,
	"./de-ch": 109,
	"./de-ch.js": 109,
	"./de.js": 107,
	"./dv": 110,
	"./dv.js": 110,
	"./el": 111,
	"./el.js": 111,
	"./en-au": 112,
	"./en-au.js": 112,
	"./en-ca": 113,
	"./en-ca.js": 113,
	"./en-gb": 114,
	"./en-gb.js": 114,
	"./en-ie": 115,
	"./en-ie.js": 115,
	"./en-nz": 116,
	"./en-nz.js": 116,
	"./eo": 117,
	"./eo.js": 117,
	"./es": 118,
	"./es-do": 119,
	"./es-do.js": 119,
	"./es-us": 120,
	"./es-us.js": 120,
	"./es.js": 118,
	"./et": 121,
	"./et.js": 121,
	"./eu": 122,
	"./eu.js": 122,
	"./fa": 123,
	"./fa.js": 123,
	"./fi": 124,
	"./fi.js": 124,
	"./fo": 125,
	"./fo.js": 125,
	"./fr": 126,
	"./fr-ca": 127,
	"./fr-ca.js": 127,
	"./fr-ch": 128,
	"./fr-ch.js": 128,
	"./fr.js": 126,
	"./fy": 129,
	"./fy.js": 129,
	"./gd": 130,
	"./gd.js": 130,
	"./gl": 131,
	"./gl.js": 131,
	"./gom-latn": 132,
	"./gom-latn.js": 132,
	"./gu": 133,
	"./gu.js": 133,
	"./he": 134,
	"./he.js": 134,
	"./hi": 135,
	"./hi.js": 135,
	"./hr": 136,
	"./hr.js": 136,
	"./hu": 137,
	"./hu.js": 137,
	"./hy-am": 138,
	"./hy-am.js": 138,
	"./id": 139,
	"./id.js": 139,
	"./is": 140,
	"./is.js": 140,
	"./it": 141,
	"./it.js": 141,
	"./ja": 142,
	"./ja.js": 142,
	"./jv": 143,
	"./jv.js": 143,
	"./ka": 144,
	"./ka.js": 144,
	"./kk": 145,
	"./kk.js": 145,
	"./km": 146,
	"./km.js": 146,
	"./kn": 147,
	"./kn.js": 147,
	"./ko": 148,
	"./ko.js": 148,
	"./ky": 149,
	"./ky.js": 149,
	"./lb": 150,
	"./lb.js": 150,
	"./lo": 151,
	"./lo.js": 151,
	"./lt": 152,
	"./lt.js": 152,
	"./lv": 153,
	"./lv.js": 153,
	"./me": 154,
	"./me.js": 154,
	"./mi": 155,
	"./mi.js": 155,
	"./mk": 156,
	"./mk.js": 156,
	"./ml": 157,
	"./ml.js": 157,
	"./mr": 158,
	"./mr.js": 158,
	"./ms": 159,
	"./ms-my": 160,
	"./ms-my.js": 160,
	"./ms.js": 159,
	"./my": 161,
	"./my.js": 161,
	"./nb": 162,
	"./nb.js": 162,
	"./ne": 163,
	"./ne.js": 163,
	"./nl": 164,
	"./nl-be": 165,
	"./nl-be.js": 165,
	"./nl.js": 164,
	"./nn": 166,
	"./nn.js": 166,
	"./pa-in": 167,
	"./pa-in.js": 167,
	"./pl": 168,
	"./pl.js": 168,
	"./pt": 169,
	"./pt-br": 170,
	"./pt-br.js": 170,
	"./pt.js": 169,
	"./ro": 171,
	"./ro.js": 171,
	"./ru": 172,
	"./ru.js": 172,
	"./sd": 173,
	"./sd.js": 173,
	"./se": 174,
	"./se.js": 174,
	"./si": 175,
	"./si.js": 175,
	"./sk": 176,
	"./sk.js": 176,
	"./sl": 177,
	"./sl.js": 177,
	"./sq": 178,
	"./sq.js": 178,
	"./sr": 179,
	"./sr-cyrl": 180,
	"./sr-cyrl.js": 180,
	"./sr.js": 179,
	"./ss": 181,
	"./ss.js": 181,
	"./sv": 182,
	"./sv.js": 182,
	"./sw": 183,
	"./sw.js": 183,
	"./ta": 184,
	"./ta.js": 184,
	"./te": 185,
	"./te.js": 185,
	"./tet": 186,
	"./tet.js": 186,
	"./th": 187,
	"./th.js": 187,
	"./tl-ph": 188,
	"./tl-ph.js": 188,
	"./tlh": 189,
	"./tlh.js": 189,
	"./tr": 190,
	"./tr.js": 190,
	"./tzl": 191,
	"./tzl.js": 191,
	"./tzm": 192,
	"./tzm-latn": 193,
	"./tzm-latn.js": 193,
	"./tzm.js": 192,
	"./uk": 194,
	"./uk.js": 194,
	"./ur": 195,
	"./ur.js": 195,
	"./uz": 196,
	"./uz-latn": 197,
	"./uz-latn.js": 197,
	"./uz.js": 196,
	"./vi": 198,
	"./vi.js": 198,
	"./x-pseudo": 199,
	"./x-pseudo.js": 199,
	"./yo": 200,
	"./yo.js": 200,
	"./zh-cn": 201,
	"./zh-cn.js": 201,
	"./zh-hk": 202,
	"./zh-hk.js": 202,
	"./zh-tw": 203,
	"./zh-tw.js": 203
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 432;

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Etusivu_vue__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_161fd787_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Etusivu_vue__ = __webpack_require__(212);
function injectStyle (ssrContext) {
  __webpack_require__(210)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-161fd787"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Etusivu_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_161fd787_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Etusivu_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Asetukset_vue__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6222ca97_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Asetukset_vue__ = __webpack_require__(215);
function injectStyle (ssrContext) {
  __webpack_require__(213)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6222ca97"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Asetukset_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6222ca97_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Asetukset_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Haku_vue__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_75d5a187_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Haku_vue__ = __webpack_require__(253);
function injectStyle (ssrContext) {
  __webpack_require__(216)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-75d5a187"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Haku_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_75d5a187_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Haku_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Video_vue__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_158022c7_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Video_vue__ = __webpack_require__(252);
function injectStyle (ssrContext) {
  __webpack_require__(218)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-158022c7"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Video_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_158022c7_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Video_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Julkaisu_vue__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_42234a78_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Julkaisu_vue__ = __webpack_require__(419);
function injectStyle (ssrContext) {
  __webpack_require__(255)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-42234a78"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Julkaisu_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_42234a78_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Julkaisu_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Ohjeet_vue__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8ba40232_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Ohjeet_vue__ = __webpack_require__(422);
function injectStyle (ssrContext) {
  __webpack_require__(420)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8ba40232"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Ohjeet_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8ba40232_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Ohjeet_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

},[204]);
//# sourceMappingURL=app.8d0aaf1e8e02a55363bd.js.map