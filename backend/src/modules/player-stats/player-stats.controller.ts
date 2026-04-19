import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { PlayerStatsService } from './player-stats.service'
import { Prisma } from '@prisma/client'

@Controller('player-stats')
export class PlayerStatsController {
  constructor (private readonly playerStatsService: PlayerStatsService) {}

  @Post()
  create (@Body() data: Prisma.PlayerStatsUncheckedCreateInput) {
    return this.playerStatsService.create(data)
  }

  @Get()
  findAll () {
    return this.playerStatsService.findAll()
  }

  @Get(':id')
  findOne (@Param('id') id: string) {
    return this.playerStatsService.findOne(+id)
  }

  @Patch(':id')
  update (@Param('id') id: string, @Body() data: Prisma.PlayerStatsUncheckedUpdateInput) {
    return this.playerStatsService.update(+id, data)
  }

  @Delete(':id')
  remove (@Param('id') id: string) {
    return this.playerStatsService.remove(+id)
  }
}
