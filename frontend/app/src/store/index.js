   import { createStore } from 'vuex';

   export default createStore({
     state: {
       user: null
     },
     getters: {
       isAuthenticated: state => !!state.user
     },
     mutations: {
       setUser(state, user) {
         state.user = user;
       }
     },
     actions: {
       login({ commit }, user) {
         // Здесь должна быть логика отправки запроса на API для логина
         commit('setUser', user);
       },
       logout({ commit }) {
         // Здесь должна быть логика отправки запроса на API для логаута
         commit('setUser', null);
       }
     }
   });