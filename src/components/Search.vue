<template>
  <div class="search-content">
    <hr>
    <h1>Search content from the database</h1>
    <input type="text" v-on:keyup='pressKey' v-on:keyup.enter='hitEnter' v-model='search' placeholder="Search content"/>
    <div class="cards">
  <div v-for='item in filteredItems' class="card">
    <img :src="item.imageUrl" alt="Sample photo">
    <div class="text">
      <h1>name: {{item.name}}</h1>
      <h1>para: {{item.leadParagraph}}</h1>
      <h1>para: {{item.productImages.sys.id}}</h1>
      <!-- <h1>{{result.leadParagraph}}</h1>
      <h3>{{name}}</h3>
      <p>{{leadParagraph}}</p> -->
      <button>Here's why</button>
    </div>
  </div>
  </div>
</div>
</template>


<script>
function getImage(item) {
  return includes.assets.fields.file.url
};
export default {
  name: 'search-content',
  data () {
    return {
      search: '',
      result: []
    }
  },
  methods: {
    pressKey: function(press) {
      console.log(press.target.value);
    },
    hitEnter: function() {
      console.log('enter');
    }
    },
    created: function() {
      this.$http.get('https://cdn.contentful.com/spaces/crri95q24zbr/entries?access_token=36d87b4c5f2c055c76428045c3c755b8281c1da923ff9293f6cb387d5eb925a7')
        .then(function(response){
            this.result = JSON.parse(response.body).items.map(function(a) {
              return {
                        'name': a.fields.name,
                        'leadParagraph': a.fields.leadParagraph,
                        'imageUrl': getImage,
                        'imageId': a.fields.productImages.sys.id
                         };

              // console.log(a.fields);
              // if(a.fields.name + a.fields.leadParagraph){
              //   return a.fields.name + a.fields.leadParagraph;
              // }
              // else {
              //   return a.fields.firstName + ' ' + a.fields.lastName;
              // }
          });

        });
    },

    computed: {
      filteredItems() {
        if (!this.search && this.search.length <= 0) {
          return;
        }
        return this.result.filter(item => {
          if (item && item.name || item && item.leadParagraph) {
            return item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
              item.leadParagraph.toLowerCase().indexOf(this.search.toLowerCase()) > -1
          }
        })
      }
    }
  }


</script>







<!-- https://cdn.contentful.com/spaces/crri95q24zbr/content_types/person?access_token=36d87b4c5f2c055c76428045c3c755b8281c1da923ff9293f6cb387d5eb925a7 -->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  font-weight: normal;
}
hr {
  max-width: 80%;
  margin: 50px;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.contacted {
  text-decoration: line-through;;
}


/*Card view*/
.  .cards {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
  }
  .card {
    flex: 0 0 200px;
    margin: 10px;
    border: 1px solid #ccc;
    box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
  }
  .card img {
    max-width: 100%;
  }
  .card .text {
    padding: 0 20px 20px;
  }
  .card .text > button {
    background: gray;
    border: 0;
    color: white;
    padding: 10px;
    width: 100%;
    }

</style>
