import { createRouter, createWebHistory } from 'vue-router';

import Dashboard from '@/pages/Dashboard.vue';
import Diseases from '@/pages/Diseases.vue';
import Shop from '@/pages/Shop.vue';
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
    {
        path: '/herbs-shop',
        name: 'Shop',
        component: Shop,
    },
    // Not Found
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
];

const router = createRouter({
    history: createWebHistory('/#/'),
    routes,
});

export default router;
