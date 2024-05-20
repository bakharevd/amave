import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '../views/HomePage.vue';
import LoginPage from '../views/LoginPage.vue';
import store from '../store';

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage,
        meta: {requiresAuth: true}
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth) && !store.getters.isAuthenticated) {
        next('/login');
    } else {
        next();
    }
});


export default router;