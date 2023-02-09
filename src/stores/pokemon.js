import { defineStore } from "pinia";
import { fetchPokemonList } from "../services/fetchPokemonList";

export const usePokemon = defineStore("pokemon", {
  state: () => ({
    pokemonList: [],
  }),
  getters: {
    getPokemonList(state) {
      return state.pokemonList;
    },
  },
  actions: {
    async fetchPokemon() {
      const { data } = await fetchPokemonList();
      this.pokemonList = data.results;
    },
  },
});
