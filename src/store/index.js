import { createStore } from 'vuex'
import axios from "axios"

import router from '@/router'

export default createStore({
  state: {
    user: null,
    error: '',
    fruits: null
  },
  getters: {
    // Users
    // Can be use for filter, passing values
    getUsers : state => state.user,
    getError: state => state.error,
    // Products
    getFruits : state => state.fruits

  },
  mutations: {
    // Based on the synchronous approach
    setUser(state, user) {
      state.user = user
    },
    setFruits(state, fruit) {
      state.fruits = fruit
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
    // For login
    login: async (context, payload) =>  {
      const {email, password} = payload;
      const res = await fetch(`http://localhost:3000/users?email=${email}&password=${password}`);
      const data = await res.json();
      if(data.length) {
        context.commit('setUser', data[0]);
        router.push({name: "fruits"});
      }else {
        context.commit('setError', 'Please register !!!!');
        router.push({name: "register"});
      }

    },
    // Fetching fruits
    fetchFruits: async (context) => {
      const res = await fetch("http://localhost:3000/fruits");
      const data = await res.json();
      context.commit('setFruits', data);
    },
    // For Register
    signUp: async (context, playload) =>{
      const requestStr = {
        method: 'POST',
        body: JSON.stringify({
          firstname: playload.firstname,
          surname: playload.surname,
          profile: playload.profile,
          email: playload.email,
          password: playload.password
        }), 
        headers: {
          'content-type': 'application/json; charset-UTF-8'
        }
      };
      const res = await fetch("http://localhost:3000/users", requestStr);
      const data = await res.json();
      console.log(data);
      // context.commit('setUsers', data);
      // 
    }
  },
  modules: {

  }
})
