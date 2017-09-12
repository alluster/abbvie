<template>
  <div class="julkaisu">
        <router-link v-bind:to="'/haku'">
        <button>{{buttonInfo}}</button>
        </router-link>
        <vue-markdown>{{result.fields.name}}</vue-markdown>
        <vue-markdown>{{result.fields.leadParagraph}}</vue-markdown>
        <vue-markdown>{{result.fields.bodyText}}</vue-markdown>


</div>
</template>


<script>
import VueMarkdown from 'vue-markdown' 

export default {
  name: 'julkaisu',
  data () {
    return {
      id: this.$route.params.id,
      result: [],
      buttonInfo: 'Takaisin hakutuloksiin'
    }
  },
  components: {
    VueMarkdown
  },
  methods: {
    fetchJulkaisu(){
      this.$http.get('https://cdn.contentful.com/spaces/crri95q24zbr/entries/'+this.id+'/?access_token=36d87b4c5f2c055c76428045c3c755b8281c1da923ff9293f6cb387d5eb925a7')
        .then(response => {
            (this.result = JSON.parse(response.body))
            console.log(response);
        });

    }
  },
  //  watch: {
  //     '$route': 'fetchJulkaisu'
  //   },

    created: function() {
      this.fetchJulkaisu(this.$route.params.id);
    },


        }

</script>
<!-- https://cdn.contentful.com/spaces/crri95q24zbr/content_types/person?access_token=36d87b4c5f2c055c76428045c3c755b8281c1da923ff9293f6cb387d5eb925a7 -->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/*Fonts */

.julkaisu {
  margin: 30px;
}
.vue-markdown { 
text-align: left }
h1 {
  text-align: left;
  margin-left: 10%
}
h2 {
  text-align: left;
  margin-left: 10%
}
h3 {
  text-align: left;
  margin-left: 10%
}
h4 {
  text-align: left;
  margin-left: 10%
}

p {
  margin-left: 10%;
 text-align: left
}


/*Card view*/
  .media-cards {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
  }
  .media-card {
    flex: 3;
    margin: 10px;
    box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
    min-width: 250px;
    min-height: 300px;
    overflow: hidden;
    display: inline-block;
    text-overflow: ellipsis;
  }
  .image-container {
    max-width: 100px;
    max-height: 150px;
  }
  .image-container img {
    object-fit: contain;
    max-width: 100px;
    max-height: 150px;
  }
  .media-card .text {
    padding: 0 20px 20px;
    font-size: 12px;
    word-wrap: break-word;
    text-align: left;
  }
    .media-card .text > p {

      font-size: 12px;
      word-wrap: break-word;
    }
  .media-card .text > button {
    background: gray;
    border: 0;
    color: white;
    padding: 10px;
    width: 100%;
    }

</style>
