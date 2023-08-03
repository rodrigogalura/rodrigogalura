import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'about',
        component: () => import('@/pages/AboutPage.vue')
    },
    {
        path: '/resume',
        name: 'resume',
        component: () => import('@/pages/ResumePage.vue')
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        component: () => import('@/pages/PortfolioPage.vue')
    },
    {
        path: '/blog',
        name: 'blog',
        component: () => import('@/pages/BlogPage.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('@/pages/ContactPage.vue')
    },
    {
        path: '/:notFound',
        name: 'notFound',
        component: () => import('@/pages/NotFoundPage.vue')
    }
]

export default createRouter({
    history: createWebHashHistory(),
    routes
})
