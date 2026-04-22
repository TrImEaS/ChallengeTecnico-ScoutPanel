import type { Player, SearchResponse } from "~/types";

const API_URL = import.meta.env.MODE === 'production' 
  ? import.meta.env.VITE_API_URL_PROD 
  : 'http://localhost:3000';

export const getPlayers = async (queryParams: URLSearchParams): Promise<SearchResponse> => {
  const response = await fetch(`${API_URL}/player?${queryParams.toString()}`);
  if (!response.ok) throw new Error("Search failed");
  return response.json() as Promise<SearchResponse>;
};

export const getPlayerById = async (id: string): Promise<Player> => {
  const response = await fetch(`${API_URL}/player/${id}`);
  if (!response.ok) throw new Error("Failed to load player");
  return response.json() as Promise<Player>;
};

export const getPlayersToCompare = async (names: string[]): Promise<Player[]> => {
  if (!names.length) return [];
  const queryParam = names.map(n => encodeURIComponent(n)).join(",");
  const response = await fetch(`${API_URL}/player/compare?names=${queryParam}`);
  if (!response.ok) throw new Error("Failed to fetch players");
  return response.json() as Promise<Player[]>;
};