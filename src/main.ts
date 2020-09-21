import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as multer from 'fastify-multer';
import { ApplicationContext } from './app.context';

async function bootstrap() {
  const app = await ApplicationContext();
  app.register(multer.contentParser);
  await app.listen(app.get(ConfigService).get('APP_PORT'));
  Logger.log(`Running on port ${app.get(ConfigService).get('APP_PORT')}`, 'NestApplication');
}
bootstrap();
