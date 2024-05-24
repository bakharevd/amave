import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/custom.scss'
import '@/assets/style.css';


createApp(App)
    .use(router)
    .use(store)
    .mount('#app');