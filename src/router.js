import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import About from './views/About.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting    /* eslint-disable */
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            // component: () =>
            //     import ( /* webpackChunkName: "about" */ './views/About.vue')
            component: About
        },
        {
            path: '/news',
            name: 'news',
            component: () =>
                import ( /* webpackChunkName: "news" */ './views/News.vue')
        },
        {
            path: '/teach',
            name: 'teach',
            component: () =>
                import ( /* webpackChunkName: "teach" */ './views/Teach.vue')
        },
        {
            path: '/serve',
            name: 'serve',
            component: () =>
                import ( /* webpackChunkName: "serve" */ './views/Serve.vue')
        }
    ]
})