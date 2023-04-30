import { Body, Controller, Get, Post } from '@nestjs/common';
import { ErrorOc } from './error-oc.model';
import { ErrorOcService } from './error-oc.service';
import { time } from 'console';

@Controller('errorOc')
export class ErrorOcController {
  ErrorOcService: any;
  constructor(private readonly errorOcService: ErrorOcService) {}

  @Post()
  async createSuccess(@Body('timestamp') timestamp: Date): Promise<ErrorOc> {
    console.log('error');
    return this.errorOcService.createErrorOc(timestamp);
  }

  @Get()
  getSuccess(): string {
    return 'error';
  }
}
