import Vue from 'vue';
import VueRouter from 'vue-router';
import PractiseView from "@/views/practise/PractiseView.vue";
import AddView from "@/views/add/AddView";
import PractiseVerbView from "@/views/practise/PractiseVerbView";
import PractiseTypeSelectionView from "@/views/practise/PractiseTypeSelectionView";
import PractiseOtherView from "@/views/practise/PractiseOtherView";
import AddTypeSelectionView from "@/views/add/AddTypeSelectionView";
import AddVerbView from "@/views/add/AddVerbView";
import AddOtherView from "@/views/add/AddOtherView";
import PractiseCategoryView from "@/views/practise/PractiseCategoryView";
import AddCategoryView from "@/views/add/AddCategoryView";
import { RouteNames } from "@/utils/strings";

Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: "*", redirect: '/practise'},
        { path: '/add', component: AddView,
            children: [
                { path: '',  name: RouteNames.ADD, component: AddTypeSelectionView },
                { path: 'other', name: RouteNames.ADD_OTHER, component: AddOtherView },
                { path: 'verb', name: RouteNames.ADD_VERB, component: AddVerbView },
                { path: 'category', name: RouteNames.ADD_CATEGORY, component: AddCategoryView },
            ]},
        { path: '/practise', component: PractiseView,
            children: [
                { path: '',  name: RouteNames.PRACTISE, component: PractiseTypeSelectionView },
                { path: 'other',  name: RouteNames.PRACTISE_OTHER, component: PractiseOtherView },
                { path: 'verb', name: RouteNames.PRACTISE_VERB, component: PractiseVerbView },
                { path: 'category', name: RouteNames.PRACTISE_CATEGORY, component: PractiseCategoryView },
            ]},
    ]
})

export default router;