<template>
  <Loader v-if="!pokemonDetails" />
  <PokemonInfo v-if="!!pokemonDetails" :pokemon="pokemonDetails" />
</template>
<script>
import Loader from "../components/Loader.vue";
import PokemonInfo from "../components/PokemonInfo.vue";
import { usePokemon } from "../stores/pokemon";

export default {
  data() {
    return {
      pokemonDetails: Object,
    };
  },
  async created() {
    const pokemonStore = usePokemon();
    this.pokemonDetails = await pokemonStore.fetchPokemonDetails(
      this.$route.params.pokemon
    );
    this.$watch(
      () => this.$route.params.pokemon,
      async (pokemon) => {
        this.pokemonDetails = await pokemonStore.fetchPokemonDetails(pokemon);
      }
    );
  },
  components: { Loader, PokemonInfo },
};
</script>
