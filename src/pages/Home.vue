<template>
  <PokemonList />
</template>
<script setup>
import { onMounted } from "vue";
import PokemonList from "../components/PokemonList.vue";
import { usePokemon } from "../stores/pokemon";

const pokemonStore = usePokemon();
onMounted(() => {
  pokemonStore.fetchPokemon();
});
</script>
