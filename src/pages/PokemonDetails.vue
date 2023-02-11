<template>
  <Loader v-if="loading" />
  <ErrorMessage v-if="errorMessage" />
  <PokemonInfo v-if="!!pokemonDetails" :pokemon="pokemonDetails" />
</template>
<script setup>
import { onMounted, computed } from "vue";
import Loader from "../components/Loader.vue";
import PokemonInfo from "../components/PokemonInfo.vue";
import { usePokemon } from "../stores/pokemon";
import { useRoute } from "vue-router";
import ErrorMessage from "../components/ErrorMessage.vue";

const pokemonStore = usePokemon();
const { params } = useRoute();
const loading = computed(() => pokemonStore.getLoading);
const pokemonDetails = computed(() => pokemonStore.getSelectedPokemon);
const errorMessage = computed(() => pokemonStore.getErrorMessage);

onMounted(async () => {
  await pokemonStore.fetchPokemonDetails(params.pokemon);
});
</script>
