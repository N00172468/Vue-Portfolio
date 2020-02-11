import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        // All Routes go here!
        {
            path: '/',
            name: 'home',
            component: Home
        }
    ]
})