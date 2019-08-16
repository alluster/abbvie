<template>
  <div class="video ">
      <md-card-media>
        <div class="item">
          <div class="player">
            <video-player class="vjs-custom-skin" ref="videoPlayer" :options="playerOptions" :playsinline="true" @play="onPlayerPlay($event)"@pause="onPlayerPause($event)"@ended="onPlayerEnded($event)" @loadeddata="onPlayerLoadeddata($event)" @waiting="onPlayerWaiting($event)"@playing="onPlayerPlaying($event)"@timeupdate="onPlayerTimeupdate($event)"@canplay="onPlayerCanplay($event)" @canplaythrough="onPlayerCanplaythrough($event)"@read="playerReadied" @statechanged="playerStateChanged($event)">
            </video-player>
          </div>
        </div>
      </md-card-media>
    </md-card>
   
   
  </div>
</template>
<script>
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
import { videoPlayer } from 'vue-video-player'

export default {
  name: 'video',
  data() {
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
        poster: "/static/favicon.png",
      }
    }
  },
  components: {
    videoPlayer,

  },
  methods: {
    
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

}

</script>
<style scoped>


</style>
