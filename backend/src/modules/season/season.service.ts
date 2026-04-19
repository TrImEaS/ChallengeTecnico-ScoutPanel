import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { Prisma } from '@prisma/client'

@Injectable()
export class SeasonService {
  constructor (private readonly prisma: PrismaService) {}

  create (data: Prisma.SeasonCreateInput) {
    return this.prisma.season.create({ data })
  }

  findAll () {
    return this.prisma.season.findMany()
  }

  findOne (id: number) {
    return this.prisma.season.findUnique({ where: { id } })
  }

  update (id: number, data: Prisma.SeasonUpdateInput) {
    return this.prisma.season.update({ where: { id }, data })
  }

  remove (id: number) {
    return this.prisma.season.delete({ where: { id } })
  }
}
