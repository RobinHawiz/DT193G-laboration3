<script setup lang="ts">
import type { BookEntity } from "@/models/book";
import type { PropType } from "vue";

defineProps({
  book: {
    type: Object as PropType<BookEntity>,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <li>
    <article>
      <h2>{{ book.title }}</h2>
      <p>{{ book.publishedYear }}</p>
      <p>{{ `Boken är ${book.isRead ? "utläst" : "oläst"}` }}</p>
      <button @click="$emit('deleteBook', book.id, index)">Ta bort</button>
    </article>
  </li>
</template>
