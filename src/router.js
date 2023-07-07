import { createRouter, createWebHistory } from "vue-router";

import HomePage from "/src/views/pages/HomePage.vue";
import ResturantList from "/src/views/pages/RestaurantList.vue";
import CategoryList from "/src/views/pages/CategoryList.vue";
import RestaurantDetails from "/src/views/pages/RestaurantDetails.vue";
//  --> import NotFound from './pages/NotFound.vue'; <-- DA IMPLEMENTARE PER PERCORSI NON ESISTENTI

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/restaurantlist/:id",
      name: "restaurantlist",
      component: ResturantList,
    },
    {
      path: "/categorylist",
      name: "categorylist",
      component: CategoryList,
    },
    {
      path: "/restaurant/:slug",
      name: "restaurantdetails",
      component: RestaurantDetails
    }
    // facoltativo: pagina 404
    // {
    //     path: "/:pathMatch(.*)*",
    //     name: "not-found",
    //     component: NotFound
    // }
  ],
});

export { router };
