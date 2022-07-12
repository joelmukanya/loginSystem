<template>
  <HeaderComponent/>
  <fieldset class="display-2 bg-gradient bg-dark text-white">
    <legend>Register in here</legend>
    <form class="container">
        <div class="row ">
            <label class="col-md-4">Name: </label>
            <input class="col-md-6 form-control" type="text" 
            placeholder="Enter your name"/>
        </div>
        
    </form>
  </fieldset>
</template>

<script>
import HeaderComponent from '../header/Header.vue'

export default {
  components: {
    HeaderComponent,
  }
}
</script>
