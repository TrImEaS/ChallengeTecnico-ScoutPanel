-- CreateTable
CREATE TABLE "Team" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "logoUrl" TEXT,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "nationality" TEXT NOT NULL,
    "secondNationality" TEXT,
    "residence" TEXT,
    "communityPassport" BOOLEAN NOT NULL DEFAULT false,
    "position" TEXT NOT NULL,
    "positionShort" TEXT,
    "skillfulFoot" TEXT,
    "height" DOUBLE PRECISION,
    "weight" INTEGER,
    "marketValue" DOUBLE PRECISION,
    "intermediary" TEXT,
    "contractFrom" TIMESTAMP(3),
    "contractTo" TIMESTAMP(3),
    "photoUrl" TEXT,
    "teamId" INTEGER NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player_Career" (
    "id" SERIAL NOT NULL,
    "playerId" INTEGER NOT NULL,
    "teamId" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),

    CONSTRAINT "Player_Career_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Season" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Season_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player_Stats" (
    "id" SERIAL NOT NULL,
    "playerId" INTEGER NOT NULL,
    "seasonId" INTEGER NOT NULL,
    "competition" TEXT,
    "matchesPlayed" INTEGER NOT NULL,
    "goals" INTEGER NOT NULL,
    "assists" INTEGER NOT NULL,
    "yellowCards" INTEGER NOT NULL,
    "redCards" INTEGER NOT NULL,
    "minutesPlayed" INTEGER NOT NULL,
    "shotsOnTarget" INTEGER,
    "goalConversion" INTEGER,
    "offensiveDuelsWon" INTEGER,
    "aerialDuelsWon" INTEGER,

    CONSTRAINT "Player_Stats_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player_Career" ADD CONSTRAINT "Player_Career_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player_Career" ADD CONSTRAINT "Player_Career_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player_Stats" ADD CONSTRAINT "Player_Stats_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player_Stats" ADD CONSTRAINT "Player_Stats_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "Season"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
