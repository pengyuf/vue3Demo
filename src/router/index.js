import {createRouter,createWebHashHistory} from 'vue-router'

const routes = [
    {path:'/',component:()=>import('../views/Home.vue')},
    {path:'/list',component:()=>import('../views/myVirList.vue')},
    {
        path:'/about/:age/:name',
        component:()=>import('../views/About.vue'),
        // beforeEnter:(to,from)=>{console.log('路由独享守卫',to,from)}
    },
    {path:'/:pathMatch(.*)*',component:()=>import('../views/NotFound.vue')},
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

router.beforeEach((to,from,next)=>{
    // console.log(to,from)
    next()
})

export default router