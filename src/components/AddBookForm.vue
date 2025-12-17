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
  const newBook: BookPayload = { ...form };
  emit("submit", newBook);
}
</script>

<template>
  <form class="mb-5" @submit.prevent="handleSubmit">
    <div>
      <label for="title">Titel</label>
      <input v-model="form.title" id="title" name="title" type="text" />
    </div>
    <div>
      <label for="published-year">Utgivningsår</label>
      <input
        v-model="form.publishedYear"
        id="published-year"
        name="publishedYear"
        type="number"
        min="0"
      />
    </div>
    <div>
      <label for="is-read">Utläst</label>
      <input v-model="form.isRead" id="is-read" name="isRead" type="checkbox" />
    </div>
    <button class="cursor-pointer" type="submit">Lägg till bok</button>
  </form>
</template>
