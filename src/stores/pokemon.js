import { defineStore } from "pinia";
import {
  fetchEvolutionChainSpecies,
  fetchPokemon,
  fetchPokemonSpecies,
} from "../services/pokeapi";

export const usePokemon = defineStore("pokemon", {
  state: () => ({
    pokemonList: [],
    selectedPokemon: null,
    loading: false,
    errorMessage: null,
  }),
  getters: {
    getLoading: (state) => state.loading,
    getSelectedPokemon: (state) => state.selectedPokemon,
    getPokemonList: (state) => state.pokemonList,
    getErrorMessage: (state) => state.errorMessage,
  },
  actions: {
    async fetchPokedexEntries(pokemonName) {
      this.loading = true;
      try {
        const { data } = await fetchPokemonSpecies(pokemonName);
        const evChainURL = data.evolution_chain.url.split("/");
        const evChainId = evChainURL[evChainURL.length - 2];
        const evolutions = await fetchEvolutionChainSpecies(evChainId);
        this.pokemonList = [
          data, //searched pokemon will allways be the first of the list
          ...evolutions.filter((poke) => poke.id !== data.id),
        ];
        if (this.errorMessage) this.errorMessage = null;
      } catch (err) {
        console.log(err);
        this.pokemonList = [];
        this.errorMessage =
          "Unable to find the pokémon, please verify if the name is correct.";
        this.loading = false;
      }
      this.loading = false;
    },
    async fetchPokemonDetails(pokemonName) {
      this.loading = true;
      try {
        const { data } = await fetchPokemon(pokemonName);
        this.selectedPokemon = data;
        this.loading = false;
        if (this.errorMessage) this.errorMessage = null;
      } catch (err) {
        console.log(err);
        this.errorMessage =
          "Unable to find the pokémon, please verify if the name is correct.";
        this.loading = false;
      }
    },
  },
});
