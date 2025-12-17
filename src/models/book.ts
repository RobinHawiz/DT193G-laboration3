/**
 * Represents a book entry stored in a database.
 */
export type BookEntity = {
  id: number;
  title: string;
  publishedYear: number;
  isRead: boolean;
};

/**
 * A payload representing a single Book, intended for storage in a database.
 */
export type BookPayload = Omit<BookEntity, "id">;
