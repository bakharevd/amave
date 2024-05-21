import {createRouter, createWebHistory} from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import RegisterPage from '../views/RegisterPage.vue';
import HomePage from '../views/HomePage.vue';
import store from '../store';

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: LoginPage,
        // Редирект, если пользователь уже аутентифицирован
        beforeEnter: (to, from, next) => {
            if (store.getters.isAuthenticated) {
                next('/');
            } else {
                next();
            }
        },
    },
    {
        path: '/register',
        name: 'Register',
        component: RegisterPage,
        beforeEnter: (to, from, next) => {
            if (store.getters.isAuthenticated) {
                next('/');
            } else {
                next();
            }
        },
    },
    {
        path: '/',
        name: 'Home',
        component: HomePage,
        meta: {requiresAuth: true},
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth) && !store.getters.isAuthenticated) {
        next('/login');
    } else {
        next();
    }
});

export default router;