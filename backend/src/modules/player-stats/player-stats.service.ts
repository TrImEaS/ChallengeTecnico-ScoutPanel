import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { Prisma } from '@prisma/client'

@Injectable()
export class PlayerStatsService {
  constructor (private readonly prisma: PrismaService) {}

  create (data: Prisma.PlayerStatsUncheckedCreateInput) {
    return this.prisma.playerStats.create({ data })
  }

  findAll () {
    return this.prisma.playerStats.findMany({ include: { player: true, season: true } })
  }

  findOne (id: number) {
    return this.prisma.playerStats.findUnique({ where: { id }, include: { player: true, season: true } })
  }

  update (id: number, data: Prisma.PlayerStatsUncheckedUpdateInput) {
    return this.prisma.playerStats.update({ where: { id }, data })
  }

  remove (id: number) {
    return this.prisma.playerStats.delete({ where: { id } })
  }
}
