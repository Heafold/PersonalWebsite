import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createRouter, createWebHistory } from 'vue-router'
import XHome from './components/XHome.vue'
import XAbout from './components/XAbout.vue'
import XProject from './components/XProject.vue'

const router = createRouter({
   
    history: createWebHistory(),
    routes: [
        { path: '/', component: XHome },
        { path: '/about', component: XAbout },
        { path: '/project', component: XProject}
    ],
  })

createApp(App).use(router).mount('#app')
