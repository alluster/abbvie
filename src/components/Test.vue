<template>
  <div class="medicine">
    <p id='answer'>

    </p>
    <input v-model='msg' />
    <h1>{{ msg }}</h1>
    <button v-on:click='buttonPress'>Say greeting</button>
    <input type="text" v-on:keyup='pressKey' v-on:keyup.enter='hitEnter' />
  </br>
    <label>Firts name:</label><input type="text" placeholder='first name' v-model='user.firstName' />
    <label>Last name:</label><input type="text" placeholder='first name' v-model='user.lastName' />
    <h2>{{fullName}}</h2>
          <h1>Add a new user to the database</h1>

        <form v-on:submit='addUser'>
          <input type="text" v-model='newUser.name' placeholder="Give a name" />
          <input type="text" v-model='newUser.email' placeholder="Give a email" />
          <input type="submit" value="Submit" />
        </form>
        <ul>
          <li v-for='user in users'>
            <input type="checkbox" class='toggle' v-model='user.contacted' />
            <!-- // Spaniin on laitettu tyyli joka liitetään :class tyylillä styleen. ="{contacted: user.contacted}" voi olla ="{moi: user.contacted}" -->
          <span :class="{contacted: user.contacted}">{{user.name}}: {{user.email}}</span>
          <button type="button" name="button" v-on:click='deleteUser(user)'>Delete user</button>
          </li>
        </ul>

  </div>
</template>


<script>
export default {
  name: 'medicine',
  props: {
    // Tää propsi on lähettetty app.vue filestä tälle
    msg: {
      type: String,
      default: 'hello'
    }
  },
  data () {
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
            return this.user.firstName+ ' ' +this.user.lastName;
          }
        }

};

</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
