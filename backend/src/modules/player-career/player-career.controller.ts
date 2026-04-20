import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { PlayerCareerService } from './player-career.service'
import { Prisma } from '@prisma/client'

@Controller('player-career')
export class PlayerCareerController {
  constructor (private readonly playerCareerService: PlayerCareerService) {}

  @Post()
  create (@Body() data: Prisma.PlayerCareerCreateInput) {
    return this.playerCareerService.create(data)
  }

  @Get()
  findAll () {
    return this.playerCareerService.findAll()
  }

  @Get(':id')
  findOne (@Param('id') id: string) {
    return this.playerCareerService.findOne(+id)
  }

  @Patch(':id')
  update (@Param('id') id: string, @Body() data: Prisma.PlayerCareerUpdateInput) {
    return this.playerCareerService.update(+id, data)
  }

  @Delete(':id')
  remove (@Param('id') id: string) {
    return this.playerCareerService.remove(+id)
  }
}
