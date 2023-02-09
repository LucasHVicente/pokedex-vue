import { api } from "./api";

export function fetchPokemonSpecies(pokemon) {
  return api.get(`pokemon-species/${pokemon}`);
}
