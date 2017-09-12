<template>
  <div class="search-content">
    <h2>Voit suorittaa haun hakusanoilla</h2>
    <input type="text" v-model='search' placeholder="Anna hakusana"/>
    <div class="media-cards">
  <div v-for='item in filteredItems' class="media-card">
    <div class="image-container">
        <img v-if="item.imageUrl" v-bind:src="item.imageUrl" alt="Image">
        <img v-else src="../assets/logo.png" alt="Product image">
    </div>
    <div class="text">
      <router-link v-bind:to="'/julkaisu/'+item.id"><h2>{{item.name}}</h2></router-link>
      <h4>{{item.leadParagraph}}</h4>

      <router-link v-bind:to="'/julkaisu/'+item.id">
      <button>{{buttonInfo}}</button>
      </router-link>
    </div>
  </div>
  </div>
</div>
</template>


<script>
const access_token = '36d87b4c5f2c055c76428045c3c755b8281c1da923ff9293f6cb387d5eb925a7'
const spaces = 'crri95q24zbr'
export default {
  name: 'search-content',

  data () {
    return {
      search: '',
      result: [],
      buttonInfo: 'See more',

    }
  },
  methods: {
    fetchItems(){
      this.$http.get('https://cdn.contentful.com/spaces/' + spaces + '/entries?access_token=' + access_token + '')
        .then(response => {
            this.result = JSON.parse(response.body).items.map(a => {
              var imageId = a.fields.productImages ? a.fields.productImages : [{'sys': {'id': ''}}];
              var dataObject = {
                        'id': a.sys.id,
                        'name': a.fields.name,
                        'leadParagraph': a.fields.leadParagraph,
                        'bodyText': a.fields.bodyText,
                        'imageUrl': '',
                         };
              if (imageId[0].sys.id) {
                  this.$http.get('https://cdn.contentful.com/spaces/' + spaces + '/assets/' + imageId[0].sys.id + '?access_token=' + access_token +'')
                    .then(response => {
                      dataObject.imageUrl = JSON.parse(response.body).fields.file.url;
                      console.log(dataObject);

                })
              }
              console.log('🚀');
                return dataObject;
            });
        });
    }
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

/*Fonts */
.search-content {
  margin: 30px
}
h1 {
  text-align: left;
  margin-left: 10%
}

h2 {
  text-align: left;
}
input {
  height: 30px;
  min-width: 80%;
  font-size: 20px;
  padding: 5px;

}

a {
  text-decoration: none;
}

a:link {
    color: black;
}

/* visited link */
a:visited {
    color: black;
}

/* mouse over link */
a:hover {
    color: purple;
}

/* selected link */
a:active {
    color: blue;
}
.text p {

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
    margin: 100px
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
