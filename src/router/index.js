import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Preloader',
        component: () =>
            import ( /* webpackChunkName: "Preloader" */ '../views/Preloader.vue')
    },
    {
        path: '/prueba',
        name: 'Prueba',
        component: () =>
            import ( /* webpackChunkName: "Prueba" */ '../views/pruebas.vue')
    },
    {
        path: '/inicio',
        name: 'Inicio',
        component: () =>
            import ( /* webpackChunkName: "Inicio" */ '../views/Inicio.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ( /* webpackChunkName: "Login" */ '../views/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () =>
            import ( /* webpackChunkName: "Register" */ '../views/Register.vue')
    },
    {
        path: '/servicios',
        name: 'Servicios',
        component: () =>
            import ( /* webpackChunkName: "Servicios" */ '../views/Servicios.vue')
    },
    {
        path: '/servicios/servicio1',
        name: 'Servicio1',
        component: () =>
            import ( /* webpackChunkName: "Servicio1" */ '../views/Servicio1.vue')
    },
    {
        path: '/servicios/servicio2',
        name: 'Servicio2',
        component: () =>
            import ( /* webpackChunkName: "Servicio2" */ '../views/Servicio2.vue')
    },
    {
        path: '/servicios/servicio3',
        name: 'Servicio3',
        component: () =>
            import ( /* webpackChunkName: "Servicio3" */ '../views/Servicio3.vue')
    },
    {
        path: '/home',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "home" */ '../views/Home.vue'),
        meta: {
            requiresAuth: true
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('jwt') == null) {
            next({
                path: '/'
            })
        } else {
            next();
        }
    } else {
        next();
    }
})



export default router