<script setup lang="ts">
import { RouterLink } from "vue-router";
import banner from "@/assets/images/banner.jpg";
</script>

<template>
  <header class="w-full">
    <nav class="w-full">
      <ul class="flex-center gap-10">
        <li class="p-2.5"><RouterLink to="/">Start</RouterLink></li>
        <li class="p-2.5"><RouterLink to="/boklista">Boklista</RouterLink></li>
        <li class="p-2.5"><RouterLink to="/info">Info</RouterLink></li>
      </ul>
    </nav>
    <img
      class="h-75 object-cover"
      :src="banner"
      alt="Library shelves packed with books"
    />
  </header>
</template>
