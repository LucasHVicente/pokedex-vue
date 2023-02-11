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
export async function fetchEvolutionChainSpecies(evolutionChainId) {
  const { data } = await fetchPokemonEvolutionChain(evolutionChainId);

  let pokeEvoChainNames = [];
  function getEvoChainNames(evo) {
    if (evo[0].evolves_to.length > 0) {
      pokeEvoChainNames.push(evo.map((ev) => ev.species.name));
      getEvoChainNames(evo[0].evolves_to);
    } else {
      pokeEvoChainNames = [
        ...pokeEvoChainNames,
        ...evo.map((ev) => ev.species.name),
      ];
    }
  }
  getEvoChainNames([data.chain]);

  return await Promise.all(
    pokeEvoChainNames.map(async (name) => {
      const { data } = await fetchPokemonSpecies(name);
      return data;
    })
  );
}
