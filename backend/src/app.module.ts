import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from './modules/prisma/prisma.module'
import { TeamModule } from './modules/team/team.module'
import { PlayerModule } from './modules/player/player.module'
import { SeasonModule } from './modules/season/season.module'
import { PlayerStatsModule } from './modules/player-stats/player-stats.module'
import { PlayerCareerModule } from './modules/player-career/player-career.module'

@Module({
  imports: [PrismaModule, TeamModule, PlayerModule, SeasonModule, PlayerStatsModule, PlayerCareerModule, ConfigModule.forRoot({ isGlobal: true })]
})
export class AppModule {}
