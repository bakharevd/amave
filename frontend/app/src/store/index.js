import {createStore} from 'vuex';
import {EventBus} from '../EventBus';
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
        async login({commit}, credentials) {
            try {
                const response = await axios.post(API_URL + 'login/', credentials);
                commit('setUser', response.data);
                EventBus.emit('notify', {message: 'Вы успешно вошли в систему', type: 'success'});
            } catch (error) {
                EventBus.emit('notify', {message: 'Ошибка входа: ' + error.response.data.detail, type: 'error'});
            }
        },

        logout({commit}) {
            commit('clearUser');
            EventBus.emit('notify', {message: 'Вы вышли', type: 'success'});
        },

        async register({commit}, userData) {
            try {
                const response = await axios.post(API_URL + 'registration/', userData);
                commit('setUser', response.data);
                EventBus.emit('notify', {message: 'Вы успешно зарегистрировались', type: 'success'});
            } catch (error) {
                let messages = [];
                if (error.response && error.response.data) {
// eslint-disable-next-line no-unused-vars
                    for (const [key, value] of Object.entries(error.response.data)) {
                        messages.push(`${value.join('. ')}`);
                    }
                }
                EventBus.emit('notify', {message: 'Ошибка регистрации: ' + messages.join(' '), type: 'error'});
                throw error;
            }
        },
    },
});