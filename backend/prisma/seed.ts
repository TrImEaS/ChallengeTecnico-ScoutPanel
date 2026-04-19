import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })

async function main () {
  const teams = [
    { id: 1, name: 'Boca Juniors', country: 'Argentina', logoUrl: 'https://example.com/boca.png' },
    { id: 2, name: 'River Plate', country: 'Argentina', logoUrl: 'https://example.com/river.png' },
    { id: 3, name: 'Racing Club', country: 'Argentina', logoUrl: 'https://example.com/racing.png' }
  ]

  for (const team of teams) {
    await prisma.team.upsert({
      where: { id: team.id },
      update: {},
      create: team
    })
  }

  const seasons = [
    { id: 1, name: '2023' },
    { id: 2, name: '2024' }
  ]

  for (const season of seasons) {
    await prisma.season.upsert({
      where: { id: season.id },
      update: {},
      create: season
    })
  }

  const players = [
    { id: 1, name: 'Sergio Romero', birthDate: new Date('1987-02-22'), nationality: 'Argentina', position: 'Goalkeeper', teamId: 1 },
    { id: 2, name: 'Marcos Rojo', birthDate: new Date('1990-03-20'), nationality: 'Argentina', position: 'Defender', teamId: 1 },
    { id: 3, name: 'Edinson Cavani', birthDate: new Date('1987-02-14'), nationality: 'Uruguay', position: 'Forward', teamId: 1 },
    { id: 4, name: 'Cristian Medina', birthDate: new Date('2002-06-01'), nationality: 'Argentina', position: 'Midfielder', teamId: 1 },
    { id: 5, name: 'Franco Armani', birthDate: new Date('1986-10-16'), nationality: 'Argentina', position: 'Goalkeeper', teamId: 2 },
    { id: 6, name: 'Paulo Diaz', birthDate: new Date('1994-08-25'), nationality: 'Chile', position: 'Defender', teamId: 2 },
    { id: 7, name: 'Miguel Borja', birthDate: new Date('1993-01-26'), nationality: 'Colombia', position: 'Forward', teamId: 2 },
    { id: 8, name: 'Esequiel Barco', birthDate: new Date('1999-03-29'), nationality: 'Argentina', position: 'Midfielder', teamId: 2 },
    { id: 9, name: 'Gabriel Arias', birthDate: new Date('1987-09-13'), nationality: 'Chile', position: 'Goalkeeper', teamId: 3 },
    { id: 10, name: 'Juan Fernando Quintero', birthDate: new Date('1993-01-18'), nationality: 'Colombia', position: 'Midfielder', teamId: 3 }
  ]

  for (const player of players) {
    await prisma.player.upsert({
      where: { id: player.id },
      update: {},
      create: player
    })
  }

  const playerStats = [
    { id: 1, playerId: 1, seasonId: 2, matchesPlayed: 10, goals: 0, assists: 0, yellowCards: 1, redCards: 0, minutesPlayed: 900 },
    { id: 2, playerId: 2, seasonId: 2, matchesPlayed: 8, goals: 1, assists: 0, yellowCards: 3, redCards: 1, minutesPlayed: 720 },
    { id: 3, playerId: 3, seasonId: 2, matchesPlayed: 12, goals: 8, assists: 2, yellowCards: 2, redCards: 0, minutesPlayed: 1000 },
    { id: 4, playerId: 4, seasonId: 2, matchesPlayed: 15, goals: 3, assists: 5, yellowCards: 2, redCards: 0, minutesPlayed: 1200 },
    { id: 5, playerId: 5, seasonId: 2, matchesPlayed: 14, goals: 0, assists: 0, yellowCards: 1, redCards: 0, minutesPlayed: 1260 },
    { id: 6, playerId: 6, seasonId: 2, matchesPlayed: 13, goals: 2, assists: 1, yellowCards: 4, redCards: 0, minutesPlayed: 1100 },
    { id: 7, playerId: 7, seasonId: 2, matchesPlayed: 14, goals: 10, assists: 1, yellowCards: 1, redCards: 0, minutesPlayed: 1150 },
    { id: 8, playerId: 8, seasonId: 2, matchesPlayed: 15, goals: 4, assists: 6, yellowCards: 0, redCards: 0, minutesPlayed: 1300 },
    { id: 9, playerId: 9, seasonId: 2, matchesPlayed: 12, goals: 0, assists: 0, yellowCards: 1, redCards: 0, minutesPlayed: 1080 },
    { id: 10, playerId: 10, seasonId: 2, matchesPlayed: 11, goals: 5, assists: 4, yellowCards: 2, redCards: 0, minutesPlayed: 900 }
  ]

  for (const stat of playerStats) {
    await prisma.playerStats.upsert({
      where: { id: stat.id },
      update: {},
      create: stat
    })
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
