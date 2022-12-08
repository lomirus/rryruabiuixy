import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Login from './pages/Login.vue'
import Index from './pages/Index.vue'

const routes: RouteRecordRaw[] = [
    { path: '/', component: Index },
    { path: '/login', component: Login },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App);
app.use(router);
app.mount('#app');

