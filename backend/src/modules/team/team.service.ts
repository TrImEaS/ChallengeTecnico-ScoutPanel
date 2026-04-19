import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { Prisma } from '@prisma/client'

@Injectable()
export class TeamService {
  constructor (private readonly prisma: PrismaService) {}

  create (data: Prisma.TeamCreateInput) {
    return this.prisma.team.create({ data })
  }

  findAll () {
    return this.prisma.team.findMany()
  }

  findOne (id: number) {
    return this.prisma.team.findUnique({ where: { id } })
  }

  update (id: number, data: Prisma.TeamUpdateInput) {
    return this.prisma.team.update({ where: { id }, data })
  }

  remove (id: number) {
    return this.prisma.team.delete({ where: { id } })
  }
}
