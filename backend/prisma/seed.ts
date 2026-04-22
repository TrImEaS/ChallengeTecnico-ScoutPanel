import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

async function main () {
  // ─── TEAMS ────────────────────────────────────────────────────────────────
  const teamsData = [
    { id: 1, name: 'CA Independiente', country: 'Argentina', logoUrl: 'https://www.clipartmax.com/png/middle/116-1165814_ca-independiente-de-avellaneda-hd-logo-escudo-do-independiente-da-argentina.png' },
    { id: 2, name: 'Independiente Rivadavia', country: 'Argentina', logoUrl: 'https://w7.pngwing.com/pngs/84/599/png-transparent-logo-independiente-rivadavia-football-trademark-brand-football-score-purple-text-trademark.png' },
    { id: 3, name: 'SE Palmeiras', country: 'Brazil', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/500px-Palmeiras_logo.svg.png' },
    { id: 4, name: 'CA Boca Juniors', country: 'Argentina', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Boca_Juniors_logo18.svg/1920px-Boca_Juniors_logo18.svg.png' },
    { id: 5, name: 'River Plate', country: 'Argentina', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Logo_River_Plate.png' },
    { id: 6, name: 'Unión de Santa Fe', country: 'Argentina', logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS11md-P1GPvclvhJxwIu4gN1ZON-ilzJ5jRw&s' },
    { id: 7, name: 'Junior de Barranquilla', country: 'Colombia', logoUrl: 'https://www.vhv.rs/dpng/d/207-2073648_junior-de-barranquilla-escudo-png-transparent-png.png' },
    { id: 8, name: 'Vélez Sarsfield', country: 'Argentina', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Escudo_V%C3%A9lez_Sarsfield.png' },
    { id: 9, name: 'Estudiantes de La Plata', country: 'Argentina', logoUrl: 'https://www.clipartmax.com/png/middle/156-1560283_estudiantes-estudiantes-de-la-plata-logo.png' },
    { id: 10, name: 'Argentinos Juniors', country: 'Argentina', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Escudo_de_la_Asociaci%C3%B3n_Atl%C3%A9tica_Argentinos_Juniors.svg/960px-Escudo_de_la_Asociaci%C3%B3n_Atl%C3%A9tica_Argentinos_Juniors.svg.png' },
    { id: 11, name: 'Godoy Cruz', country: 'Argentina', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Escgcat.png' },
    { id: 12, name: 'Defensa y Justicia', country: 'Argentina', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Escudo_defensa_y_justicia.png' },
    { id: 13, name: 'Talleres de Córdoba', country: 'Argentina', logoUrl: 'https://www.clubtalleres.com.ar/wp-content/uploads/2025/01/escudo-5.png' },
    { id: 14, name: 'Patronato', country: 'Argentina', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/C.A._Patronato_ESCUDO_OFICIAL.svg/1280px-C.A._Patronato_ESCUDO_OFICIAL.svg.png' },
    { id: 15, name: 'Racing Club', country: 'Argentina', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Escudo_de_Racing_Club_%282014%29.svg/1920px-Escudo_de_Racing_Club_%282014%29.svg.png' },
  ]

  for (const t of teamsData) {
    await prisma.team.upsert({ where: { id: t.id }, update: t, create: t })
  }

  // ─── SEASONS ──────────────────────────────────────────────────────────────
  const seasonsData = [
    { id: 1, name: '2026' },
    { id: 2, name: 'Total Career' },
  ]

  for (const s of seasonsData) {
    await prisma.season.upsert({ where: { id: s.id }, update: s, create: s })
  }

  // ─── PLAYERS ──────────────────────────────────────────────────────────────
  // All market values in millions of EUR (Transfermarkt, early 2026)
  const playersData = [
    // 1. Gabriel Ávalos — top scorer Liga Profesional Apertura 2026
    {
      id: 1,
      name: 'Gabriel Ávalos Stumpfs',
      birthDate: new Date('1990-10-12'),
      nationality: 'Paraguay',
      residence: 'Argentina',
      communityPassport: false,
      position: 'Centre-Forward',
      positionShort: 'CF',
      skillfulFoot: 'Right',
      height: 1.90,
      weight: 84,
      marketValue: 1.5,
      intermediary: 'DE 9 Fútbol',
      contractFrom: new Date('2024-01-01'),
      contractTo: new Date('2026-12-31'),
      teamId: 1,
      photoUrl: 'https://img.a.transfermarkt.technology/portrait/header/358418-1720465400.png?lm=1',
    },
    // 2. Sebastián Villa — winger Independiente Rivadavia
    {
      id: 2,
      name: 'Sebastián Villa Cano',
      birthDate: new Date('1996-05-19'),
      nationality: 'Colombia',
      residence: 'Argentina',
      communityPassport: false,
      position: 'Left Winger',
      positionShort: 'LW',
      skillfulFoot: 'Right',
      height: 1.78,
      weight: 65,
      marketValue: 1.8,
      intermediary: 'Tolima SA',
      contractFrom: new Date('2024-07-17'),
      contractTo: new Date('2026-12-31'),
      teamId: 2,
      photoUrl: 'https://img.a.transfermarkt.technology/portrait/header/493000-1724873773.JPEG?lm=1',
    },
    // 3. Miguel Ángel Merentiel — Second striker Boca Juniors
    {
      id: 3,
      name: 'Miguel Ángel Merentiel Serrano',
      birthDate: new Date('1996-02-24'),
      nationality: 'Uruguay',
      residence: 'Argentina',
      communityPassport: false,
      position: 'Second Striker',
      positionShort: 'SS',
      skillfulFoot: 'Right',
      height: 1.76,
      weight: 70,
      marketValue: 6.8,
      intermediary: 'Agent Pay',
      contractFrom: new Date('2024-01-01'),
      contractTo: new Date('2027-12-31'),
      teamId: 4,
      photoUrl: 'https://img.a.transfermarkt.technology/portrait/header/481367-1739899560.jpg?lm=1',
    },
    // 4. Facundo Colidio — forward Vélez Sarsfield (6 goals in 2025 season)
    {
      id: 4,
      name: 'Facundo Colidio',
      birthDate: new Date('2000-01-09'),
      nationality: 'Argentina',
      residence: 'Argentina',
      communityPassport: true,
      position: 'Centre-Forward',
      positionShort: 'CF',
      skillfulFoot: 'Left',
      height: 1.83,
      weight: 76,
      marketValue: 5.0,
      intermediary: 'Inter de Milán (cedido)',
      contractFrom: new Date('2024-07-01'),
      contractTo: new Date('2026-12-31'),
      teamId: 8,
      photoUrl: 'https://img.a.transfermarkt.technology/portrait/header/491705-1693315193.png?lm=1',
    },
    // 5. Kevin Zenón — left midfielder Boca Juniors
    {
      id: 5,
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
      photoUrl: 'https://img.a.transfermarkt.technology/portrait/header/829966-1739898834.jpg?lm=1',
    },
    // 6. Claudio Echeverri — attacking mid River Plate (on loan from Man City)
    {
      id: 6,
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
      contractFrom: new Date('2025-07-01'),
      contractTo: new Date('2026-06-30'),
      teamId: 5,
      photoUrl: 'https://img.a.transfermarkt.technology/portrait/header/994536-1758703571.jpg?lm=1',
    },
    // 7. Luis Advíncula — right-back Boca Juniors
    {
      id: 7,
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
      photoUrl: 'https://img.a.transfermarkt.technology/portrait/header/103890-1739897008.jpg?lm=1',
    },
    // 8. Gustavo del Prete — forward Estudiantes LP (con buen rendimiento 2026)
    {
      id: 8,
      name: 'Gustavo del Prete',
      birthDate: new Date('1994-08-14'),
      nationality: 'Argentina',
      residence: 'Argentina',
      communityPassport: true,
      position: 'Centre-Forward',
      positionShort: 'CF',
      skillfulFoot: 'Right',
      height: 1.79,
      weight: 75,
      marketValue: 2.0,
      intermediary: 'Independiente',
      contractFrom: new Date('2024-01-01'),
      contractTo: new Date('2026-12-31'),
      teamId: 9,
      photoUrl: 'https://img.a.transfermarkt.technology/portrait/header/671951-1691698097.jpg?lm=1',
    },
    // 9. Gabriel Hauche — winger Argentinos Juniors
    {
      id: 9,
      name: 'Gabriel Hauche',
      birthDate: new Date('1986-03-12'),
      nationality: 'Argentina',
      residence: 'Argentina',
      communityPassport: true,
      position: 'Right Winger',
      positionShort: 'RW',
      skillfulFoot: 'Right',
      height: 1.73,
      weight: 67,
      marketValue: 0.4,
      intermediary: 'Sin agente',
      contractFrom: new Date('2023-07-01'),
      contractTo: new Date('2026-06-30'),
      teamId: 10,
      photoUrl: 'https://img.a.transfermarkt.technology/portrait/header/54845-1694004068.JPG?lm=1',
    },
    // 10. Tadeo Allende — winger Racing Club (destacado Apertura 2026)
    {
      id: 10,
      name: 'Tadeo Allende',
      birthDate: new Date('2001-05-25'),
      nationality: 'Argentina',
      residence: 'Argentina',
      communityPassport: true,
      position: 'Left Winger',
      positionShort: 'LW',
      skillfulFoot: 'Left',
      height: 1.72,
      weight: 68,
      marketValue: 4.5,
      intermediary: 'ProServ',
      contractFrom: new Date('2023-01-01'),
      contractTo: new Date('2027-12-31'),
      teamId: 15,
      photoUrl: 'https://img.a.transfermarkt.technology/portrait/header/872184-1771694156.jpg?lm=1',
    },
    // 11. Lautaro Blanco — left-back Estudiantes LP (seleccionado argentino)
    {
      id: 11,
      name: 'Lautaro Blanco',
      birthDate: new Date('2001-05-14'),
      nationality: 'Argentina',
      residence: 'Argentina',
      communityPassport: true,
      position: 'Left-Back',
      positionShort: 'LB',
      skillfulFoot: 'Left',
      height: 1.76,
      weight: 70,
      marketValue: 10.0,
      intermediary: 'YMK Sports',
      contractFrom: new Date('2023-07-01'),
      contractTo: new Date('2028-12-31'),
      teamId: 9,
      photoUrl: 'https://tmssl.akamaized.net/images/portrait/header/958428-1704067200.jpg',
    },
    // 12. Matías Esquivel — right winger Talleres Córdoba
    {
      id: 12,
      name: 'Matías Esquivel',
      birthDate: new Date('1998-07-22'),
      nationality: 'Argentina',
      residence: 'Argentina',
      communityPassport: true,
      position: 'Right Winger',
      positionShort: 'RW',
      skillfulFoot: 'Right',
      height: 1.70,
      weight: 66,
      marketValue: 2.5,
      intermediary: 'TISA',
      contractFrom: new Date('2023-01-01'),
      contractTo: new Date('2026-12-31'),
      teamId: 13,
      photoUrl: 'https://img.a.transfermarkt.technology/portrait/header/831161-1739896785.jpg?lm=1',
    },
  ]

  for (const p of playersData) {
    await prisma.player.upsert({ where: { id: p.id }, update: p, create: p })
  }

  // ─── CAREERS ──────────────────────────────────────────────────────────────
  const careersData = [
    // Gabriel Ávalos
    { id: 1, playerId: 1, teamId: 14, startDate: new Date('2018-07-01'), endDate: new Date('2019-06-30') }, // Patronato
    { id: 2, playerId: 1, teamId: 11, startDate: new Date('2018-01-01'), endDate: new Date('2018-06-30') }, // Godoy Cruz (cedido)
    { id: 3, playerId: 1, teamId: 10, startDate: new Date('2020-07-01'), endDate: new Date('2023-12-31') }, // Argentinos Juniors
    { id: 4, playerId: 1, teamId: 1, startDate: new Date('2024-01-01'), endDate: null },                   // Independiente (actual)
    // Sebastián Villa
    { id: 5, playerId: 2, teamId: 4, startDate: new Date('2018-07-01'), endDate: new Date('2024-07-16') }, // Boca Juniors
    { id: 6, playerId: 2, teamId: 2, startDate: new Date('2024-07-17'), endDate: null },                   // Ind. Rivadavia (actual)
    // Merentiel
    { id: 7, playerId: 3, teamId: 11, startDate: new Date('2021-01-01'), endDate: new Date('2022-01-01') }, // Godoy Cruz
    { id: 8, playerId: 3, teamId: 12, startDate: new Date('2022-01-02'), endDate: new Date('2022-06-30') }, // Defensa y Justicia
    { id: 9, playerId: 3, teamId: 3, startDate: new Date('2022-07-01'), endDate: new Date('2023-01-31') }, // Palmeiras
    { id: 10, playerId: 3, teamId: 4, startDate: new Date('2023-02-01'), endDate: null },                   // Boca (actual)
    // Colidio
    { id: 11, playerId: 4, teamId: 8, startDate: new Date('2024-07-01'), endDate: null },                   // Vélez
    // Kevin Zenón
    { id: 12, playerId: 5, teamId: 6, startDate: new Date('2020-11-01'), endDate: new Date('2024-01-22') }, // Unión SF
    { id: 13, playerId: 5, teamId: 4, startDate: new Date('2024-01-23'), endDate: null },                   // Boca
    // Echeverri
    { id: 14, playerId: 6, teamId: 5, startDate: new Date('2025-07-01'), endDate: null },                   // River (cedido Man City)
    // Advíncula
    { id: 15, playerId: 7, teamId: 4, startDate: new Date('2021-07-06'), endDate: null },                   // Boca
    // Del Prete
    { id: 16, playerId: 8, teamId: 9, startDate: new Date('2024-01-01'), endDate: null },                   // Estudiantes
    // Hauche
    { id: 17, playerId: 9, teamId: 10, startDate: new Date('2023-07-01'), endDate: null },                   // Argentinos
    // Allende
    { id: 18, playerId: 10, teamId: 15, startDate: new Date('2023-01-01'), endDate: null },                   // Racing
    // Lautaro Blanco
    { id: 19, playerId: 11, teamId: 9, startDate: new Date('2023-07-01'), endDate: null },                   // Estudiantes
    // Esquivel
    { id: 20, playerId: 12, teamId: 13, startDate: new Date('2023-01-01'), endDate: null },                   // Talleres
  ]

  for (const c of careersData) {
    await prisma.playerCareer.upsert({ where: { id: c.id }, update: c, create: c })
  }

  // ─── STATS ────────────────────────────────────────────────────────────────
  // Season 1 = 2026 (Apertura 2026, ~14-15 fechas jugadas al 20 abr 2026)
  // Season 2 = Total Career
  const statsData = [
    // ── Gabriel Ávalos (Independiente) – goleador del Apertura 2026 con 8 goles
    { id: 1, playerId: 1, seasonId: 1, competition: 'Liga Profesional – Apertura 2026', matchesPlayed: 13, minutesPlayed: 1170, goals: 8, assists: 4, yellowCards: 2, redCards: 0, shotsOnTarget: 38, goalConversion: 21, offensiveDuelsWon: 44, aerialDuelsWon: 52 },
    { id: 2, playerId: 1, seasonId: 2, competition: 'Total Career (+12 clubes)', matchesPlayed: 280, minutesPlayed: 19600, goals: 105, assists: 28, yellowCards: 48, redCards: 3 },

    // ── Sebastián Villa (Independiente Rivadavia) – 4 goles en 2025/26
    { id: 3, playerId: 2, seasonId: 1, competition: 'Liga Profesional – Apertura 2026', matchesPlayed: 9, minutesPlayed: 720, goals: 4, assists: 2, yellowCards: 1, redCards: 0, shotsOnTarget: 22, goalConversion: 18, offensiveDuelsWon: 48, aerialDuelsWon: 8 },
    { id: 4, playerId: 2, seasonId: 2, competition: 'Total Career', matchesPlayed: 141, minutesPlayed: 9800, goals: 23, assists: 29, yellowCards: 43, redCards: 1 },

    // ── Merentiel (Boca Juniors) – rendimiento sólido Apertura 2026
    { id: 5, playerId: 3, seasonId: 1, competition: 'Liga Profesional – Apertura 2026', matchesPlayed: 11, minutesPlayed: 820, goals: 5, assists: 3, yellowCards: 2, redCards: 0, shotsOnTarget: 30, goalConversion: 17, offensiveDuelsWon: 36, aerialDuelsWon: 22 },
    { id: 6, playerId: 3, seasonId: 2, competition: 'Total Career (+44 competiciones)', matchesPlayed: 360, minutesPlayed: 21500, goals: 116, assists: 32, yellowCards: 46, redCards: 1 },

    // ── Facundo Colidio (Vélez) – 4 goles Apertura 2026
    { id: 7, playerId: 4, seasonId: 1, competition: 'Liga Profesional – Apertura 2026', matchesPlayed: 12, minutesPlayed: 940, goals: 4, assists: 3, yellowCards: 1, redCards: 0, shotsOnTarget: 28, goalConversion: 14, offensiveDuelsWon: 42, aerialDuelsWon: 10 },
    { id: 8, playerId: 4, seasonId: 2, competition: 'Total Career', matchesPlayed: 231, minutesPlayed: 14500, goals: 43, assists: 34, yellowCards: 32, redCards: 0 },

    // ── Kevin Zenón (Boca Juniors) – creativo, 5 asistencias
    { id: 9, playerId: 5, seasonId: 1, competition: 'Liga Profesional – Apertura 2026', matchesPlayed: 13, minutesPlayed: 1050, goals: 3, assists: 5, yellowCards: 1, redCards: 0, shotsOnTarget: 22, goalConversion: 14, offensiveDuelsWon: 58, aerialDuelsWon: 9 },
    { id: 10, playerId: 5, seasonId: 2, competition: 'Total Career', matchesPlayed: 124, minutesPlayed: 8600, goals: 14, assists: 20, yellowCards: 14, redCards: 0 },

    // ── Claudio Echeverri (River Plate, cedido Man City) – joya de 19 años
    { id: 11, playerId: 6, seasonId: 1, competition: 'Liga Profesional – Apertura 2026', matchesPlayed: 10, minutesPlayed: 680, goals: 3, assists: 4, yellowCards: 0, redCards: 0, shotsOnTarget: 26, goalConversion: 12, offensiveDuelsWon: 50, aerialDuelsWon: 6 },
    { id: 12, playerId: 6, seasonId: 2, competition: 'Total Career', matchesPlayed: 45, minutesPlayed: 2800, goals: 7, assists: 9, yellowCards: 4, redCards: 0 },

    // ── Luis Advíncula (Boca Juniors) – lateral derecho experimentado
    { id: 13, playerId: 7, seasonId: 1, competition: 'Liga Profesional – Apertura 2026', matchesPlayed: 11, minutesPlayed: 940, goals: 0, assists: 3, yellowCards: 3, redCards: 0, shotsOnTarget: 8, goalConversion: 0, offensiveDuelsWon: 66, aerialDuelsWon: 30 },
    { id: 14, playerId: 7, seasonId: 2, competition: 'Total Career', matchesPlayed: 490, minutesPlayed: 40200, goals: 14, assists: 40, yellowCards: 88, redCards: 9 },

    // ── Gustavo del Prete (Estudiantes LP) – delantero campeón 2025
    { id: 15, playerId: 8, seasonId: 1, competition: 'Liga Profesional – Apertura 2026', matchesPlayed: 12, minutesPlayed: 870, goals: 4, assists: 2, yellowCards: 2, redCards: 0, shotsOnTarget: 24, goalConversion: 17, offensiveDuelsWon: 38, aerialDuelsWon: 28 },
    { id: 16, playerId: 8, seasonId: 2, competition: 'Total Career', matchesPlayed: 180, minutesPlayed: 11200, goals: 52, assists: 18, yellowCards: 30, redCards: 2 },

    // ── Gabriel Hauche (Argentinos Juniors) – veterano de buen aporte
    { id: 17, playerId: 9, seasonId: 1, competition: 'Liga Profesional – Apertura 2026', matchesPlayed: 10, minutesPlayed: 650, goals: 2, assists: 4, yellowCards: 2, redCards: 0, shotsOnTarget: 18, goalConversion: 11, offensiveDuelsWon: 45, aerialDuelsWon: 7 },
    { id: 18, playerId: 9, seasonId: 2, competition: 'Total Career', matchesPlayed: 380, minutesPlayed: 24600, goals: 68, assists: 72, yellowCards: 65, redCards: 4 },

    // ── Tadeo Allende (Racing Club) – uno de los más desequilibrantes
    { id: 19, playerId: 10, seasonId: 1, competition: 'Liga Profesional – Apertura 2026', matchesPlayed: 13, minutesPlayed: 1010, goals: 4, assists: 4, yellowCards: 1, redCards: 0, shotsOnTarget: 32, goalConversion: 13, offensiveDuelsWon: 70, aerialDuelsWon: 12 },
    { id: 20, playerId: 10, seasonId: 2, competition: 'Total Career', matchesPlayed: 95, minutesPlayed: 6400, goals: 18, assists: 22, yellowCards: 14, redCards: 0 },

    // ── Lautaro Blanco (Estudiantes LP) – lateral izquierdo convocado a la Selección
    { id: 21, playerId: 11, seasonId: 1, competition: 'Liga Profesional – Apertura 2026', matchesPlayed: 14, minutesPlayed: 1260, goals: 1, assists: 3, yellowCards: 2, redCards: 0, shotsOnTarget: 10, goalConversion: 10, offensiveDuelsWon: 62, aerialDuelsWon: 28 },
    { id: 22, playerId: 11, seasonId: 2, competition: 'Total Career', matchesPlayed: 120, minutesPlayed: 9800, goals: 4, assists: 14, yellowCards: 20, redCards: 0 },

    // ── Matías Esquivel (Talleres Córdoba) – desequilibrante extremo derecho
    { id: 23, playerId: 12, seasonId: 1, competition: 'Liga Profesional – Apertura 2026', matchesPlayed: 12, minutesPlayed: 880, goals: 3, assists: 5, yellowCards: 3, redCards: 0, shotsOnTarget: 20, goalConversion: 15, offensiveDuelsWon: 55, aerialDuelsWon: 5 },
    { id: 24, playerId: 12, seasonId: 2, competition: 'Total Career', matchesPlayed: 110, minutesPlayed: 7200, goals: 16, assists: 22, yellowCards: 28, redCards: 1 },
  ]

  for (const st of statsData) {
    await prisma.playerStats.upsert({ where: { id: st.id }, update: st, create: st })
  }

  console.log('✅ Seed done — 12 jugadores reales de la Liga Profesional Argentina 2026.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
