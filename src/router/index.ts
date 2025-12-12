import { createRouter, createWebHistory } from "vue-router";
import MovieList from "@/components/MovieList.vue";
import MovieDetail from "@/components/MovieDetail.vue";
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("../components/MovieList.vue"),
  },
  {
    path: '/movie/:id',
    name: 'MovieDetail',
    component: () => import("../components/MovieDetail.vue"),
    props: true,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})