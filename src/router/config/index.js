/**
 *
 * 功能说明：    路由配置
 *
 * */

// 404页
const notFound = () => import('../../pages/anomaly-network/404.vue')
// 首页
const Index = () => import('../../pages/index/index.vue')
// 详情
const Detail = () => import('../../pages/detail/index.vue')

const config = [
    {
        path: '/',
        name: 'index',
        component: Index,
    },
    {
        path: '/detail/:txHash',
        name: 'detail',
        component: Detail
    },
    {
        path: '/404',
        name: 'notFound',
        component: notFound
    },
    {
        path: '*',
        redirect:'/404'
    },
]

export {
    config
}
