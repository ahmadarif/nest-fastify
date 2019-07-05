import { Controller, Get } from '@nestjs/common';
import { response, Response } from '../helpers/response.helper';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Response<string> {
    return response('Nest Fastify', this.appService.getHello());
  }
}
