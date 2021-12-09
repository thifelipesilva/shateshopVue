import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);



import Home from './pag/Home.vue';
import Login from './pag/Login.vue';
import Cadastro from './pag/Cadastro.vue';


const routes = [
    {
        path: '/',
        component: Home
    },

    {
        path: '/login',
        component: Login
    },

    {
        path: '/cadastro',
        component: Cadastro
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;