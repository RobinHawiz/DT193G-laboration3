<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "@/components/Header.vue";
</script>

<template>
  <Header />
  <main class="flex-center mx-auto w-325 max-w-[90%] flex-col py-5">
    <RouterView />
  </main>
</template>
