<template>
  <Loader v-if="loading" />
  <PokemonInfo v-if="!!pokemonDetails" :pokemon="pokemonDetails" />
</template>
<script setup>
import { onMounted, computed } from "vue";
import Loader from "../components/Loader.vue";
import PokemonInfo from "../components/PokemonInfo.vue";
import { usePokemon } from "../stores/pokemon";
import { useRoute } from "vue-router";

const pokemonStore = usePokemon();
const { params } = useRoute();
const loading = computed(() => pokemonStore.getLoading);
const pokemonDetails = computed(() => pokemonStore.getSelectedPokemon);

onMounted(async () => {
  await pokemonStore.fetchPokemonDetails(params.pokemon);
});
</script>
