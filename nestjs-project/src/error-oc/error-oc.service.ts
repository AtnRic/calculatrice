import { Injectable } from '@nestjs/common';
//import { ErrorOc } from './error-oc.model';
import { ErrorOc } from './error-oc.entity';

@Injectable()
export class ErrorOcService {
  async createErrorOc(id: number, timestamp: Date): Promise<ErrorOc> {
    const error = new ErrorOc();
    error.id = id;
    error.timestamp = timestamp;

    await error.save();
    return error;
  }
}
