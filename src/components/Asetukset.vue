<template>
  <div class="asetukset">
        <div class="tausta">
      <md-layout style="color: white"  >
        <md-layout style="overflow: hidden;"  >
          <div style="min-width: 60rem; margin-right:auto;margin-left: auto; margin-top: 2rem">
            <h1>Asetukset</h1>
            <h2>Tällä sivulla voit muuttaa käyttäjätietojasi ja muita asetuksia</h2>
          </div>
        </md-layout>
      </md-layout>
    </div>
    <div class="container">

      <h3>Kalle Oksa</h3>

      <form novalidate @submit.stop.prevent="submit">
  <md-input-container>
    <label>Nimi</label>
    <md-input v-model="initialValue"></md-input>
  </md-input-container>

  <md-input-container>
    <label>Sukunimi</label>
    <md-autocomplete v-model="autocompleteValue" :fetch="fetchFunction"></md-autocomplete>
  </md-input-container>

  <md-input-container>
    <label>Sähköpostiosoite</label>
    <md-input placeholder="kalle.oksa@siili.com  "></md-input>
  </md-input-container>
    <router-link to="/haku"><md-button style="background-color:  #051B4A; color: white;" class="md-raised md-primary">Tallenna&nbsp;&nbsp;<md-icon style="color: white">save</md-icon></md-button></router-link>
    <router-link to="/haku"><md-button style="background-color:  #051B4A; color: white;" class="md-raised md-primary">Palaa etusivulle&nbsp;&nbsp;<md-icon style="color: white">keyboard_return</md-icon></md-button></router-link>


</form>
</div>
  </div>
</template>
<script>
export default {
  name: 'asetukset',
  
  data() {
    return {
      newUser: {},
      users: [],
      user: {
        firstName: 'Aleksanteri',
        lastName: 'Heliövaara'
      }
    }
  },
  methods: {
    buttonPress: function() {
      answer.innerHTML = ('moi');
    },
    pressKey: function(e) {
      console.log(e.target.value);
    },
    hitEnter: function() {
      console.log('enter');
    },
    deleteUser: function(user) {
      this.users.splice(this.users.indexOf(user), 1);
    },
    addUser: function(e) {
      //Viedään user eteenpäin
      this.users.push({
        name: this.newUser.name,
        email: this.newUser.email,
        contacted: false
      });
      // estetään formia menemästä läpi oikesti
      e.preventDefault();
    },

  },
  computed: {
    fullName: function() {
      return this.user.firstName + ' ' + this.user.lastName;
    }
  }

};

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  max-width: 60rem;
  min-height: 100vh;    
  margin-left: auto;
  margin-right: auto;
  margin-top: 2%;
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
.tausta:after{
  background:rgba(0, 0, 0, 0.75);
}

h2 {
  margin: 0;
}

h1 {
  margin: 0;
}

</style>
