import CompareLayout from "~/components/compare/CompareLayout";
import { getPlayersToCompare } from "~/api/player";
import type { Route } from "./+types/Compare";
import type { Player } from "~/types";

export interface CompareLoaderData {
  preSelectedPlayers: Player[];
  isEmpty: boolean;
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Compare Players - ScoutPanel" },
    { name: "description", content: "Compare player stats side by side" },
  ];
}

export async function clientLoader({ request }: Route.ClientLoaderArgs): Promise<CompareLoaderData> {
  const url = new URL(request.url);
  const playerNames = url.searchParams.getAll("player");
  
  if (playerNames.length === 0) {
    return { preSelectedPlayers: [], isEmpty: true };
  }

  const preSelectedPlayers = await getPlayersToCompare(playerNames);

  return { preSelectedPlayers, isEmpty: false };
}

export default function Compare({ loaderData }: Route.ComponentProps) {
  return <CompareLayout data={loaderData} />;
}