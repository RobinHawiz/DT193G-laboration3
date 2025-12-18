<script setup lang="ts">
import Hero from "@/components/Hero.vue";

const title = "Info";
</script>

<template>
  <Hero :title="title">
    Allt gick bra med uppgiften och det var lättare att komma in i än Angular.
    Jag fick med props, emits, reaktiv data och two way binding utan att tänka
    på det, och det kändes naturligt vad som ska användas när. Det enda knepiga
    var att komma igång med Vue utan npm create vue@latest eftersom jag ville
    integrera ramverket i min befintliga setup. Detta gjorde att jag behövde
    kolla upp katalogstruktur och filnamn. Jag installerade nödvändiga paket med
    npm i vue och npm i -D @vitejs/plugin-vue vue-tsc för stöd i Vite och
    TypeScript.
  </Hero>
</template>
