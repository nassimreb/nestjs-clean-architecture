import { Injectable } from '@nestjs/common';
import { BookGateway } from "../../../core/domain/book/book.gateway";
import { Book } from "../../../core/domain/book/book.model";
import { BookRepositoryInterface } from "../../dataproviders/repositories/book-repository.interface";

@Injectable()
export class BookService implements BookGateway {
  private bookRepository: BookRepositoryInterface;

  constructor(bookRepository: BookRepositoryInterface) {
    this.bookRepository = bookRepository;
  }

  findAllBooks(): Array<Book> {
    return this.bookRepository.findAllBooks();
  }

}
