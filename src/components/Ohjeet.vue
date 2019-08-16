<template>
  <div class="ohjeet">
        <div class="tausta">
      <md-layout style="color: white"  >
        <md-layout style="overflow: hidden;"  >
          <div style="min-width: 60rem; margin-right:auto;margin-left: auto; margin-top: 2rem">
            <h1>Ohjeet</h1>
            <h2>Tervetuloa Duodopa ohjesivulle</h2>
          </div>
        </md-layout>
      </md-layout>
    </div>
    <div class="container">
      <div style="margin-bottom: 6%">
        <h3>Rekisteröityminen</h3>
        <p>Rekisteröitymiseen liityvät ohjeet kirjoitetaan tähän. Rekisteröitymiseen liityvät ohjeet kirjoitetaan tähän.Rekisteröitymiseen liityvät ohjeet kirjoitetaan tähän.Rekisteröitymiseen liityvät ohjeet kirjoitetaan tähän.Rekisteröitymiseen liityvät ohjeet kirjoitetaan tähän.Rekisteröitymiseen liityvät ohjeet kirjoitetaan tähän.Rekisteröitymiseen liityvät ohjeet kirjoitetaan tähän.Rekisteröitymiseen liityvät ohjeet kirjoitetaan tähän.Rekisteröitymiseen liityvät ohjeet kirjoitetaan tähän. </p>
      </div>
      <div style="margin-bottom: 6%">
        <h3>Kirjautuminen</h3>
        <p>Kirjautumiseen liityvät ohjeet kirjoitetaan tähän. Kirjautumiseen liityvät ohjeet kirjoitetaan tähän. Kirjautumiseen liityvät ohjeet kirjoitetaan tähän. Kirjautumiseen liityvät ohjeet kirjoitetaan tähän. Kirjautumiseen liityvät ohjeet kirjoitetaan tähän. Kirjautumiseen liityvät ohjeet kirjoitetaan tähän. Kirjautumiseen liityvät ohjeet kirjoitetaan tähän. Kirjautumiseen liityvät ohjeet kirjoitetaan tähän. Kirjautumiseen liityvät ohjeet kirjoitetaan tähän. Kirjautumiseen liityvät ohjeet kirjoitetaan tähän. Kirjautumiseen liityvät ohjeet kirjoitetaan tähän. </p>
      </div>
      <div style="margin-bottom: 6%">
        <h3>Sisältöjen hakeminen</h3>
        <p>Hakemiseen liityvät ohjeet kirjoitetaan tähän. Hakemiseen liityvät ohjeet kirjoitetaan tähän. Hakemiseen liityvät ohjeet kirjoitetaan tähän. Hakemiseen liityvät ohjeet kirjoitetaan tähän. Hakemiseen liityvät ohjeet kirjoitetaan tähän. Hakemiseen liityvät ohjeet kirjoitetaan tähän. Hakemiseen liityvät ohjeet kirjoitetaan tähän. Hakemiseen liityvät ohjeet kirjoitetaan tähän. Hakemiseen liityvät ohjeet kirjoitetaan tähän. Hakemiseen liityvät ohjeet kirjoitetaan tähän. Hakemiseen liityvät ohjeet kirjoitetaan tähän. Hakemiseen liityvät ohjeet kirjoitetaan tähän. </p>
      </div>
      <div style="margin-bottom: 6%">
        <h3>Uloskirjautuminen</h3>
        <p>Uloskirjautumiseen liityvät ohjeet kirjoitetaan tähän. Uloskirjautumiseen liityvät ohjeet kirjoitetaan tähän. Uloskirjautumiseen liityvät ohjeet kirjoitetaan tähän. Uloskirjautumiseen liityvät ohjeet kirjoitetaan tähän. Uloskirjautumiseen liityvät ohjeet kirjoitetaan tähän. Uloskirjautumiseen liityvät ohjeet kirjoitetaan tähän. Uloskirjautumiseen liityvät ohjeet kirjoitetaan tähän. Uloskirjautumiseen liityvät ohjeet kirjoitetaan tähän. Uloskirjautumiseen liityvät ohjeet kirjoitetaan tähän. Uloskirjautumiseen liityvät ohjeet kirjoitetaan tähän. </p>
      </div> 
      <div style="margin-bottom: 6%">
        <h3>Rekisteriseloste</h3>
        <p>Rekisteriselosteeseen liityvät ohjeet kirjoitetaan tähän. Rekisteriselosteeseen liityvät ohjeet kirjoitetaan tähän. Rekisteriselosteeseen liityvät ohjeet kirjoitetaan tähän. Rekisteriselosteeseen liityvät ohjeet kirjoitetaan tähän. Rekisteriselosteeseen liityvät ohjeet kirjoitetaan tähän. Rekisteriselosteeseen liityvät ohjeet kirjoitetaan tähän. Rekisteriselosteeseen liityvät ohjeet kirjoitetaan tähän. Rekisteriselosteeseen liityvät ohjeet kirjoitetaan tähän. Rekisteriselosteeseen liityvät ohjeet kirjoitetaan tähän. Rekisteriselosteeseen liityvät ohjeet kirjoitetaan tähän. </p>
      </div>
      <md-button style="background-color:  #051B4A; color: white;" class="md-raised md-primary">Tulosta ohjeet&nbsp;&nbsp;<md-icon style="color: white">print</md-icon></md-button>    
      <router-link to="/haku"><md-button style="background-color:  #051B4A; color: white;" class="md-raised md-primary">Palaa etusivulle&nbsp;&nbsp;<md-icon style="color: white">keyboard_return</md-icon></md-button></router-link>


</form>
</div>
  </div>
</template>
<script>
export default {
  name: 'ohjeet',
  
  data() {
    return {
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
  margin-bottom: 10%;
}
.tausta {
  background-image: url(../assets/abbvie.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 200px;
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
