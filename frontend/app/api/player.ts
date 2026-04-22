import type { Player, SearchResponse } from "~/types";

const API_URL = import.meta.env.MODE === 'production' 
  ? import.meta.env.VITE_API_URL_PROD 
  : 'http://localhost:3000';

export const getPlayers = async (queryParams: URLSearchParams): Promise<SearchResponse> => {
  try {
    const response = await fetch(`${API_URL}/player?${queryParams.toString()}`);
    if (!response.ok) throw new Error("Search failed");
    const data = await response.json();
    return {
      data: Array.isArray(data?.data) ? data.data : [],
      meta: data?.meta || { total: 0, page: 1, totalPages: 1 },
      positions: Array.isArray(data?.positions) ? data.positions : []
    };
  } catch (err) {
    console.error("API Error (getPlayers):", err);
    return { data: [], meta: { total: 0, page: 1, totalPages: 1 }, positions: [] };
  }
};

export const getPlayerById = async (id: string): Promise<Player | null> => {
  try {
    const response = await fetch(`${API_URL}/player/${id}`);
    if (!response.ok) throw new Error("Player not found");
    const data = await response.json();
    return data || null;
  } catch (err) {
    console.error("API Error (getPlayerById):", err);
    return null;
  }
};

export const getPlayersToCompare = async (names: string[]): Promise<Player[]> => {
  if (!names.length) return [];
  try {
    const queryParam = names.map(n => encodeURIComponent(n)).join(",");
    const response = await fetch(`${API_URL}/player/compare?names=${queryParam}`);
    if (!response.ok) throw new Error("Failed to fetch players");
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error("API Error (getPlayersToCompare):", err);
    return [];
  }
};