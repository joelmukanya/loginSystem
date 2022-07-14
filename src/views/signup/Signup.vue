<template>
  <HeaderComponent/>
  <fieldset>
    <legend class="display-2 bg-gradient bg-dark text-white">Register</legend>
    <form class="form container" @submit.prevent="signUp">
        <div class="row">
            <label class="form-label bg-gradient">Firstname: </label>
            <input class="form-control text-center" v-model="firstname" type="text" 
            placeholder="Enter your firstname" required/>
        </div>
        <div class="row my-3">
            <label class="form-label bg-gradient">Surname: </label>
            <input class="form-control text-center" v-model="surname" type="text" 
            placeholder="Enter your surname" required/>
        </div>
        <div class="row">
            <label class="form-label bg-gradient">Image url: </label>
            <input class="form-control" type="text" v-model="profile" placeholder="Image URL or link"/>
        </div>
        <div class="row my-3">
            <label class="form-label bg-gradient">Email: </label>
            <input class="form-control text-center" v-model="email" type="email" 
            placeholder="Enter your email" required/>
        </div>
        <div class="row">
            <label class="form-label bg-gradient">Password: </label>
            <input class="form-control text-center" v-model="password" type="password" 
            placeholder="Enter your password" required/>
        </div>
        <div class="row my-3">
          <button class="btn btn-primary">Reister</button>
        </div>
    </form>
  </fieldset>
</template>

<script>
import HeaderComponent from '../header/Header.vue'

export default {
  computed: {
    user(){
      }
  },
  data() {
    return {
      firstname: '',
      surname: '',
      profile: '',
      email: '',
      password: null,
    }
  },
  components: {
    HeaderComponent,
  },
  methods: {
    signUp() {
      this.$store.dispatch('signUp', {
        firstname: this.firstname,
        surname: this.surname,
        profile: this.profile,
        email: this.email,
        password: this.password
      })
    }
  }
}
/*
To upload a file
uploadFile(event) {
  this.profile = event.target.files[0];
}
*/
</script>
