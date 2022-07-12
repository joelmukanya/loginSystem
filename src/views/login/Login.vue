<template>
  <fieldset>
    <legend class="display-2 bg-gradient bg-dark text-white">Login</legend>
    <form class="form container" @submit.prevent="login">
        <div class="row">
            <label>Email: </label>
            <input type="text" required v-model="email" placeholder="Enter your email" class="form-control"/>
        </div>
        <div class="row my-3">
            <label>Password: </label>
            <input type="password" required v-model="password" placeholder="Enter your password" class=" form-control"/>
        </div>
        <div class="row bg-gradient">
            <button class=" btn btn-primary rounded align-self-end">Login</button>
        </div>
        <div v-if="users">
          <p class="lead">You're welcome {{users[0].firstname}} {{users[0].surname}} 
          to our app
          </p>
        </div>
        <div v-else>
          <router-link to="/register" >Please register</router-link>
        </div>
    </form>
  </fieldset>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.state.users
    },
    error() {
      return this.$store.state.error
    },
    JTProfile() {
      return this.$store.state.users.profile
    }
  },
  data() {
    return {
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