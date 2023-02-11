<template>
  <SearchBar />
  <Loader v-if="loading" />
  <PokemonList v-if="!loading" />
</template>
<script setup>
import { computed } from "vue";
import { usePokemon } from "../stores/pokemon";
import PokemonList from "../components/PokemonList.vue";
import Loader from "../components/Loader.vue";
import SearchBar from "../components/SearchBar.vue";

const pokemonStore = usePokemon();
const loading = computed(() => pokemonStore.getLoading);
</script>
