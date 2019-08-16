<template>
  <div class="julkaisu">
    <div class="container">
      <router-link to="/haku"><md-button class="md-raised md-primary">Palaa hakutuloksiin&nbsp;&nbsp;<md-icon style="color: white">keyboard_return</md-icon></md-button></router-link>
      <h1>{{result.fields.name}}</h1>
      <Video></Video>
      <h2>{{result.fields.leadParagraph}}</h2>
      <p><vue-markdown>{{result.fields.bodyText}}</vue-markdown></p>
      <Pdf></Pdf>
      <router-link to="/haku"><md-button class="md-raised md-primary">Palaa hakutuloksiin&nbsp;&nbsp;<md-icon style="color: white">keyboard_return</md-icon></md-button></router-link>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import Video from './Video'
import Pdf from './Pdf'

const access_token = '01a2c19d945b439da132249d1b2c265ea71e71a39be1ffa0cce5328a7d10d388'
const spaces = 'gux1c3twzpd4'


export default {
  name: 'julkaisu',
  data() {
    return {
      id: this.$route.params.id,
      result: [],
    }
  },
  components: {
    VueMarkdown,
    'Video': Video,
    'Pdf': Pdf,
  },
  methods: {
    fetchJulkaisu() {
      this.$http.get('https://cdn.contentful.com/spaces/' + spaces + '/entries/' + this.id + '/?access_token=' + access_token + '')
        .then(response => {
          (this.result = JSON.parse(response.body))
        });
    },
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

.md-raised {
  background-color:  #051B4A; 
  color: white;
  margin: 2rem 2rem 2rem 0rem;
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
