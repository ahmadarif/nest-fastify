import { Controller, Get, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AnyFilesInterceptor } from '@webundsoehne/nest-fastify-file-upload';
import { FileField } from '../interface/file.interface';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  index() {
    return this.appService.index();
  }

  @Post('upload')
  @UseInterceptors(AnyFilesInterceptor())
  async upload(@UploadedFiles() file: FileField[]) {
    return file;
  }
}
