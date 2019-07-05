import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { MainModule } from './main.module';

let context: NestFastifyApplication = null;
export async function GetContext() {
  if (!context) {
    context = await NestFactory.create<NestFastifyApplication>(MainModule, new FastifyAdapter());
  }
  return context;
}
