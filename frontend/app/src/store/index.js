import { createStore } from 'vuex';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1/';

export default createStore({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
  },
  getters: {
    isAuthenticated: state => !!state.user,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    clearUser(state) {
      state.user = null;
      localStorage.removeItem('user');
    },
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const response = await axios.post(API_URL + 'login/', credentials);
        commit('setUser', response.data);
      } catch (error) {
        console.error('Login failed:', error);
        throw error;
      }
    },
    logout({ commit }) {
      commit('clearUser');
      // Здесь может быть логика для отправки запроса на API для логаута
      // Например, axios.post(API_URL + 'logout/', {}, { headers: { Authorization: `Token ${state.user.token}` } });
    },
    async register({ commit }, userData) {
      try {
        const response = await axios.post(API_URL + 'registration/', userData);
        commit('setUser', response.data);
      } catch (error) {
        console.error('Registration failed:', error);
        throw error;
      }
    },
  },
});