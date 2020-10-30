import Vue from 'vue';
import VueRouter from 'vue-router';
import PractiseView from "@/views/PractiseView.vue";
import HelloWorld from "@/components/HelloWorld";

Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: "*", redirect: '/practise'},
        { path: '/add', component: HelloWorld },
        { path: '/practise', component: PractiseView },
    ]
})

export default router;