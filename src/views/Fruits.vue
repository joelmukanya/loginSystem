<template>
  <div class="home">
    <h2 class="display-2">Fruits</h2>
    <div class="card-wrapper" v-if="user">
      <div class="card my-3" v-for="fruit in fruits" :key="fruit.id">
        <img :src="fruit.photoUrl" class="card-img-top img-fluid" :alt="fruit.name">
        <div class="card-body">
          <p class="card-text">{{fruit.name}}</p>
        </div>
      </div>
    </div>
    <div v-else class="card-wrapper">
      <p class="lead">Please login to see our product</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Fruits',
  computed: {
    user() {
      return this.$store.state.user
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
  mounted() {
    // Fruits
    this.$store.dispatch('fetchFruits', {
      id: this.id,
      name: this.name,
      photo: this.photo
    });
  }

}
</script>
