import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/Home.vue";
import PokemonDetails from "../pages/PokemonDetails.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/pokemon/:pokemon",
    component: PokemonDetails,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
