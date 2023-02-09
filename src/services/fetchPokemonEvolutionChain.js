import { api } from "./api";

export function fetchPokemonEvolutionChain(evolutionChainId) {
  return api.get(`evolution-chain/${evolutionChainId}`);
}
