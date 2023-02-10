<template>
  <div>
    <p v-if="pokemonList" v-for="(pokemon, index) in pokemonList" :key="index">
      {{ pokemon.name }}
    </p>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { usePokemon } from "../stores/pokemon";
import Loader from "./Loader.vue";

const pokemonStore = usePokemon();
const pokemonList = computed(() => pokemonStore.getPokemonList);
</script>
