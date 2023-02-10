import { defineStore } from "pinia";
import {
  fetchPokemon,
  fetchPokemonEvolutionChain,
  fetchPokemonList,
  fetchPokemonSpecies,
} from "../services/pokeapi";

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
    async fetchPokedexEntries() {
      this.loading = true;
      try {
        const { data } = await fetchPokemonList();
        this.pokemonList = data.results;
      } catch (err) {
        console.log(err);
        this.loading = false;
      }
      this.loading = false;
    },
    async fetchPokemonDetails(pokemonName) {
      this.loading = true;
      try {
        const pokemon = await fetchPokemon(pokemonName);
        const pokemonSpecies = await fetchPokemonSpecies(pokemon.data.id);
        const evChainUrl = pokemonSpecies.data.evolution_chain.url.split("/");
        const chainId = evChainUrl[evChainUrl.length - 2];
        const pokemonEvolutionChain = await fetchPokemonEvolutionChain(chainId);
        const pokemonDetails = {
          ...pokemon.data,
          evolution_chain: pokemonEvolutionChain.data,
        };
        return pokemonDetails;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
