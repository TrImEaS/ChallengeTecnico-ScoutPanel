import PlayerStatsLayout from "~/components/player-stats/PlayerStatsLayout";
import type { Route } from "./+types/PlayerStats";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Player Stats - ScoutPanel" },
    { name: "description", content: "Player Stats - ScoutPanel" },
  ];
}

export async function clientLoader({ request }: Route.ClientLoaderArgs) {
  const url = new URL(request.url);
  const playerId = url.searchParams.get("playerId");

  const response = await fetch(`http://localhost:3000/player/${playerId}`);
  
  if (!response.ok) throw new Error("Error al cargar jugadores");
  
  const player = await response.json();
  return player ;
}


export default function PlayerStats({ loaderData }: Route.ComponentProps) {
  return (
    <PlayerStatsLayout data={loaderData} />
  )
}