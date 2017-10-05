<template>
  <div class="haku">
    <div class="tausta">
      <md-layout style="color: white"  >
        <md-layout style="overflow: hidden;"  >
          <div style="min-width: 60rem; margin-right:auto;margin-left: auto; margin-top: 2rem">
            <h1>Haku</h1>
            <h2>Tällä sivulla voit hakea erilaisia Duodopa® sisältöjä</h2>
          </div>
        </md-layout>
      </md-layout>
    </div>
    <div class="container">
    
      <md-input-container>
        <label>
          <md-icon>search</md-icon>&nbsp;Anna hakusana</label>
        <md-textarea style="margin-top: 2%" v-model='search'></md-textarea>      
        <div class="tooltip"><md-icon>help</md-icon>
        <span class="tooltiptext">Antamasi hakusana hakee automaattisesti sisältöjä. Kun olet kirjoittanut siirry suoraan hakutuloksiin sivun alareunaan</span>
       </div>
      </md-input-container>
        <md-button style="background-color:  #051B4A; color: white;" class="md-raised md-primary">PDF sisällöt&nbsp;&nbsp;<md-icon style="color: white">cancel</md-icon></md-button>
        <md-button style="background-color:  #051B4A; color: white;" class="md-raised md-primary">Sisällöt lääkärille&nbsp;&nbsp;<md-icon style="color: white">cancel</md-icon></md-button>
        <md-button style="background-color:  #051B4A; color: white;" class="md-raised md-primary">Videot&nbsp;&nbsp;<md-icon style="color: white">cancel</md-icon></md-button>
        <md-button style="background-color:  #051B4A; color: white;" class="md-raised md-primary">Sisällöt Hoitajalle&nbsp;&nbsp;<md-icon style="color: white">cancel</md-icon></md-button>
        <div class="tooltip"><md-icon>help</md-icon>
        <span class="tooltiptext">Voit sammuttaa haluamasi hakusuodattimet klikkaamalla</span>
      </div>

        <!-- Hieno snackbar -->

      <!-- <form novalidate @submit.stop.prevent="open">
        <md-button type="submit" class="md-primary md-raised">Open Snackbar</md-button>
        <md-snackbar :md-position="vertical + ' ' + horizontal" ref="snackbar" :md-duration="duration">
          <span>Ei toimi</span>
           <md-button class="md-accent" md-theme="light-blue" @click="$refs.snackbar.close()">Retry</md-button>
        </md-snackbar>
      </form> -->

      <!-- Hieno snackbar end -->
    
      <p style="text-align: right">
        <md-button v-on:click="seenList=false" v-bind:class="{ clicked: seenCards }" class="filter-button-left">
          <md-icon >view_week</md-icon>
        </md-button>
        <md-button v-on:click="seenList=true" v-bind:class="{ clicked: seenCList }" class="filter-button-right">
          <md-icon >view_stream</md-icon>
        </md-button>
      </p>

      <p>Hakutulokset:</p>
      <md-table v-if="seenList" >
        <md-table-body v-for="item in filteredItems">
          <md-table-row>
            <md-table-cell style="color: #051B4A;"> <router-link :to="'/julkaisu/'+item.id"><h3>{{item.name}}</h3></router-link></md-table-cell>
            <md-table-cell style="width: 20%">
              <router-link :to="'/julkaisu/'+item.id"><md-button style="background-color:  #051B4A; color: white; width: 100%" class="md-raised md-primary">Tarkastele sisältöä&nbsp;&nbsp;<md-icon style="color: white">search</md-icon></md-button></router-link>
            </md-table-cell>    
          </md-table-row>
        </md-table-body>
      </md-table>

      <md-layout v-else="seenCards" md-gutter>
        <md-layout md-flex="33" v-for="item in filteredItems">
          <div class="card radius shadowDepth1">
            <router-link :to="'/julkaisu/'+item.id">
              <div class="card__image border-tlr-radius">
                <img v-if="item.imageUrl" v-bind:src="item.imageUrl" alt="Image">
                <img v-else src="../assets/logo.png" alt="Product image">
              </div>
            </router-link>
            <div class="card__content card__padding">
              <div style="font-size: 15px; margin-bottom: 20px" class="card__meta">
                <a href="#">Duodopa® | Hoitaja</a> <br>               
                <a href="#">Julkaisupäivä: {{item.createdAt}}</a>
              </div>
              <article class="card__article">
                <router-link :to="'/julkaisu/'+item.id">
                  <a><h3 style="color: #051B4A">{{item.name}}</h3></a>
                </router-link>
                <p>{{item.leadParagraph}}</p>
              </article>
            </div>
            <div class="card__action">
            </div>
          </div>





          <!-- <md-card class="card">
            <router-link :to="'/julkaisu/'+item.id">
              <md-card-media md-flex="33">
                <img v-if="item.imageUrl" v-bind:src="item.imageUrl" alt="Image">
                <img v-else src="../assets/logo.png" alt="Product image">
              </md-card-media>
            </router-link>
            <md-card-header>
              <div>
                <router-link :to="'/julkaisu/'+item.id">
                  <h3>{{item.name}}</h3></router-link>
              </div>
            </md-card-header>
            <md-card-content style="margin-bottom: 30px">{{item.leadParagraph}}</md-card-content>
            <md-card-actions>
              <router-link :to="'/julkaisu/'+item.id" style="flex: 1; position: absolute; bottom: 5px; text-transform: none; font-weight:  300" class="md-button">Lue lisää</router-link>
            </md-card-actions>
          </md-card> -->
        </md-layout>
      </md-layout>
    </div>
  </div>
