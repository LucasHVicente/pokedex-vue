import { api } from "./api";

export function fetchPokemonList() {
  return api.get("pokemon-species");
}

export function fetchPokemonSpecies(pokemon) {
  return api.get(`pokemon-species/${pokemon}`);
}

export function fetchPokemon(pokemon) {
  return api.get(`pokemon/${pokemon}`);
}

export function fetchPokemonEvolutionChain(evolutionChainId) {
  return api.get(`evolution-chain/${evolutionChainId}`);
}
