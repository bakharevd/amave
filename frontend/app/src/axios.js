import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8000/api', // URL вашего Django API
    // Другие настройки...
});

export default instance;