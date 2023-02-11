<template>
  <div v-if="!!pokemon" class="pokemon-container">
    <img :src="pokemon.sprites.front_default" />
    <div class="pokemon-info-container">
      <span class="entry-number">#{{ pokemon.id.pad(4) }}</span>
      <h3>{{ pokemon.name }}</h3>
      <div class="types-container">
        <span
          v-for="(pokeType, index) in pokemon.types"
          :class="`${pokeType.type.name}-tag`"
          :key="`type-${index}`"
          >{{ pokeType.type.name }}</span
        >
      </div>
      <div>
        <p>Stats</p>
        <div class="stats-container">
          <div v-for="(stat, index) in pokemon.stats" :key="`stat-${index}`">
            <span>{{ stat.stat.name }}</span>
            <span>{{ stat.base_stat }}</span>
          </div>
        </div>
      </div>
      <p>Physical Attributes</p>
      <div class="stats-container">
        <div>
          <span>Weight:</span> <span>{{ pokemon.weight }}</span>
        </div>
        <div>
          <span>Height:</span> <span>{{ pokemon.height }}</span>
        </div>
      </div>

      <p>Abilities</p>
      <div class="stats-container">
        <div
          v-for="(ability, index) in pokemon.abilities"
          :key="`ability-${index}`"
        >
          <span>{{ ability.ability.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss" src="../styles/components/PokemonInfo.scss" />
<script>
import ErrorMessage from "./ErrorMessage.vue";

export default {
  name: "PokemonInfo",
  props: {
    pokemon: Object,
  },
  components: { ErrorMessage },
};
</script>
