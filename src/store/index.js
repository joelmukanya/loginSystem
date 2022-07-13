import { createStore } from 'vuex'
import axios from "axios"

import router from '@/router'

export default createStore({
  state: {
    users: null,
    error: '',
    fruits: null
  },
  getters: {
    // Users
    // Can be use for filter, passing values
    getUsers : state => state.users,
    getError: state => state.error,
    // Products
    getFruits : state => state.fruits

  },
  mutations: {
    // Based on the synchronous approach
    setUsers(state, users) {
      state.users = users
    },
    setFruits(state, fruits) {
      state.fruits = fruits
    },
    setError(state, error) {
      state.error = error
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
    login: async ({commit}, payload) =>  {
      const {email, password} = payload;
      const res = await fetch(`http://localhost:3000/users?email=${email}&password=${password}`);
      const data = await res.json();
      if(data.length) {
        commit('setUsers', data);
        router.push({name: "fruits"});
      }else {
        commit('setError', 'Please register !!!!');
        router.push({name: "register"});
      }

    },
    fetchFruits: async ({commit}) => {
      const res = await fetch("http://localhost:3000/fruits");
      const data = await res.json();
      commit('setFruits', data);
    }
  },
  modules: {

  }
})
