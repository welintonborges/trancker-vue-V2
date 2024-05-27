import {createMemoryHistory, createRouter, createWebHistory} from 'vue-router'

import Tarefas from '../views/Tarefas.vue'
import Projetos from '../views/Projetos.vue'


const routes = [
    { path: '/', component: Tarefas },
    { path: '/projetos', component: Projetos }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})


export default router