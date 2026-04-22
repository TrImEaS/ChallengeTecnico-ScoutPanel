import type { LucideIcon } from "lucide-react";

export interface Team {
  id: number;
  name: string;
  country: string;
  logoUrl: string | null;
}

export interface Season {
  id: number;
  name: string;
}

export interface PlayerCareer {
  id: number;
  playerId: number;
  teamId: number;
  startDate: string;
  endDate: string | null;
  team?: Team;
}

export interface PlayerStats {
  id: number;
  playerId: number;
  seasonId: number;
  competition: string | null;
  matchesPlayed: number;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
  minutesPlayed: number;
  shotsOnTarget: number | null;
  goalConversion: number | null;
  offensiveDuelsWon: number | null;
  aerialDuelsWon: number | null;
  season?: Season;
}

export interface Player {
  id: number;
  name: string;
  birthDate: string;
  nationality: string;
  secondNationality: string | null;
  residence: string | null;
  communityPassport: boolean;
  position: string;
  positionShort: string | null;
  skillfulFoot: string | null;
  height: number | null;
  weight: number | null;
  marketValue: number | null;
  intermediary: string | null;
  contractFrom: string | null;
  contractTo: string | null;
  photoUrl: string | null;
  teamId: number;
  team?: Team;
  stats?: PlayerStats[];
  career?: PlayerCareer[];
}

export interface SearchResponse {
  data: Player[];
  meta: {
    total: number;
    page: number;
    totalPages: number;
  };
  positions: {
    position: string;
    positionShort: string | null;
  }[];
}

export interface NavItem {
  icon: LucideIcon;
  to: string;
  label: string;
}