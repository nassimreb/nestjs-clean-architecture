import { BookRepositoryInterface } from "../repositories/book-repository.interface";
import { Book } from "../../../core/domain/book/book.model";
import { BookBuilder } from "../../../core/domain/book/book.builder";
import { Injectable } from "@nestjs/common";

@Injectable()
export class BookInMemoryService implements BookRepositoryInterface {
  findAllBooks(): Array<Book> {
    return Array.of(new BookBuilder()
      .id("243")
      .title("Hello Clean Arch")
      .build());
  }
}
