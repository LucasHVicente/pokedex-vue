<template>
  <Loader v-if="loading" />
  <PokemonList v-if="!loading" />
</template>
<script setup>
import { onMounted, computed } from "vue";
import { usePokemon } from "../stores/pokemon";
import PokemonList from "../components/PokemonList.vue";
import Loader from "../components/Loader.vue";

const pokemonStore = usePokemon();
const loading = computed(() => pokemonStore.getLoading);

onMounted(() => {
  pokemonStore.fetchPokedexEntries();
});
</script>
