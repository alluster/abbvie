<template>
    <div class="login">
    <h1 class="header">{{header}}</h1>
    <p class="lead" >{{lead}}</p>
    <form v-on:submit=''>
      <input type="text" v-model='username' placeholder="Insert username" />
      <br>
      <input type="password" v-model='password' placeholder="Insert password" />
      <br>
      <button v-on:click="login" type='submit'>Enter</button>
    </form>
  </div>
</template>


<script>
export default {
  props: {
    name: {
      type: Boolean,
      default: false
    }
  },
  name: 'login',
  data () {
    return {
      header: 'Tervetuloa Abbvie Duodopa® palveluun',
      lead: 'Ole hyvä ja kirjaudu jatkaaksesi palveluun. Mikäli sinulla ei vielä ole tunnuksia voit rekisteröityä. mikäli olet unohtanut salasanasi tai käyttäjätunnuksesi, paina tästä'
    }
  },
  method: {
    login: function(){
      console.log("jee")
      this.name = true
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
.contacted {
  text-decoration: line-through;;
}
input {
  margin: 20px;
}
</style>
