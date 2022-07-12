import { createStore } from 'vuex'
import axios from "axios"

export default createStore({
  state: {
    users: null,
    products: null
  },
  getters: {
    // Users
    // Can be use for filter, passing values
    getUsers : state => state.users,
    // Products
    getProducts : state => state.products
  },
  mutations: {
    // Based on the synchronous approach
    setUsers(state, users) {
      state.users = users
    }
  },
  actions: {

    // async fetchUsers( {commit}){
    //   try{
    //     const userData = await axios.get(`http://localhost:3000/users`);
    //     commit('setUsers', userData.data);
    //   }catch(e) {
    //     console.log(e.message);
    //   }
    // }
    login: async ({commit}, payload) => {
      const {email, password} = payload;
      const res = await fetch(`http://localhost:3000/users?email=${email}&password=${password}`);

      const data = await res.json();
      commit('setUsers', data);
    }
  },
  modules: {

  }
})
