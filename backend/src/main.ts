import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap () {
  const app = await NestFactory.create(AppModule)
  const origins = ['http://localhost:5173', 'https://trimeas.duckdns.org']

  app.enableCors({
    origin: origins,
    methods: 'GET',
    credentials: true
  })

  await app.listen(process.env.PORT ?? 3000)
}
bootstrap()
