import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHelloFastify(): string {
    return 'Hello Fastify!';
  }
}
