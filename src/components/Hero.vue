<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "Startsida",
  },
});
</script>

<template>
  <h1 class="mb-5 text-center text-4xl">{{ title }}</h1>
  <p><slot /></p>
</template>
