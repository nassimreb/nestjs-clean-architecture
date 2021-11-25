import { Module } from '@nestjs/common';
import { BookController } from './book/book.controller';
import { BookService } from "../infrastructure/dataproviders/book/book.service";
import { InfrastructureModule } from "../infrastructure/infrastructure.module";
import { BookGateway } from "../core/domain/book/book.gateway";

@Module({
  controllers: [BookController],
  providers: [{
    provide: BookGateway,
    useClass: BookService
  }]
  , imports: [InfrastructureModule]
})
export class EntrypointModule {}
