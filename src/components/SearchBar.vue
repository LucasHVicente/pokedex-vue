<template>
  <div class="searchbar-container">
    <h2>Search for Pokémon</h2>
    <div>
      <input
        type="text"
        v-model="searchTerm"
        name="text"
        placeholder="Search by name"
      />
      <button @click="handleSubmit">
        <font-awesome-icon icon="search" />
      </button>
    </div>
  </div>
</template>
<style scoped lang="scss" src="../styles/components/SearchBar.scss" />
<script setup>
import { usePokemon } from "../stores/pokemon";

let searchTerm = "";
const pokemonStore = usePokemon();

async function handleSubmit() {
  await pokemonStore.fetchPokedexEntries(searchTerm.toLowerCase());
  searchTerm = "";
}
</script>
