<template>
  <fieldset>
    <legend class="display-2 bg-gradient bg-dark text-white">Login</legend>
    <form class="form container">
        <div class="row">
            <label class="col-md-4">Email: </label>
            <input type="text" placeholder="Enter your email" class="col-md-6"/>
        </div>
        <div class="row my-3">
            <label class="col-md-4">Password: </label>
            <input type="password" placeholder="Enter your password" class="col-md-6"/>
        </div>
        <div class="row bg-gradient">
            <span class="col-md-4"></span>
            <button class="col-md-6 btn btn-primary rounded align-self-end">Login</button>
        </div>
        <div v-for="(user, i) in currentData" :key="i">
          <p>{{user.firstname}} {{user.surname}} </p>
        </div>
    </form>
  </fieldset>
</template>

<script>
export default {
  data(){
    return {
      currentData: []
    }
  },
  components: {},  
  methods: {
    display() {}
  },
  mounted(){
    this.currentData = this.$store.getters;
    console.log(this.currentData);
  }
}
</script>

<style>

</style>