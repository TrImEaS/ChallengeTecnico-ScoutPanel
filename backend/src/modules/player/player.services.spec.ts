import { Test, TestingModule } from '@nestjs/testing'
import { PlayerService } from './player.service'
import { PrismaService } from '../prisma/prisma.service'

describe('PlayerService', () => {
  let service: PlayerService
  let prisma: PrismaService
  let findUniqueSpy: jest.SpyInstance
  let findManySpy: jest.SpyInstance

  const mockPlayer = { id: 1, name: 'Miguel Borja', position: 'Centre-Forward' }

  const mockPrismaService = {
    player: {
      findUnique: jest.fn(),
      count: jest.fn(),
      findMany: jest.fn(),
    },
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlayerService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile()

    service = module.get<PlayerService>(PlayerService)
    prisma = module.get<PrismaService>(PrismaService)
    findUniqueSpy = jest.spyOn(prisma.player, 'findUnique')
    findManySpy = jest.spyOn(prisma.player, 'findMany')
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('should return a single player by ID', async () => {
    findUniqueSpy.mockResolvedValue(mockPlayer)

    const result = await service.findOne(1)

    expect(result).toEqual(mockPlayer)
    expect(findUniqueSpy).toHaveBeenCalledWith({
      where: { id: 1 },
      include: {
        team: true,
        stats: { include: { season: true } },
        career: { include: { team: true } },
      },
    })
  })

  it('should return players for comparison', async () => {
    const mockPlayers = [mockPlayer, { id: 2, name: 'Kevin Zenón' }]
    findManySpy.mockResolvedValue(mockPlayers)

    const result = await service.findManyByNames(['Miguel Borja', 'Kevin Zenón'])

    expect(result).toEqual(mockPlayers)
    expect(findManySpy).toHaveBeenCalledTimes(1)
  })
})
