import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuccessModule } from './success/success.module';
import { ErrorOcModule } from './error-oc/error-oc.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [SuccessModule, ErrorOcModule],
})
export class AppModule {}
