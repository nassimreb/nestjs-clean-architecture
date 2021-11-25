import { BookGateway } from "../../domain/book/book.gateway";
import { Book } from "../../domain/book/book.model";

export class GetBooksUseCase {
  private bookGateway: BookGateway;

  constructor(bookGatewayInterface: BookGateway) {
    this.bookGateway = bookGatewayInterface;
  }

  public getAllBooks(): Array<Book> {
    return this.bookGateway.findAllBooks();
  }
}
