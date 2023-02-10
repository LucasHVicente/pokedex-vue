<template>
  <div class="pokemon-list-container">
    <PokemonCard
      v-if="pokemonList"
      v-for="(pokemon, index) in pokemonList"
      :key="index"
      :pokemon="{
        ...pokemon,
        index: index + 1,
      }"
    />
  </div>
</template>
<style scoped src="../styles/components/PokemonList.scss" />
<script setup>
import { computed } from "vue";
import { usePokemon } from "../stores/pokemon";
import PokemonCard from "./PokemonCard.vue";

const pokemonStore = usePokemon();
const pokemonList = computed(() => pokemonStore.getPokemonList);
</script>
