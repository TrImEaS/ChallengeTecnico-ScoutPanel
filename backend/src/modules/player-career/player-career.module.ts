import { Module } from '@nestjs/common'
import { PlayerCareerService } from './player-career.service'
import { PlayerCareerController } from './player-career.controller'

@Module({
  controllers: [PlayerCareerController],
  providers: [PlayerCareerService]
})
export class PlayerCareerModule {}
