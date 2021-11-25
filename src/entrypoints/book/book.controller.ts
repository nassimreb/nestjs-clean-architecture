import { Controller, Get } from "@nestjs/common";
import { GetBooksUseCase } from "../../core/usecases/read/get-books.use-case";
import { BookDtoModel } from "./book-dto.model";
import { BookDtoBuilder } from "./book-dto.builder";
import { Book } from "../../core/domain/book/book.model";
import { BookGateway } from "../../core/domain/book/book.gateway";

@Controller('books')
export class BookController {
  private getBooksUseCase: GetBooksUseCase;

  public constructor(bookGateway: BookGateway) {
    this.getBooksUseCase = new GetBooksUseCase(bookGateway);
  }

  @Get()
  public findAll(): Array<BookDtoModel> {
    return this.getBooksUseCase.getAllBooks().map((book: Book) => new BookDtoBuilder()
      .title(book.title)
      .id(book.title)
      .build());
  }

}
