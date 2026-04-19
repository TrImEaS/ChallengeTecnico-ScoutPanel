import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { PlayerService } from './player.service'
import { Prisma } from '@prisma/client'

@Controller('player')
export class PlayerController {
  constructor (private readonly playerService: PlayerService) {}

  @Post()
  create (@Body() data: Prisma.PlayerUncheckedCreateInput) {
    return this.playerService.create(data)
  }

  @Get()
  findAll () {
    return this.playerService.findAll()
  }

  @Get(':id')
  findOne (@Param('id') id: string) {
    return this.playerService.findOne(+id)
  }

  @Patch(':id')
  update (@Param('id') id: string, @Body() data: Prisma.PlayerUncheckedUpdateInput) {
    return this.playerService.update(+id, data)
  }

  @Delete(':id')
  remove (@Param('id') id: string) {
    return this.playerService.remove(+id)
  }
}
