import { createRouter, createWebHistory } from 'vue-router';

import Dashboard from '@/pages/Dashboard.vue';
import Diseases from '@/pages/Diseases.vue';
import NotFound from '@/pages/NotFound.vue';

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
    },
    {
        path: '/treatable-diseases',
        name: 'Diseases',
        component: Diseases,
    },
    // Not Found
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
];

const router = createRouter({
    history: createWebHistory('/#/'),
    routes,
});

export default router;
