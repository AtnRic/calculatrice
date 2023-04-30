import { Injectable } from '@nestjs/common';
import { ErrorOc } from './error-oc.entity';
import { error } from 'console';

@Injectable()
export class ErrorOcService {
  async createErrorOc(timestamp: Date): Promise<ErrorOc> {
    const errorOc = new ErrorOc();
    errorOc.timestamp = timestamp;
    // Faire ici toutes les opérations nécessaires pour créer et sauvegarder l'objet Success
    // Par exemple : await success.save();
    return errorOc;
  }
}
