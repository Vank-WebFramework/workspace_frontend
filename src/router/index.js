import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'main',
            component: () => import('@/views/MainView.vue'),
            children: [
                {
                    path: '',
                    name: 'index',
                    component: () => import('@/views/IndexView.vue'),
                },
                {
                    path: 'about',
                    name: 'about',
                    component: () => import('@/views/AboutView.vue'),
                },
                {
                    path: 'article',
                    name: 'article',
                    component: () => import('@/views/ArticleView.vue'),
                    children: [
                        {
                            path: 'list',
                            name: 'articleList',
                            component: () => import('@/components/article/ArticleList.vue'),
                        },
                    ]
                },
                {
                    path: 'user',
                    name: 'user',
                    component: () => import('@/views/UserView.vue'),
                    children: [
                        {
                            path: '',
                            name: 'userProfile',
                            component: () => import('@/components/user/UserProfile.vue'),
                            redirect: {name: 'userArticle'},
                            children: [
                                {
                                    path: '',
                                    name: 'userArticle',
                                    component: () => import('@/components/user/UserArticle.vue'),
                                },
                                {
                                    path: 'comment',
                                    name: 'userComment',
                                    component: () => import('@/components/user/UserComment.vue'),
                                },
                                                                {
                                    path: 'favorite',
                                    name: 'userFavorite',
                                    component: () => import('@/components/user/userFavorite.vue'),
                                },
                            ]
                        },
                    ]

                }
            ]
        },
        {
            path: '/sign',
            name: 'sign',
            redirect: {name: 'signin'},
            component: () => import('@/views/SignView.vue'),
            children: [
                {
                    path: 'up',
                    name: 'signup',
                    component: () => import('@/components/sign/SignUp.vue')
                },
                {
                    path: 'in',
                    name: 'signin',
                    component: () => import('@/components/sign/SignIn.vue')
                }, {
                    path: 'forget',
                    name: 'forget',
                    component: () => import('@/components/sign/Forget.vue')
                },
            ]
        },
    ]
})

export default router
