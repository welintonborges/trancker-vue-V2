import { createMemoryHistory, createRouter, RouteRecordRaw } from 'vue-router'

const  rotas: RouteRecordRaw[] =[
    {
        path: '/',
        name: 'profile',
        component: User
    }
]

const roteador = createRouter({
    history: createMemoryHistory(),
    rotas,
})

export default roteador;