</template>
<script>
const access_token = '01a2c19d945b439da132249d1b2c265ea71e71a39be1ffa0cce5328a7d10d388'
const spaces = 'gux1c3twzpd4'





export default {
  name: 'haku',

  data() {
    return {
      search: '',
      result: [],
      filters: [],
      seenList: false,
      seenCards: true,
       vertical: 'bottom',
    horizontal: 'center',
    duration: 4000
      }
  },
  methods: {
      open() {
      this.$refs.snackbar.open();
    },
    fetchItems() {
      this.$http.get('https://cdn.contentful.com/spaces/' + spaces + '/entries?access_token=' + access_token + '')

        .then(response => {
          this.result = JSON.parse(response.body).items.map(a => {
            var imageId = a.fields.images ? a.fields.images : [{ 'sys': { 'id': '' } }];
            var dataObject = {
              'id': a.sys.id,
              'name': a.fields.name,
              'leadParagraph': a.fields.leadParagraph,
              'bodyText': a.fields.bodyText,
              'imageUrl': '',
              'createdAt': a.sys.createdAt,
              'tyyppi': a.sys.id,
            };
            if (imageId[0].sys.id) {
              this.$http.get('https://cdn.contentful.com/spaces/' + spaces + '/assets/' + imageId[0].sys.id + '?access_token=' + access_token + '')
                // https://cdn.contentful.com/spaces/gux1c3twzpd4/assets/4SDu2OUqvS4C2MseqqGyAs?access_token=01a2c19d945b439da132249d1b2c265ea71e71a39be1ffa0cce5328a7d10d388
                .then(response => {
                  dataObject.imageUrl = JSON.parse(response.body).fields.file.url;
                  console.log(dataObject);

                })
            }
            return dataObject;
          });
        });
    },

    filterCards: function() {
      $('#filterList').addClass('.show-list');
    },

  },
  created: function() {
    this.fetchItems();
  },

  computed: {
    filteredItems() {
      if (this.search && this.search.length <= 0) {
        return;
      }
      return this.result.filter(item => {
        if (item && item.name && item && item.leadParagraph && item && item.bodyText) {
          return item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
            item.leadParagraph.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
            item.bodyText.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        }
      })
    }
  }
}

