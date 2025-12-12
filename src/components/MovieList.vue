<script lang="ts" setup>
import { defineAsyncComponent, onMounted, ref, watch } from "vue";
import type { SearchResult, SearchResults } from "../types/types.ts";
import { fetchPopularMovies } from "../api/tmdb.ts";
import { movieStore } from "../stores/movieStore.ts";
import { storeToRefs } from "pinia";

const movies = ref<SearchResult[] | []>([])
const MovieRating = defineAsyncComponent(() => import("./partials/MovieRating.vue"))
onMounted(async () => {
  const data: SearchResults = await fetchPopularMovies(1);
  movies.value = data.results;
})
const store = movieStore();
const {searchList, searchQuery} = storeToRefs(store)
watch(searchList, async (newValue) => {
 
  if (!searchQuery.value) {
    const data: SearchResults = await fetchPopularMovies(1);
    movies.value = data.results;
    return;
  }

  if (Array.isArray(newValue.results) && newValue.results.length === 0 && searchQuery.value) {
    alert('Niciun rezultat gasit. Ne intoarcem la pagina principala');
    const data: SearchResults = await fetchPopularMovies(1);
    movies.value = data.results;
    return;
  }
 
  movies.value = newValue.results as unknown as SearchResult[];
})
</script>

<template>
  <div class="grid grid-cols-2 gap-4 p-4 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3">
    <div v-for="movie in movies" :key="movie.id"
         class="rounded-lg overflow-hidden shadow hover:drop-shadow-[0_4px_12px_rgba(239,68,68,0.5)] transition hover:scale-110 duration-600">
      <RouterLink :to="`movie/${movie.id}`">
        <img :alt="movie.title" :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`">
        <div class="p-4">
          <h2 class="text-lg font-semibold">{{ movie.title }}</h2>
          <p class="text-sm text-grey-400">Release: {{ movie.release_date }}</p>
          <MovieRating :movie="movie"></MovieRating>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>

</style>