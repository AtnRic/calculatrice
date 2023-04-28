import { Module } from '@nestjs/common';
import { ErrorOcController } from './error-oc.controller';
import { ErrorOcService } from './error-oc.service';

@Module({
  controllers: [ErrorOcController],
  providers: [ErrorOcService],
})
export class ErrorOcModule {}
