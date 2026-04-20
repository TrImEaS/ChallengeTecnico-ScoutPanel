import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

async function main () {
  const teamsData = [
    { id: 1, name: 'Godoy Cruz', country: 'Argentina' },
    { id: 2, name: 'Defensa y Justicia', country: 'Argentina' },
    { id: 3, name: 'SE Palmeiras', country: 'Brazil' },
    { id: 4, name: 'CA Boca Juniors', country: 'Argentina', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Boca_Juniors_logo18.svg/120px-Boca_Juniors_logo18.svg.png' },
    { id: 5, name: 'River Plate', country: 'Argentina', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Escudo_del_C_A_River_Plate.svg/120px-Escudo_del_C_A_River_Plate.svg.png' },
    { id: 6, name: 'Unión de Santa Fe', country: 'Argentina' },
    { id: 7, name: 'Junior de Barranquilla', country: 'Colombia' },
  ]

  for (const t of teamsData) {
    await prisma.team.upsert({
      where: { id: t.id },
      update: t,
      create: t,
    })
  }

  const seasonsData = [
    { id: 1, name: '2026' },
    { id: 2, name: 'Total Career' },
  ]

  for (const s of seasonsData) {
    await prisma.season.upsert({
      where: { id: s.id },
      update: s,
      create: s,
    })
  }

  const playersData = [
    {
      id: 1,
      name: 'Miguel Ángel Merentiel Serrano',
      birthDate: new Date('1996-02-24'),
      nationality: 'Uruguay',
      residence: 'Argentina',
      communityPassport: false,
      position: 'Second striker',
      positionShort: 'SS',
      skillfulFoot: 'Right',
      height: 1.76,
      weight: 70,
      marketValue: 6.8,
      intermediary: 'Agent Pay',
      contractFrom: new Date('2024-01-01'),
      contractTo: new Date('2027-12-31'),
      teamId: 4,
      photoUrl: 'https://tmssl.akamaized.net/images/portrait/header/441494-1685040683.jpg'
    },
    {
      id: 2,
      name: 'Miguel Borja',
      birthDate: new Date('1993-01-26'),
      nationality: 'Colombia',
      residence: 'Argentina',
      communityPassport: false,
      position: 'Centre-Forward',
      positionShort: 'CF',
      skillfulFoot: 'Right',
      height: 1.83,
      weight: 86,
      marketValue: 4.5,
      intermediary: 'Wasserman',
      contractFrom: new Date('2022-07-12'),
      contractTo: new Date('2025-12-31'),
      teamId: 5,
      photoUrl: 'https://tmssl.akamaized.net/images/portrait/header/211394-1673391741.jpg'
    },
    {
      id: 3,
      name: 'Kevin Zenón',
      birthDate: new Date('2001-07-30'),
      nationality: 'Argentina',
      residence: 'Argentina',
      communityPassport: true,
      position: 'Left Midfielder',
      positionShort: 'LM',
      skillfulFoot: 'Left',
      height: 1.75,
      weight: 71,
      marketValue: 8.0,
      intermediary: 'Score Futbol',
      contractFrom: new Date('2024-01-23'),
      contractTo: new Date('2028-12-31'),
      teamId: 4,
      photoUrl: 'https://tmssl.akamaized.net/images/portrait/header/829562-1678191953.png'
    },
    {
      id: 4,
      name: 'Claudio Echeverri',
      birthDate: new Date('2006-01-02'),
      nationality: 'Argentina',
      residence: 'Argentina',
      communityPassport: false,
      position: 'Attacking Midfield',
      positionShort: 'AM',
      skillfulFoot: 'Right',
      height: 1.71,
      weight: 65,
      marketValue: 18.0,
      intermediary: 'Dodici',
      contractFrom: new Date('2024-01-01'),
      contractTo: new Date('2024-12-31'),
      teamId: 5,
      photoUrl: 'https://tmssl.akamaized.net/images/portrait/header/1105995-1707920150.png'
    },
    {
      id: 5,
      name: 'Luis Advíncula',
      birthDate: new Date('1990-03-02'),
      nationality: 'Peru',
      residence: 'Argentina',
      communityPassport: true,
      position: 'Right-Back',
      positionShort: 'RB',
      skillfulFoot: 'Right',
      height: 1.78,
      weight: 78,
      marketValue: 1.2,
      intermediary: 'GBG',
      contractFrom: new Date('2021-07-06'),
      contractTo: new Date('2026-12-31'),
      teamId: 4,
      photoUrl: 'https://tmssl.akamaized.net/images/portrait/header/144415-1685040445.jpg'
    }
  ]

  for (const p of playersData) {
    await prisma.player.upsert({
      where: { id: p.id },
      update: p,
      create: p,
    })
  }

  const careersData = [
    { id: 1, playerId: 1, teamId: 1, startDate: new Date('2021-01-01'), endDate: new Date('2022-01-01') },
    { id: 2, playerId: 1, teamId: 2, startDate: new Date('2022-01-02'), endDate: new Date('2022-06-30') },
    { id: 3, playerId: 1, teamId: 3, startDate: new Date('2022-07-01'), endDate: new Date('2023-01-31') },
    { id: 4, playerId: 1, teamId: 4, startDate: new Date('2023-02-01'), endDate: null },
    { id: 5, playerId: 2, teamId: 7, startDate: new Date('2020-01-01'), endDate: new Date('2022-07-11') },
    { id: 6, playerId: 2, teamId: 5, startDate: new Date('2022-07-12'), endDate: null },
    { id: 7, playerId: 3, teamId: 6, startDate: new Date('2020-11-01'), endDate: new Date('2024-01-22') },
    { id: 8, playerId: 3, teamId: 4, startDate: new Date('2024-01-23'), endDate: null },
    { id: 9, playerId: 4, teamId: 5, startDate: new Date('2023-01-01'), endDate: null },
    { id: 10, playerId: 5, teamId: 4, startDate: new Date('2021-07-06'), endDate: null },
  ]

  for (const c of careersData) {
    await prisma.playerCareer.upsert({
      where: { id: c.id },
      update: c,
      create: c,
    })
  }

  const statsData = [
    { id: 1, playerId: 1, seasonId: 1, competition: 'CONMEBOL World Cup Qual.', matchesPlayed: 1, minutesPlayed: 44, goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
    { id: 2, playerId: 1, seasonId: 1, competition: 'Liga Profesional de Fútbol', matchesPlayed: 10, minutesPlayed: 754, goals: 4, assists: 2, yellowCards: 2, redCards: 0, shotsOnTarget: 43, goalConversion: 19, offensiveDuelsWon: 29, aerialDuelsWon: 30 },
    { id: 3, playerId: 1, seasonId: 2, competition: 'Total Career (+44 competitions)', matchesPlayed: 346, minutesPlayed: 20460, goals: 106, assists: 27, yellowCards: 42, redCards: 1 },
    { id: 4, playerId: 2, seasonId: 1, competition: 'Liga Profesional de Fútbol', matchesPlayed: 14, minutesPlayed: 1150, goals: 13, assists: 1, yellowCards: 3, redCards: 0, shotsOnTarget: 51, goalConversion: 25, offensiveDuelsWon: 32, aerialDuelsWon: 45 },
    { id: 5, playerId: 2, seasonId: 2, competition: 'Total Career', matchesPlayed: 402, minutesPlayed: 26000, goals: 155, assists: 31, yellowCards: 50, redCards: 4 },
    { id: 6, playerId: 3, seasonId: 1, competition: 'Liga Profesional de Fútbol', matchesPlayed: 15, minutesPlayed: 1210, goals: 4, assists: 6, yellowCards: 1, redCards: 0, shotsOnTarget: 33, goalConversion: 10, offensiveDuelsWon: 55, aerialDuelsWon: 12 },
    { id: 7, playerId: 3, seasonId: 2, competition: 'Total Career', matchesPlayed: 110, minutesPlayed: 7600, goals: 10, assists: 15, yellowCards: 12, redCards: 0 },
    { id: 8, playerId: 4, seasonId: 1, competition: 'Liga Profesional de Fútbol', matchesPlayed: 8, minutesPlayed: 450, goals: 2, assists: 3, yellowCards: 0, redCards: 0, shotsOnTarget: 38, goalConversion: 15, offensiveDuelsWon: 46, aerialDuelsWon: 5 },
    { id: 9, playerId: 4, seasonId: 2, competition: 'Total Career', matchesPlayed: 25, minutesPlayed: 1100, goals: 3, assists: 5, yellowCards: 2, redCards: 0 },
    { id: 10, playerId: 5, seasonId: 1, competition: 'Liga Profesional de Fútbol', matchesPlayed: 12, minutesPlayed: 980, goals: 0, assists: 2, yellowCards: 4, redCards: 0, shotsOnTarget: 15, goalConversion: 0, offensiveDuelsWon: 62, aerialDuelsWon: 48 },
    { id: 11, playerId: 5, seasonId: 2, competition: 'Total Career', matchesPlayed: 460, minutesPlayed: 38500, goals: 12, assists: 36, yellowCards: 80, redCards: 8 },
  ]

  for (const st of statsData) {
    await prisma.playerStats.upsert({
      where: { id: st.id },
      update: st,
      create: st,
    })
  }

  console.log('Seed done successfully with 5 players.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
