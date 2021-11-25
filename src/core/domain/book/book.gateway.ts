import { Book } from "./book.model";

export abstract class BookGateway {
  abstract findAllBooks(): Array<Book>;
}
