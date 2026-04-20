import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { Prisma } from '@prisma/client'

@Injectable()
export class PlayerCareerService {
  constructor (private readonly prisma: PrismaService) {}

  create (data: Prisma.PlayerCareerCreateInput) {
    return this.prisma.playerCareer.create({ data })
  }

  findAll () {
    return this.prisma.playerCareer.findMany({
      include: {
        team: true
      }
    })
  }

  findOne (id: number) {
    return this.prisma.playerCareer.findUnique({
      where: { id },
      include: {
        team: true
      }
    })
  }

  update (id: number, data: Prisma.PlayerCareerUpdateInput) {
    return this.prisma.playerCareer.update({ where: { id }, data })
  }

  remove (id: number) {
    return this.prisma.playerCareer.delete({ where: { id } })
  }
}
