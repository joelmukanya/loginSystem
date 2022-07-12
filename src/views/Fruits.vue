<template>
  <HeaderComponent/>
  <div class="home">
    <h2 class="display-2">Fruits</h2>
    <div class="card" style="width: 18rem;" v-for="fruit in fruits" :key="fruit.id">
      <img :src="fruit.profile" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">{{fruit.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from './header/Header.vue'

export default {
  name: 'Fruits',
  computed: {
    fruits() {
      return this.$store.state.fruits
    }
  },
  data() {
    return {
      id: null,
      name: '',
      photo: ''
    }

  },
  components: {HeaderComponent},
  methods: {
    fetchFruits() {
      this.$store.dispatch('fetchFruits', {
        id: this.id,
        name: this.name,
        photo: this.photo
      })
    }
  }

}
</script>
