<template>
  <ErrorMessage />
  <div v-if="!errorMessage" class="pokemon-list-container">
    <h3 v-if="pokemonList.length === 0">
      Inform the name of a pokémon to search.
    </h3>
    <PokemonCard v-if="pokemonList[0]" :pokemon="pokemonList[0]" />
    <h3 v-if="pokemonList.length > 1">Evolution Chain</h3>
    <div class="evolution-list-container">
      <PokemonCard
        v-if="pokemonList"
        v-for="(pokemon, index) in pokemonList.slice(1)"
        :key="pokemon.id"
        :pokemon="pokemon"
      />
    </div>
  </div>
</template>
<style scoped src="../styles/components/PokemonList.scss" />
<script setup>
import { computed } from "vue";
import { usePokemon } from "../stores/pokemon";
import PokemonCard from "./PokemonCard.vue";
import ErrorMessage from "./ErrorMessage.vue";

const pokemonStore = usePokemon();
const pokemonList = computed(() => pokemonStore.getPokemonList);
const errorMessage = computed(() => pokemonStore.getErrorMessage);
</script>
