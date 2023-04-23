import { createApp } from 'vue'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue'
import Home from './views/Home.vue'
import Reports from './components/Reports.vue'
import Admin from './components/Admin.vue'

library.add(faEye);

const routes = [
    {path: '/', name: 'Home', component: Home, meta: {title: 'Login'}},
    {path: '/admin', name: 'Admin', component: Admin, meta: {title: 'Admin'}},
    {path: '/reports', name: 'Reporting', component: Reports, meta: {title: 'Reporting'}},
  ]

const router = createRouter({
    history: createWebHistory(),
    routes
  })

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
