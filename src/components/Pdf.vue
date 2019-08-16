<template>
  <div class="pdf">
        <div class="pdf-reader">
          <pdf class="pdf-show" ref="moi" v-bind:src="src" :page="page" @numPages="numPages = $event"></pdf>
            <div class="pagination">
                <md-button style="background-color:  #051B4A; color: white;" class="md-raised md-primary "  v-model.number="page" @click="page -= 1" >Edellinen</md-button>
                <md-button style="background-color:  #051B4A; color: white;" class="md-raised md-primary"  v-model.number="page" @click="page = 1" >1</md-button>
                <md-button style="background-color:  #051B4A; color: white;" class="md-raised md-primary"  v-model.number="page" @click="page = 2" >2</md-button>
                <md-button style="background-color:  #051B4A; color: white;" class="md-raised md-primary"  v-model.number="page" @click="page = 3" >3</md-button>
                <md-button style="background-color:  #051B4A; color: white;" class="md-raised md-primary"  v-model.number="page" @click="page = 4" >4</md-button>
                <md-button style="background-color:  #051B4A; color: white;" class="md-raised md-primary"  v-model.number="page" @click="page = 5" >5</md-button>
                <md-button style="background-color:  #051B4A; color: white;" class="md-raised md-primary"  v-model.number="page" @click="page += 1" >Seuraava</md-button>
            </div>
        </div>
  </div>
</template>

<script>
import pdf from 'vue-pdf'

const access_token = '01a2c19d945b439da132249d1b2c265ea71e71a39be1ffa0cce5328a7d10d388'
const spaces = 'gux1c3twzpd4'


export default {
  data() {
    return {
      id: this.$route.params.id,
      result: [],
      src: '',
      loadedRatio: 0,
      page: 1,
      numPages: 0,
      rotate: 0,
      src: './static/hoidon_aloitus.pdf',
    
    }
  },
  components: {
    pdf,

  },

}

</script>
<style scoped>
.pagination {
    display: inline-block;
    width: 100%;
    text-align: center;
    margin-top: 2rem;
}

.pagination a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
}


.pagination a.active {
    background-color: #4CAF50;
    color: white;
}

.pagination a:hover:not(.active) {background-color: #ddd;}






</style>
