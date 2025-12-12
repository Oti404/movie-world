import { ref } from "vue";
import { defineStore } from 'pinia'
import type { SearchResult } from "../types/types.ts";
import { fetchMovieById, searchMovie } from "../api/tmdb.ts";

export const movieStore = defineStore('movieStore', () => {

  /**
   *  Record<any, SearchResult>
   * This is a TypeScript utility type. Here's what it means:
   *
   * Record<K, V> means "an object with keys of type K and values of type V".
   *
   * any = key can be anything (usually number or string).
   *
   * SearchResult = each value will follow the SearchResult interface/type (probably from your TMDB types).
   */
  const movieCache = ref<Record<any, SearchResult>>({})
  const searchList = ref<Record<any, SearchResult>>({})
  const searchQuery = ref<string>("")

  async function fetchMovie(id: number): Promise<SearchResult> {
    if (movieCache.value[id]) {
      return movieCache.value[id];
    }
    const data = await fetchMovieById(id);
    movieCache.value[id] = data || {}
    return data
  }

  async function searchMovieList(query: string): Promise<SearchResult> {
    searchQuery.value = query;
    const data = await searchMovie(query);
    searchList.value = data;
    return data;
  }

  return {movieCache, fetchMovie, searchList, searchMovieList, searchQuery}
})