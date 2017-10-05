<template>
  <div class="etusivu">
    <div class="tausta">
        <md-layout style="color: white"  >
          <md-layout style="background-color:; box-shadow: none; border: none; position: relative; margin: auto;" md-tag="md-card" md-column md-flex="30" md-flex-medium="40" md-flex-small="60" md-flex-xsmall="90" >
            <hgroup style="color: white">
              <h2>Duodopa®</h2>       
              <h1>Kirjaudu palveluun</h1>
              <h2>Tai rekisteröidy käyttäjäksi</h2> 
                  <router-link to="/haku"><md-button style="background-color:  #051B4A; color: white;" class="md-raised md-primary">Kirjaudu&nbsp;&nbsp;<md-icon style="color: white">arrow_right</md-icon></md-button></router-link>
                  <router-link to="/asetukset"><md-button style="background-color:  white; color:  #051B4A;" class="md-raised md-primary">Rekisteröidy käyttäjäksi&nbsp;&nbsp;<md-icon style="color: #051B4A">lock_open</md-icon></md-button></router-link>        

              <!-- <router-link :to="/haku"><md-button style="background-color:  #051B4A; color: white;" class="md-raised md-primary">Kirjaudu &nbsp;&nbsp;<md-icon style="color: white">arrow_right</md-icon></md-button></router-link>
              <router-link :to="/asetukset"><md-button style="background-color:  white; color: black;" class="md-raised md-background">Rekisteröidy palveluun&nbsp;&nbsp;<md-icon style="color: black">lock_open</md-icon></md-button></router-link> -->
            </hgroup>

           <!--  <md-card-content style="color: white">
              <div style="color: white;margin-right: auto; margin-left: auto;">
                <md-icon style="color: white" >person</md-icon>
                <label style="color: white" >Email</label>
                <md-input style="color: white" email required v-model="email" />
              </md-input-container>
              <md-input-container md-has-password style="color: white">
                <md-icon style="color: white">lock</md-icon>
                <label style="color: white">Salasana</label>
                <md-input style="color: white" type="password" required v-model="password" />
              <router-link style="color: white; text-align: center; width: 20rem;" to="/Haku" class="md-button" ><h3>Kirjaudu</h3></router-link>

              </div>
            </md-card-content> -->

          </md-layout>
        </md-layout>
    </div>
  </div>
</template>
<script>
export default {

  name: 'etusivu',
  data() {
    return {
      header: 'Tervetuloa Abbvie Duodopa® palveluun',
      lead: 'Ole hyvä ja kirjaudu jatkaaksesi palveluun. Mikäli sinulla ei vielä ole tunnuksia voit rekisteröityä. mikäli olet unohtanut salasanasi tai käyttäjätunnuksesi, paina tästä'
    }
  },
  method: {
    login: function() {
      console.log("jee")
      this.name = true
    }
  }
}

</script>
<style scoped>

.tausta {
  background-image: url(../assets/abbvie.jpg);

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: auto;
  min-width: 100%;
  min-height: 100vh;
  animation: fadein 1s;
  -moz-animation: fadein 1s; /* Firefox */
  -webkit-animation: fadein 1s; /* Safari and Chrome */
  -o-animation: fadein 1s; /* Opera */

}
.tausta:after{
  background:rgba(0, 0, 0, 0.75);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
hgroup {
  text-align: center;
  margin-top: 4em;
}

.mdl-layout {
  align-items: center;
  justify-content: center;
}

.mdl-layout__content {
  padding: 24px;
  flex: none;
}


@keyframes fadein {
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-moz-keyframes fadein { /* Firefox */
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-webkit-keyframes fadein { /* Safari and Chrome */
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-o-keyframes fadein { /* Opera */
    from {
        opacity:0;
    }
    to {
        opacity: 1;
    }
}

</style>
