import { Injectable } from '@nestjs/common';
import { BookGateway } from "../../../core/domain/book/book.gateway";
import { Book } from "../../../core/domain/book/book.model";
import { BookBuilder } from "../../../core/domain/book/book.builder";

@Injectable()
export class BookService implements BookGateway {

  findAllBooks(): Array<Book> {
    return Array.of(new BookBuilder()
      .id("243")
      .title("Hello Clean Arch")
      .build());
  }

}
