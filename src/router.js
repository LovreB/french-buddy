import Vue from 'vue';
import VueRouter from 'vue-router';
import PractiseView from "@/views/practise/PractiseView.vue";
import AddView from "@/views/add/AddView";
import PractiseVerbView from "@/views/practise/PractiseVerbView";
import PractiseSelectionView from "@/views/practise/PractiseTypeSelectionView";
import PractiseOtherView from "@/views/practise/PractiseOtherView";

Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: "*", redirect: '/practise'},
        { path: '/add', component: AddView },
        { path: '/practise', component: PractiseView,
            children: [
                { path: '',  name: 'PractiseHome', component: PractiseSelectionView },
                { path: 'other',  name: 'Other', component: PractiseOtherView },
                { path: 'verb', name: 'Verb', component: PractiseVerbView },
            ]},
    ]
})

export default router;