import { createRouter, createWebHistory } from 'vue-router';

import AllTasks from '../views/tasks/AllTasks.vue';

import NewTask from '../views/Tasks/NewTask.vue';

import EditTask from '../views/tasks/EditTask.vue';

import Tabs from '../views/tabs/Tabs.vue';

export const routes = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'home',
            path: '/',
            component: AllTasks
        },
        {
            name: 'create',
            path: '/create',
            component: NewTask
        },
        {
            name: 'edit',
            path: '/edit/:id',
            component: EditTask
        },
        {
            name: 'tabs',
            path: '/tabs/',
            component: Tabs,
            children: [
                {

                    path: '',
                    redirect: '/tabs/home'
                },
                {
                    name: 'tabs-home',
                    path: 'home',
                    component: () => import('@/views/tabs/HomeTab.vue')
                },
                {
                    name: 'tabs-profile',
                    path: 'profile',
                    component: () => import('@/views/tabs/ProfileTab.vue')
                },
                {
                    name: 'tabs-contact',
                    path: 'contact',
                    component: () => import('@/views/tabs/ContactTab.vue')
                }
            ]
        }      

    ],

});