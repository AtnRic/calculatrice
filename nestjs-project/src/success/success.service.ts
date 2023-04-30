import { Injectable } from '@nestjs/common';
import { Success } from './success.entity';

@Injectable()
export class SuccessService {
  async createSuccess(timeTakenMs: number): Promise<Success> {
    const success = new Success();
    success.timeTakenMs = timeTakenMs;
    // Faire ici toutes les opérations nécessaires pour créer et sauvegarder l'objet Success

    // await success.save();
    return success;
  }
}
