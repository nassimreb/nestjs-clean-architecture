import { Module } from '@nestjs/common';
import { BookService } from './dataproviders/book/book.service';

@Module({
  providers: [BookService],
  exports: [BookService]
})
export class InfrastructureModule {}
