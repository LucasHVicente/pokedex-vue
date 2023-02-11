<template>
  <div v-if="errorMessage" class="error-container">
    <h3>Error</h3>
    <p>{{ errorMessage }}</p>
  </div>
</template>
<style scoped src="../styles/components/ErrorMessage.scss" />
<script setup>
import { computed } from "vue";
import { usePokemon } from "../stores/pokemon";

const pokemonStore = usePokemon();
const errorMessage = computed(() => pokemonStore.getErrorMessage);
</script>
