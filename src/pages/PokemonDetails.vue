<template>Pokemon page {{ $route.params.pokemon }}</template>
<script>
export default {
  created() {
    console.log(this.$route.params.pokemon);
  },
};
</script>
