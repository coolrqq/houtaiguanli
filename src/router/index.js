import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)
// import ee from '../pages/home/'
// 解决elementui中的vue-router3.0版本以上重复点击路由报错问题,解决不了   push提示undefined
// const originalPush = VueRouter.protptype.push
// VueRouter.protptype.push = function push(location){
//     return originalPush.call(this,location).catch(err=>err)



// }

const routes = [{
    path: '/',
    name: 'Main',
    component: () => import('../pages/Main.vue'),
    redirect:'home',
    children:[],
    // children: [{
    //     path: '/home',
    //     name: 'home',
    //     component: () => import('../pages/home/index.vue')
    // },
    // {
    //     path: '/mall',
    //     name: 'mall',
    //     component: () => import('../pages/mall/index.vue')
    // },
    //  {
    //     path: '/user',
    //     name: 'user',
    //     component: () => import('../pages/user/user.vue')
    // },{
    //     path:'/page1',
    //     name:'page1',
    //     component:()=>import('../pages/other/pageOne.vue')
    // },{
    //     path:'/page2',
    //     name:'page2',
    //     component:()=>import('../pages/other/pageTow.vue')
    // }]

},{
    path:'/login',
    name:'login',
    component:()=>import('../pages/login/Login.vue')
}]
const router = new VueRouter({
    mode: 'history',
    routes
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
export default router