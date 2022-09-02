import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus() {
    return { message: 'EVMS API Gateway Running' };
  }
}
