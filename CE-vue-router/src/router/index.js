import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/HomeView.vue";
import CoolComponent from "../components/CoolComponent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // buenas praticas dictan que la ruta del "home" siempre se define asi "/"
      path: "/",
      // esta clave es solo descriptiva, es mas que todo referencial.
      name: "home",
      // IMPORTANTE - component key - define el componente que va a mostrar como pagina!
      component: CoolComponent,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../pages/AboutView.vue"),
    },
    {
      path: "/ffd",
      name: "fat_freddys_drop",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../pages/FavoriteBand.vue"),
    },
    {
      path: "/ff",
      name: "favorite_food",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../pages/FavoriteFood.vue"),
    },
    {
      path: "/wtchr",
      name: "the_watcher",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../pages/WatchersComponents.vue"),
    },
  ],
});

export default router;
