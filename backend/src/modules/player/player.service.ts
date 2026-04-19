import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { Prisma } from '@prisma/client'

@Injectable()
export class PlayerService {
  constructor (private readonly prisma: PrismaService) {}

  create (data: Prisma.PlayerUncheckedCreateInput) {
    return this.prisma.player.create({ data })
  }

  findAll () {
    return this.prisma.player.findMany({ include: { team: true } })
  }

  findOne (id: number) {
    return this.prisma.player.findUnique({ where: { id }, include: { team: true } })
  }

  update (id: number, data: Prisma.PlayerUncheckedUpdateInput) {
    return this.prisma.player.update({ where: { id }, data })
  }

  remove (id: number) {
    return this.prisma.player.delete({ where: { id } })
  }
}
