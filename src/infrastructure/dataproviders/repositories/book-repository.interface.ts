import { Book } from "../../../core/domain/book/book.model";

export abstract class BookRepositoryInterface {
  abstract findAllBooks(): Array<Book>;
}
