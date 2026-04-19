import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { TeamService } from './team.service'
import { Prisma } from '@prisma/client'

@Controller('team')
export class TeamController {
  constructor (private readonly teamService: TeamService) {}

  @Post()
  create (@Body() data: Prisma.TeamCreateInput) {
    return this.teamService.create(data)
  }

  @Get()
  findAll () {
    return this.teamService.findAll()
  }

  @Get(':id')
  findOne (@Param('id') id: string) {
    return this.teamService.findOne(+id)
  }

  @Patch(':id')
  update (@Param('id') id: string, @Body() data: Prisma.TeamUpdateInput) {
    return this.teamService.update(+id, data)
  }

  @Delete(':id')
  remove (@Param('id') id: string) {
    return this.teamService.remove(+id)
  }
}
