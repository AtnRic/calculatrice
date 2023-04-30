import { Body, Controller, Get, Post } from '@nestjs/common';
import { Success } from './success.model';
import { SuccessService } from './success.service';

@Controller('success')
export class SuccessController {
  SuccessService: any;
  constructor(private readonly successService: SuccessService) {}

  @Post()
  async createSuccess(
    @Body('timeTakenMs') timeTakenMs: number,
  ): Promise<Success> {
    console.log('success');
    return this.successService.createSuccess(timeTakenMs);
  }
  // @Post()
  // success(@Body('timeTaken') timeTaken: number): Promise<Success> {
  //   console.log('success');
  //   return this.SuccessService.createSuccess(timeTaken);
  // }
  @Get()
  getSuccess(): string {
    return 'success';
  }
}
