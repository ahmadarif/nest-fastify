import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { EventsGateway } from './websockets/events.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    EventsGateway,
  ],
})
export class MainModule {}
