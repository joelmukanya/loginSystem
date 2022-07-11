import { createStore } from 'vuex'
import axios from "axios"

export default createStore({
  state: {
    users: []
  },
  getters: {
    retUsers : state => state.users
  },
  mutations: {
    // Based on the synchronous approach
    setUsers(state, payload) {
      state.users.push(payload);
    }
  },
  actions: {
    async fetchUsers( {commit}){
      try{
        const userData = await axios.get(" http://localhost:3000/users");
        console.log(userData.data);
        commit('SET_USERS', userData.data);
      }catch(e) {
        console.log(e.message);
      }
    }
  },
  modules: {
    SET_USERS(state, users) {
      state.users = users
    }
  }
})
