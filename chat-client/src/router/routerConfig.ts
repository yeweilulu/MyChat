import { lazy } from 'react'
import { RouterConfit } from './router'
const routerConfig: RouterConfit = {
    model: 'history',
    routerList: [
        {
            path: '/',
            reducer: '/chat'
        },
        {
            path: '/',
            name: 'layout',
            component: lazy(() => import('@/pages/layout')),
            children: [
                {
                    path: '/chat',
                    name: 'chat',
                    component: lazy(() => import('@/pages/chat')),
                },
                {
                    path: '/addressBook',
                    name: 'addressBook',
                    component: lazy(() => import('@/pages/addressBook')),
                },
                {
                    path: '/collect',
                    name: 'collect',
                    component: lazy(() => import('@/pages/collect')),
                },
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: lazy(() => import('@/pages/login'))
        }
    ]
}


export default routerConfig