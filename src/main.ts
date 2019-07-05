import { GetContext } from './main.context';
import { Env } from './helpers/environment.helper';
import { RedisIoAdapter } from './websockets/redis-io.adapter';

async function bootstrap() {
  const app = await GetContext();
  app.useWebSocketAdapter(new RedisIoAdapter(app));
  await app.listen(Env.getNumber('PORT'));
}
bootstrap();
