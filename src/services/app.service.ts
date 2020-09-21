import { Injectable } from '@nestjs/common';
import { IndexDto } from '../dto/app.dto';

@Injectable()
export class AppService {
  index(): IndexDto {
    return {
      message: 'NestJS 🔥 Fastify',
      uptime: Math.round(process.uptime())
    };
  }
}
