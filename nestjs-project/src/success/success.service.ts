import { Injectable } from '@nestjs/common';
import { Success } from './success.entity';

@Injectable()
export class SuccessService {
  async createSuccess(timeTaken: number): Promise<Success> {
    const success = new Success();
    success.timeTakenMs = timeTaken;
    // Faire ici toutes les opérations nécessaires pour créer et sauvegarder l'objet Success
    // Par exemple : await success.save();
    return success;
  }
}
