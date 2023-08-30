import { lazy } from 'react'
import { RouterConfit } from './router'

const routerConfig: RouterConfit = {
    model: 'history',
    routerList: [
        {
            path: '/',
            reducer: '/login'
        },
        {
            path: '/',
            name: 'layout',
            component: lazy(() => import('@/pages/layout'))
        },
        {
            path: '/login',
            name: 'login',
            component: lazy(() => import('@/pages/login'))
        }
    ]
}


export default routerConfig