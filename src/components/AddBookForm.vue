<script setup lang="ts">
import type { BookPayload } from "@/models/book";
import { reactive } from "vue";

const emit = defineEmits(["submit"]);

const form: BookPayload = reactive({
  title: "",
  publishedYear: 0,
  isRead: false,
});

function handleSubmit() {
  emit("submit", form);
}
</script>

<template>
  <form class="mb-5 w-full max-w-100" @submit.prevent="handleSubmit">
    <div class="mb-3 flex flex-col">
      <label class="select-none" for="title">Titel</label>
      <input
        v-model="form.title"
        class="border-accent bg-primary-surface rounded-lg border-2 border-solid p-2"
        id="title"
        name="title"
        type="text"
      />
    </div>
    <div class="mb-3 flex flex-col">
      <label class="select-none" for="published-year">Utgivningsår</label>
      <input
        v-model="form.publishedYear"
        class="border-accent bg-primary-surface rounded-lg border-2 border-solid p-2"
        id="published-year"
        name="publishedYear"
        type="number"
        min="0"
      />
    </div>
    <div class="mb-3 flex flex-row items-center">
      <label class="mr-1 select-none" for="is-read">Utläst</label>
      <div class="flex-center relative">
        <input
          v-model="form.isRead"
          class="peer border-accent checked:bg-accent bg-primary-surface h-4 w-4 appearance-none rounded-sm border-2 border-solid"
          id="is-read"
          name="isRead"
          type="checkbox"
        />
        <svg
          class="stroke-primary-surface pointer-events-none absolute top-1/2 hidden h-3 w-3 -translate-y-1/2 peer-checked:block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
    </div>
    <button
      class="bg-accent text-primary cursor-pointer rounded-lg px-6 py-2"
      type="submit"
    >
      Lägg till bok
    </button>
  </form>
</template>
