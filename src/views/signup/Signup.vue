<template>
  <HeaderComponent/>
  <fieldset>
    <legend class="display-2 bg-gradient bg-dark text-white">Register</legend>
    <form class="form container" @submit.prevent="signUp">
        <div class="row">
            <label class="form-label bg-gradient">Firstname: </label>
            <input class="form-control text-center" type="text" 
            placeholder="Enter your firstname" required/>
        </div>
        <div class="row my-3">
            <label class="form-label bg-gradient">Surname: </label>
            <input class="form-control text-center" type="text" 
            placeholder="Enter your surname" required/>
        </div>
        <div class="row">
            <label class="form-label bg-gradient">Select your profile: </label>
            <input class="form-control" type="file"/>
        </div>
        <div class="row my-3">
            <label class="form-label bg-gradient">Email: </label>
            <input class="form-control text-center" type="email" 
            placeholder="Enter your email" required/>
        </div>
        <div class="row">
            <label class="form-label bg-gradient">Password: </label>
            <input class="form-control text-center" type="password" 
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
    
  },
  data() {
    return {
      firstname: '',
      surname: '',
      profile: '',
      email: '',
      password: 0
    }
  },
  components: {
    HeaderComponent,
  },
  methods: {
    signUp() {
      this.$store.dispatch('signUp', {
        firstname: this.firstname,
        surnameya: this.surname,
        profile: this.profile,
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>
