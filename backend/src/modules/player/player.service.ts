import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { Prisma } from '@prisma/client'

interface FindAllParams {
  page: number;
  limit: number;
  name?: string;
  position?: string;
  nationality?: string;
  minAge?: number;
  maxAge?: number;
  includeTeam?: boolean;
  includeStats?: boolean;
  includeCareer?: boolean;
}

@Injectable()
export class PlayerService {
  constructor (private readonly prisma: PrismaService) {}

  async findAll (params: FindAllParams) {
    const { page, limit, includeTeam, includeStats, includeCareer } = params
    const where = this.buildWhereClause(params)

    const { position, ...facetWhere } = where

    const [total, data, positions] = await Promise.all([
      this.prisma.player.count({ where }),
      this.prisma.player.findMany({
        where,
        skip: (page - 1) * limit,
        take: limit,
        include: {
          team: includeTeam || false,
          stats: includeStats ? { include: { season: true } } : false,
          career: includeCareer ? { include: { team: true } } : false,
        },
      }),
      this.prisma.player.findMany({
        where: facetWhere,
        distinct: ['position'],
        select: { position: true, positionShort: true },
        orderBy: { position: 'asc' },
      }),
    ])

    return {
      data,
      meta: { total, page, totalPages: Math.ceil(total / limit) },
      positions,
    }
  }

  findOne (id: number) {
    return this.prisma.player.findUnique({
      where: { id },
      include: {
        team: true,
        stats: { include: { season: true } },
        career: { include: { team: true } }
      },
    })
  }

  async findManyByNames (names: string[]) {
    if (!names.length) return []
    return this.prisma.player.findMany({
      where: { name: { in: names, mode: 'insensitive' } },
      include: { team: true, stats: { include: { season: true } } },
    })
  }

  private buildWhereClause (params: FindAllParams): Prisma.PlayerWhereInput {
    const where: Prisma.PlayerWhereInput = {}

    if (params.name) where.name = { contains: params.name, mode: 'insensitive' }
    if (params.position) where.position = { equals: params.position, mode: 'insensitive' }
    if (params.nationality) where.nationality = { startsWith: params.nationality, mode: 'insensitive' }

    if (params.minAge || params.maxAge) {
      where.birthDate = this.buildAgeFilter(params.minAge, params.maxAge)
    }

    return where
  }

  private buildAgeFilter (minAge?: number, maxAge?: number): Prisma.DateTimeFilter {
    const filter: Prisma.DateTimeFilter = {}
    const today = new Date()

    if (minAge) {
      const maxDate = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate())
      filter.lte = maxDate.toISOString()
    }
    if (maxAge) {
      const minDate = new Date(today.getFullYear() - maxAge - 1, today.getMonth(), today.getDate() + 1)
      filter.gte = minDate.toISOString()
    }

    return filter
  }
}
