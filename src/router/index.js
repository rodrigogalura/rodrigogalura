import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'about-me',
        component: () => import('@/pages/AboutMe.vue'),
        meta: {
            title: 'About Me'
        }
    },
    {
        path: '/resume',
        name: 'resume',
        component: () => import('@/pages/ResumePage.vue'),
        meta: {
            title: 'Resume'
        }
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        component: () => import('@/pages/PortfolioPage.vue'),
        meta: {
            title: 'Portfolio'
        }
    },
    {
        path: '/blog',
        name: 'blog',
        component: () => import('@/pages/BlogPage.vue'),
        meta: {
            title: 'Blog'
        }
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('@/pages/ContactPage.vue'),
        meta: {
            title: 'Contact'
        }
    },
    {
        path: '/:notFound',
        name: 'notFound',
        component: () => import('@/pages/NotFoundPage.vue'),
        meta: {
            title: 'Page Not Found'
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to) => {
    document.title = `${to.meta.title} | rodrigogalura.github.io`
})

export default router
