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
    <article
      class="shadow-card bg-primary-surface my-4.5 flex flex-col rounded-lg p-5"
    >
      <h2 class="text-2xl">{{ `${book.title}` }}</h2>
      <p class="mt-4.5 text-lg">{{ `Utgivningsår: ${book.publishedYear}` }}</p>
      <p class="mb-4.5 text-lg">
        {{ `Boken är ${book.isRead ? "utläst" : "oläst"}` }}
      </p>
      <button
        @click="$emit('deleteBook', book.id, index)"
        class="border-accent text-accent cursor-pointer rounded-lg border-2 border-solid px-6 py-2"
      >
        Ta bort
      </button>
    </article>
  </li>
</template>