</script>
<style scoped>
.container {
  z-index: 9;
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2%;
  animation: fadein 1s;
  -moz-animation: fadein 1s;
  -webkit-animation: fadein 1s;
  -o-animation: fadein 1s;
  margin-bottom: 10rem;
  min-height: 100vh;
}
.tausta {
  background-image: url(../assets/abbvie.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 30vh;
  animation: fadein 1s;
  -moz-animation: fadein 1s; /* Firefox */
  -webkit-animation: fadein 1s; /* Safari and Chrome */
  -o-animation: fadein 1s; /* Opera */
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}



.show-list {
  color: red;
}

.filter-view {
  margin-top: 2%;
  margin-bottom: 2%;
  text-align: ;
  padding: 20px;
}

.filter-view .md-icon {
  font-size: 1, 5rem;
  margin-left: 2%;
}

.label {
  margin-bottom: 20%;
}

.card {
  margin: 10px 10px 10px 0px;
}

.md-card-media {
  margin-bottom: 0px;
  width: 100%;
  text-align: center;
  overflow: hidden;
  height: 150px;
  z-index: 9;
}

h2 {
  margin: 0;
}

h1 {
  margin: 0;
}
.filter-button-top {
  border: solid 1px;
  border-color: #E4E4E4;
  margin-right: 0;
  border-radius: 6px 0px 0px 6px;
  color: #ADADAD;
}

.filter-button-left {
  border: solid 1px;
  border-color: #E4E4E4;
  margin-right: 0;
  border-radius: 6px 0px 0px 6px;
  color: #ADADAD;
}
.filter-button-left.clicked {
  color: #051B4A;
    margin-right: 0;
}
.filter-button-right {
  border: solid 1px;
  border-color: #E4E4E4;
  margin-left: 0;
  border-radius: 0px 6px 6px 0px;
  color: #ADADAD;
}
.filter-button-right.clicked {
  margin-right: 0;
}

.md-card img {
  width: 100%;
  height: auto;
  background-size: 100% auto !important;
  z-index: 9
}

.md-card-header {
  line-height: 1rem;
}

.md-card-content {
  margin: 0px;
  padding: 2rem
}



/*Kortit alkaa*/


/*
*  Basic Reset
*/

*,
*:after,
*:before {

  box-sizing: border-box;
}



/**
 * Basics Styles
 */

html {
  font-size: 62.5%;
}

body {
  background-color: #eee;
  font-family: Roboto;
  font-weight: 400;
  font-size: 1.6em;
  line-height: 1.6;
  color: #666;
}

a {
  text-decoration: underline;
  color: #051B4A;
}

a:hover {
  color: #051B4A;
}


h3 {
  line-height: 1.2;
  margin-bottom: 1.6rem;
}

.wrapper {
  max-width: 400px;
  margin: 50px auto;
  padding-left: 1em;
  padding-right: 1em;
}


/**
 * Helpers
 */







.border-tlr-radius {
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

.text-center {
  text-align: center;
}

.radius {
  border-radius: 2px;
}

.padding-tb {
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
}

.shadowDepth0 {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
}

.shadowDepth1 {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
  0 1px 2px rgba(0, 0, 0, 0.24);
}




/**
 * Card Styles
 */

.card {
  background-color: #fff;
  margin-bottom: 1.6rem;
}

.card__padding {
  padding: 1.6rem;
}

.card__image {
  margin-bottom: 0px;
  width: 100%;
  text-align: center;
  overflow: hidden;
  height: 200px;
  z-index: 9;
  background-color: white;
}

.card__image img {
  width: 100%;
  height: auto;
  background-size: 100% auto !important;
  z-index: 9;
  
}
.card__image img:hover {
  opacity: .5;
    -webkit-transition: .3s ease-in-out;
  transition: .1s ease-in-out;
}

.card__content {
  position: relative;
}



/* card meta */

.card__meta time {
  font-size: 1.5rem;
  color: #bbb;
  margin-left: 0.8rem;
}



/* card article */

.card__article a {
  text-decoration: none;
  color: #444;
  transition: all 0.5s ease;
}

.card__article a:hover {
  color: #2980b9;
}



/* card action */

.card__action {
  overflow: hidden;
  padding-right: 1.6rem;
  padding-left: 1.6rem;
  padding-bottom: 1.6rem;
}

.card__author {}

.card__author img,
.card__author-content {
  display: inline-block;
  vertical-align: middle;
}

.card__author img {
  border-radius: 50%;
  margin-right: 0.6em;
}

.card__share {
  float: right;
  position: relative;
  margin-top: -42px;
}

.card__social {
  position: absolute;
  top: 0;
  right: 0;
  visibility: hidden;
  width: 160px;
  transform: translateZ(0);
  transform: translateX(0px);
  transition: transform 0.35s ease;
}

.card__social--active {
  visibility: visible;
  /*z-index: 3;*/
  transform: translateZ(0);
  transform: translateX(-48px);
  transition: transform 0.35s ease;
}

.share-toggle {
  z-index: 2;
}

.share-toggle:before {
  content: "\f1e0";
  font-family: 'FontAwesome';
  color: #3498db;
}

.share-toggle.share-expanded:before {
  content: "\f00d";
}

.share-icon {
  display: inline-block;
  width: 48px;
  height: 48px;
  line-height: 48px;
  text-align: center;
  border-radius: 50%;
  background-color: #fff;
  transition: all 0.3s ease;
  outline: 0;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12),
  0 2px 4px rgba(0, 0, 0, 0.24);
}

.share-icon:hover,
.share-icon:focus {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12),
  0 3px 6px rgba(0, 0, 0, 0.24);

  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -ms-transform: scale(1.2);
  -o-transform: scale(1.2);
  transform: scale(1.2);
}






/*Kortit loppu
*/

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@-moz-keyframes fadein {
  /* Firefox */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@-webkit-keyframes fadein {
  /* Safari and Chrome */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@-o-keyframes fadein {
  /* Opera */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

</style>
