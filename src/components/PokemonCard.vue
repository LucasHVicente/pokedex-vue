<template>
  <router-link :to="`/pokemon/${pokemon.name}`">
    <div class="pokemon-card-container">
      <img
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`"
      />
      <div>
        <span class="pokemon-number">#{{ pokemon.id.pad(4) }}</span>
        <span class="pokemon-name">{{ pokemon.name }}</span>
      </div>
    </div>
  </router-link>
</template>
<style scoped src="../styles/components/PokemonCard.scss" lang="scss" />
<script>
Number.prototype.pad = function (size) {
  var s = String(this);
  while (s.length < (size || 2)) {
    s = "0" + s;
  }
  return s;
};
export default {
  name: "PokemonCard",
  props: {
    pokemon: {
      name: String,
      index: Number,
    },
  },
};
</script>
