export const Home = {
    path: '/',
    name: 'home',
    meta: {
        title: '主页'
    },
    component: () => import('../Home.vue')
};

export const page404 = {
    path: '/*',
    name: 'page404',
    component: () => import('../page404.vue')
};
// 所有上面定义的路由都要写在下面的routers里
export const routes = [
    Home,
    page404
];
