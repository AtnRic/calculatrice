import { Body, Controller, Get, Post } from '@nestjs/common';
import { ErrorOc } from './error-oc.model';

@Controller('error-oc')
export class ErrorOcController {
  @Post()
  errorOc(
    // @Body('id') id: number, car auto-increment
    @Body('timestamp') timestamp: Date,
  ): Promise<ErrorOc> {
    return this.errorOc(timestamp);
    //return this.ErrorOcService.createErrorOc(timestamp);
  }
  @Get()
  getError(): string {
    return 'error';
  }
}
