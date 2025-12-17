<script setup lang="ts">
import type { BookEntity, BookPayload } from "@/models/book";
import BookItem from "@/components/BookItem.vue";
import AddBookFormVue from "@/components/AddBookForm.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { onMounted, reactive } from "vue";
import { BookApi } from "@/composables/useBookApi";

export type State = {
  books: Array<BookEntity>;
  isLoading: boolean;
};

const state = reactive<State>({
  books: [],
  isLoading: true,
});

const bookApi = new BookApi();

async function getAllBooks() {
  try {
    state.isLoading = true;
    state.books = await bookApi.getAllBooks();
  } catch (error) {
    console.log(error);
  } finally {
    state.isLoading = false;
  }
}

async function addBook(newBook: BookPayload) {
  try {
    state.isLoading = true;
    const location = await bookApi.addBook(newBook);
    const book = await bookApi.getOneBook(location);
    state.books.push(book);
  } catch (error) {
    console.log(error);
  } finally {
    state.isLoading = false;
  }
}

async function deleteBook(id: number, index: number) {
  try {
    state.isLoading = true;
    await bookApi.deleteBook(id);
    state.books.splice(index, 1);
  } catch (error) {
    console.log(error);
  } finally {
    state.isLoading = false;
  }
}

async function handleSubmit(newBook: BookPayload) {
  try {
    await addBook(newBook);
  } catch (error) {
    console.log(error);
  }
}

onMounted(async () => {
  await getAllBooks();
});
</script>

<template>
  <AddBookFormVue @submit="handleSubmit" />
  <!-- Show loading spinner while loading is true -->
  <div v-if="state.isLoading">
    <PulseLoader class="[&>.v-pulse]:bg-tertiary!" />
  </div>
  <!-- Show book list when done loading -->
  <ul v-else>
    <BookItem
      @delete-book="deleteBook"
      v-for="(book, index) in state.books"
      :key="book.id"
      :book="book"
      :index="index"
    />
  </ul>
</template>
