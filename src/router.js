import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '/src/views/pages/HomePage.vue';
import ResturantList from '/src/views/pages/ResturantList.vue';
//  --> import NotFound from './pages/NotFound.vue'; <-- DA IMPLEMENTARE PER PERCORSI NON ESISTENTI


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/resturantlist',
            name: 'resturantlist',
            component: ResturantList
        },
        // facoltativo: pagina 404
        // {
        //     path: "/:pathMatch(.*)*",
        //     name: "not-found",
        //     component: NotFound
        // }
    ]

});

export { router };