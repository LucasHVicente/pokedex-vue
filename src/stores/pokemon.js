import { defineStore } from "pinia";
import { fetchPokemonList } from "../services/fetchPokemonList";

export const usePokemon = defineStore("pokemon", {
  state: () => ({
    pokemonList: [],
    loading: false,
  }),
  getters: {
    getLoading: (state) => state.loading,
    getPokemonList: (state) => state.pokemonList,
  },
  actions: {
    async fetchPokemon() {
      this.loading = true;
      const { data } = await fetchPokemonList();
      this.pokemonList = data.results;
      this.loading = false;
    },
  },
});
