import {createMemoryHistory, createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

import Tarefas from '../views/Tarefas.vue'
import Projetos from '../views/Projetos.vue'


const routes = [
    { path: '/', component: Tarefas },
    { path: '/projetos', component: Projetos }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})


export default router