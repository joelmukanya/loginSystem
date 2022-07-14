<template>
  <fieldset>
    <legend class="display-2 bg-gradient bg-dark text-white">Login</legend>
    <form class="form container" @submit.prevent="login">
        <div class="row">
            <label class="form-label bg-gradient">Email: </label>
            <input type="email" required v-model="email" placeholder="Enter your email" class="form-control"/>
        </div>
        <div class="row my-3">
            <label class="form-label bg-gradient">Password: </label>
            <input type="password" required v-model="password" placeholder="Enter your password" class=" form-control"/>
        </div>
        <div class="row bg-gradient">
            <button class=" btn btn-primary rounded align-self-end">Login</button>
        </div>
        <div v-if="users">
          <p class="lead bg-gradient">You're welcome {{users[0].firstname}} {{users[0].surname}} 
          to our app
          </p>
        </div>
        <div v-else>
          <router-link to="/register" class="lead bg-light" >Please register</router-link>
        </div>
    </form>
  </fieldset>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.state.users
    }
  },
  data() {
    return {
      firstname: '',
      surname: '',
      profile: '',
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

<style>

</style>