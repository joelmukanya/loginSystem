<template>
  <div v-if="user">
    <HeaderComponent/>
  </div>
  <router-view />
</template>
<script>
import HeaderComponent from './views/header/Header.vue'

export default {
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  components: {
    HeaderComponent,
  }

}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #00381c;
  background-color: darkgray;
  font-size: 30px;
}
</style>
