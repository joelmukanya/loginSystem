import { createStore } from 'vuex'
import axios from "axios"

import router from '@/router'

export default createStore({
  state: {
    user: null,
    fruits: null
  },
  getters: {
    // Users
    // Can be use for filter, passing values
    getUser : state => state.user,
    // Products
    getFruits : state => state.fruits

  },
  mutations: {
    // Based on the synchronous approach
    setUser(state, user) {
      state.user = user
    },
    setFruits(state, fruits) {
      state.fruits = fruits
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
      const {firstname, surname, profile, email, password} = playload;
      const res = await fetch("http://localhost:3000/users", {
        method: 'POST',
        body: JSON.stringify({
          firstname: firstname,
          surname: surname,
          profile: profile,
          email: email,
          password: password
        }), 
        headers: {
          'content-type': 'application/json; charset-UTF-8'
        },
      });
      const data = await res.json();
      context.commit('setUser', data);
    }
  },
  modules: {

  }
})
