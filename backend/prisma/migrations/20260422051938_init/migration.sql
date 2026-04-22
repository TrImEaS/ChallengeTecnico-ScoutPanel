-- CreateIndex
CREATE INDEX "Player_teamId_idx" ON "Player"("teamId");

-- CreateIndex
CREATE INDEX "Player_Career_playerId_idx" ON "Player_Career"("playerId");

-- CreateIndex
CREATE INDEX "Player_Career_teamId_idx" ON "Player_Career"("teamId");

-- CreateIndex
CREATE INDEX "Player_Stats_playerId_idx" ON "Player_Stats"("playerId");

-- CreateIndex
CREATE INDEX "Player_Stats_seasonId_idx" ON "Player_Stats"("seasonId");
