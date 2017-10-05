<template>
  <div class="julkaisu container">
    <router-link to="/haku"><md-button style="background-color:  #051B4A; color: white;" class="md-raised md-primary">Palaa hakutuloksiin&nbsp;&nbsp;<md-icon style="color: white">keyboard_return</md-icon></md-button></router-link>
    <h1><vue-markdown>{{result.fields.name}}</vue-markdown></h1>
    <h2><vue-markdown>{{result.fields.leadParagraph}}</vue-markdown></h2>
    <md-card>
      <div class="pdf-reader">
        <pdf class="pdf-show" ref="moi" src="./static/annoksen_muuttaminen_2016.pdf" :page="page" @numPages="numPages = $event"></pdf>
        <input class="pdf-input" type="number" v-model.number="page"> /{{numPages}} </input>
            <router-link to="/haku"><md-button style="background-color:  #051B4A; color: white;" class="md-raised md-primary pdf-input-button" @click="$refs.moi.print(100, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])">Tulosta PDF dokumentti&nbsp;&nbsp;<md-icon style="color: white">print</md-icon></md-button></router-link>
    
      </div>
    </md-card>
    <p>
      <vue-markdown>{{result.fields.bodyText}}</vue-markdown>
    </p>
    <md-card style="margin-bottom: 20px">
      <md-card-media>
        <div class="item">
          <div class="player">
            <video-player class="vjs-custom-skin" ref="videoPlayer" :options="playerOptions" :playsinline="true" @play="onPlayerPlay($event)"@pause="onPlayerPause($event)"@ended="onPlayerEnded($event)" @loadeddata="onPlayerLoadeddata($event)" @waiting="onPlayerWaiting($event)"@playing="onPlayerPlaying($event)"@timeupdate="onPlayerTimeupdate($event)"@canplay="onPlayerCanplay($event)" @canplaythrough="onPlayerCanplaythrough($event)"@read="playerReadied" @statechanged="playerStateChanged($event)">
            </video-player>
          </div>
        </div>
      </md-card-media>
    </md-card>
    <md-toolbar style="margin-top: 10%: margin-bottom: 10%" class="md-transparent md-large">
    <router-link to="/haku"><md-button style="background-color:  #051B4A; color: white;" class="md-raised md-primary">Palaa hakutuloksiin&nbsp;&nbsp;<md-icon style="color: white">keyboard_return</md-icon></md-button></router-link>
        <router-link to="/haku"><md-button style="background-color:  #051B4A; color: white;" class="md-raised md-primary">Lähetä tiedosto sähköpostilla&nbsp;&nbsp;<md-icon style="color: white">email</md-icon></md-button></router-link>
      </router-link>
    </md-toolbar>
    <md-table v-if="seenList" >
        <md-table-body v-for="item in filteredItems" :key="item.id">
          <md-table-row>
            <md-table-cell style="color: #051B4A;"> <router-link :to="'/julkaisu/'+item.id"><h3>{{item.name}}</h3></router-link></md-table-cell>
            <md-table-cell style="width: 20%">
              <router-link :to="'/julkaisu/'+item.id"><md-button style="background-color:  #051B4A; color: white; width: 100%" class="md-raised md-primary">Tarkastele sisältöä&nbsp;&nbsp;<md-icon style="color: white">search</md-icon></md-button></router-link>
            </md-table-cell>    
          </md-table-row>
        </md-table-body>
      </md-table>
  </div>
</template>
<script>
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
import { videoPlayer } from 'vue-video-player'
import VueMarkdown from 'vue-markdown'
import pdf from 'vue-pdf'

const access_token = '01a2c19d945b439da132249d1b2c265ea71e71a39be1ffa0cce5328a7d10d388'
const spaces = 'gux1c3twzpd4'


export default {
  name: 'julkaisu',
  data() {
    return {
      id: this.$route.params.id,
      result: [],
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
        poster: "/static/favicon.png",
      }
    }
  },
  components: {
    VueMarkdown,
    videoPlayer,
    pdf

  },
  methods: {
    fetchJulkaisu() {
      this.$http.get('https://cdn.contentful.com/spaces/' + spaces + '/entries/' + this.id + '/?access_token=' + access_token + '')
        .then(response => {
          (this.result = JSON.parse(response.body))

        });


    },
    onPlayerPlay(player) {
      // console.log('player play!', player)
    },
    onPlayerPause(player) {
      // console.log('player pause!', player)
    },
    // ...player event

    // or listen state event
    playerStateChanged(playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },

    // player is ready
    playerReadied(player) {
      console.log('the player is readied', player)
      // you can use it to do something...
      // player.[methods]
    }


  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    }
  },

  created: function() {
    this.fetchJulkaisu(this.$route.params.id);
  },


}

</script>
<style scoped>
.vue-markdown {
  text-align: left
}

.pdf-reader {
  margin-bottom: 1rem;
}

.pdf-show {
  margin-bottom: 1rem;
}

.pdf-input {
  width: 6rem;
  margin: 2rem;
  margin-bottom: 2rem;
  font-size: 20px;
  padding: 10px;
}

.pdf-input-button {
  margin: 2rem;
  margin-bottom: 5rem;
  font-size: 20px;
  padding: 10px;
}

.container {
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2%;
  animation: fadein 1s;
  -moz-animation: fadein 1s;
  /* Firefox */
  -webkit-animation: fadein 1s;
  /* Safari and Chrome */
  -o-animation: fadein 1s;
  /* Opera */
  margin-bottom: 10rem;
  min-height: 100vh;
}

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


.md-icon {
  color: #636363;
  margin-left: 20px
}

</style>
