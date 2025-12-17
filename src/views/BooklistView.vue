<script setup lang="ts">
import Hero from "@/components/Hero.vue";
import BookList from "@/components/BookList.vue";

const title = "Boklista";
</script>

<template>
  <Hero :title="title" />
  <BookList />
</template>
