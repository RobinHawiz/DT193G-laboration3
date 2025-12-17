import type { BookEntity, BookPayload } from "@/models/book";
import { useDeleteData, useGetData, usePostData } from "@/composables/useFetch";
const apiUrl =
  import.meta.env.VITE_API_BASE_URL ??
  "https://dt193g-laboration2.azurewebsites.net/api";

export class BookApi {
  constructor(private readonly API_BASE_URL = apiUrl) {}

  async getAllBooks(): Promise<Array<BookEntity>> {
    return await useGetData<Array<BookEntity>>(`${this.API_BASE_URL}/books`);
  }

  async getOneBook(location: string): Promise<BookEntity> {
    return await useGetData<BookEntity>(location);
  }

  async addBook(payload: BookPayload): Promise<string> {
    return await usePostData<BookPayload>(
      `${this.API_BASE_URL}/books`,
      payload,
    );
  }

  async deleteBook(id: number) {
    await useDeleteData(`${this.API_BASE_URL}/books/${id}`);
  }
}
