import { api } from "./api";

export function fetchPokemonList() {
  return api.get("pokemon-species");
}
