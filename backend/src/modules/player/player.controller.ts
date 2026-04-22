import { Controller, DefaultValuePipe, Get, Param, ParseBoolPipe, ParseIntPipe, Query } from '@nestjs/common'
import { PlayerService } from './player.service'

@Controller('player')
export class PlayerController {
  constructor (private readonly playerService: PlayerService) {}
  @Get()
  findAll (
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(8), ParseIntPipe) limit: number,
    @Query('name') name?: string,
    @Query('position') position?: string,
    @Query('nationality') nationality?: string,
    @Query('minAge') minAge?: string,
    @Query('maxAge') maxAge?: string,
    @Query('includeTeam', new DefaultValuePipe(false), ParseBoolPipe) includeTeam?: boolean,
    @Query('includeStats', new DefaultValuePipe(false), ParseBoolPipe) includeStats?: boolean,
    @Query('includeCareer', new DefaultValuePipe(false), ParseBoolPipe) includeCareer?: boolean
  ) {
    return this.playerService.findAll({
      page,
      limit,
      name,
      position,
      nationality,
      minAge: minAge ? parseInt(minAge, 10) : undefined,
      maxAge: maxAge ? parseInt(maxAge, 10) : undefined,
      includeTeam,
      includeStats,
      includeCareer,
    })
  }

  @Get('compare')
  compare (@Query('names') names: string) {
    const nameList = names?.split(',').map(n => n.trim()).filter(Boolean) || []
    return this.playerService.findManyByNames(nameList)
  }

  @Get(':id')
  findOne (@Param('id', ParseIntPipe) id: number) {
    return this.playerService.findOne(id)
  }
}
