import { Module } from '@nestjs/common';
import { BookService } from './adaptaters/book/book.service';
import { BookInMemoryService } from "./dataproviders/inMemory/book-in-memory.service";
import { BookRepositoryInterface } from "./dataproviders/repositories/book-repository.interface";

@Module({
  providers: [BookService, {
    provide: BookRepositoryInterface,
    useClass: BookInMemoryService
  }],
  exports: [BookService, BookRepositoryInterface]
})
export class InfrastructureModule {}
