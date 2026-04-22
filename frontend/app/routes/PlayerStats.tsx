import PlayerStatsLayout from "~/components/player-stats/PlayerStatsLayout";
import { getPlayerById } from "~/api/player";
import type { Route } from "./+types/PlayerStats";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Player Stats - ScoutPanel" },
    { name: "description", content: "Player Stats details" },
  ];
}

export async function clientLoader({ request }: Route.ClientLoaderArgs) {
  const url = new URL(request.url);
  const playerId = url.searchParams.get("playerId");

  if (!playerId) throw new Error("Player ID is required");

  return await getPlayerById(playerId);
}

export default function PlayerStats({ loaderData }: Route.ComponentProps) {
  return <PlayerStatsLayout data={loaderData} />;
}