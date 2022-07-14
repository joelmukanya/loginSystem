<template>
  <div class="container">
    <div class="row m-auto">
        <button class="btn btn-primary rounded">Add A New Fruit</button>
    </div>
    <div class="row">
      <table class="table table-hover">
        <thead>
            <tr>
                <th >ID</th>
                <th>Fruit Name</th>
                <th>Image</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="fruit in fruits" :key="fruit.id">
            <td>{{fruit.id}}</td>
            <td>{{fruit.name}}</td>              
            <td>
              <img :src="fruit.photoUrl" :alt="fruit.name"/>
            </td>
            <td >
              <i class="bi bi-pencil-square" :id="id"></i>
              <EditComponent :id="staticBackdropLabel"/>
            </td>
            <td>
              <i class="bi bi-x-circle-fill"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import EditComponent from '@/components/EditComponent.vue'
export default {
  computed: {
    fruits() {
      return this.$store.state.fruits
    }
  },
  components: {
    EditComponent,
  }
  // mounted() {

  // }
}
</script>

<style>

</style>