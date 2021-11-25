import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { EntrypointModule } from './entrypoints/entrypoint.module';

@Module({
  imports: [InfrastructureModule, EntrypointModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
