<template>
  <HeaderComponent />
  <div class="home">
    <h2 class="display-2">Fruits</h2>
    <div class="card-wrapper">
      <div class="card my-3" v-for="fruit in fruits" :key="fruit.id">
        <img :src="fruit.photoUrl" class="card-img-top img-fluid" :alt="fruit.name">
        <div class="card-body">
          <p class="card-text">{{fruit.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from './header/Header.vue'

export default {
  name: 'Fruits',
  computed: {
    users() {
      return this.$store.state.users
    },
    fruits() {
      return this.$store.state.fruits
    }
  },
  data() {
    return {
      id: 0,
      name: '',
      photo: ''
    }
  },
  components: {HeaderComponent},
  mounted() {
    // this.fetchFruits()
    this.$store.dispatch('fetchFruits', {
      id: this.id,
      name: this.name,
      photo: this.photo
    })
  }

}
</script>
