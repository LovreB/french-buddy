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

Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: "*", redirect: '/practise'},
        { path: '/add', component: AddView,
            children: [
                { path: '',  name: 'AddHome', component: AddTypeSelectionView },
                { path: 'other', name: 'addOther', component: AddOtherView },
                { path: 'verb', name: 'addVerb', component: AddVerbView },
                { path: 'category', name: 'addCategory', component: AddCategoryView },
            ]},
        { path: '/practise', component: PractiseView,
            children: [
                { path: '',  name: 'PractiseHome', component: PractiseTypeSelectionView },
                { path: 'other',  name: 'practiseOther', component: PractiseOtherView },
                { path: 'verb', name: 'practiseVerb', component: PractiseVerbView },
                { path: 'category', name: 'practiseCategory', component: PractiseCategoryView },
            ]},
    ]
})

export default router;