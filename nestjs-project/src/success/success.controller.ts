import { Body, Controller, Get, Post, Query } from '@nestjs/common';
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
    console.log('success', timeTakenMs);
    return this.successService.createSuccess(timeTakenMs);
  }

  @Get()
  getSuccess(): string {
    return 'success';
  }
}
