import { Body, Controller, Get, Post } from '@nestjs/common';
import { Success } from './success.model';
@Controller('success')
export class SuccessController {
  SuccessService: any;
  @Post()
  success(
    // @Body('id') id: number, car auto-increment
    @Body('timeTaken') timeTaken: number,
  ): Promise<Success> {
    console.log('success');
    return this.SuccessService.createSuccess(timeTaken);
  }
  @Get()
  getError(): string {
    return 'error';
  }
}
