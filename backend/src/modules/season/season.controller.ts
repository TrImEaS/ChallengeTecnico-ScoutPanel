import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { SeasonService } from './season.service'
import { Prisma } from '@prisma/client'

@Controller('season')
export class SeasonController {
  constructor (private readonly seasonService: SeasonService) {}

  @Post()
  create (@Body() data: Prisma.SeasonCreateInput) {
    return this.seasonService.create(data)
  }

  @Get()
  findAll () {
    return this.seasonService.findAll()
  }

  @Get(':id')
  findOne (@Param('id') id: string) {
    return this.seasonService.findOne(+id)
  }

  @Patch(':id')
  update (@Param('id') id: string, @Body() data: Prisma.SeasonUpdateInput) {
    return this.seasonService.update(+id, data)
  }

  @Delete(':id')
  remove (@Param('id') id: string) {
    return this.seasonService.remove(+id)
  }
}
