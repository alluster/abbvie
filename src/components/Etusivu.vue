<template>
  <div class="etusivu">
    <h1 class="header">{{ header }}</h1>
    <p class="lead">{{ lead }}</p>

  </div>
</template>

<script>
export default {
  name: 'etusivu',
  data () {
    return {
      header: 'Tervetuloa Kalle',
      lead: 'Olet saapunut AbbVie Duodopa® Platformiin, jonka tarkoituksena on opastaa sinua  Duodopa® -tuotteiden käytössä. Voit etsiä sivulta erilaisia aihealueita tai siirtyä linkeistä tutkimaan sisältöä hoitopolun mukaan.',
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
.header {
  margin: 20px
}
.lead {
  max-width: 70%;
  text-align: center;
  margin-left: 15%
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
</style>
