import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MulterModule } from '@webundsoehne/nest-fastify-file-upload';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MulterModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        dest: configService.get('STORAGE_PATH') ?? '/tmp',
      }),
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
