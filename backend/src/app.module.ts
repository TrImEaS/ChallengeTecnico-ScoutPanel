import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from './modules/prisma/prisma.module'
import { PlayerModule } from './modules/player/player.module'

@Module({
  imports: [
    PrismaModule,
    PlayerModule,
    ConfigModule.forRoot({ isGlobal: true })
  ]
})
export class AppModule {}
