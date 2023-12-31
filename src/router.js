import { createRouter, createWebHistory } from "vue-router";

import HomePage from "/src/views/pages/HomePage.vue";
import ResturantList from "/src/views/pages/RestaurantList.vue";
import CategoryList from "/src/views/pages/CategoryList.vue";
import RestaurantDetails from "/src/views/pages/RestaurantDetails.vue";
import UserInfo from "/src/views/pages/UserInfo.vue";
import OrderRecap from "/src/views/pages/OrderRecap.vue";
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
      path: "/restaurantlist",
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
      component: RestaurantDetails,
    },
    {
      path: "/UserInfo",
      name: "UserInfo",
      component: UserInfo,
    },
    {
      path: "/OrderRecap",
      name: "OrderRecap",
      component: OrderRecap,
    },
    // facoltativo: pagina 404
    // {
    //     path: "/:pathMatch(.*)*",
    //     name: "not-found",
    //     component: NotFound
    // }
  ],
});

export { router };
