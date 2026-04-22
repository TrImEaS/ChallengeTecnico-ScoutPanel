import { redirect } from "react-router";
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

export async function clientLoader({ request }: Route.ClientLoaderArgs): Promise<CompareLoaderData | Response> {
  const url = new URL(request.url);
  const playerNames = url.searchParams.getAll("player");
  
  if (playerNames.length === 0) {
    if (typeof window !== "undefined") {
      const storage = localStorage.getItem("compare-storage");
      if (storage) {
        try {
          const parsed = JSON.parse(storage);
          const players = parsed.state?.selectedPlayers;
          if (Array.isArray(players) && players.length > 0) {
            const params = new URLSearchParams();
            players.forEach((p: any) => params.append("player", p.name));
            return redirect(`/compare?${params.toString()}`);
          }
        } catch (e) {
          console.log('Error: ', e)
        }
      }
    }
    return { preSelectedPlayers: [], isEmpty: true };
  }

  const preSelectedPlayers = await getPlayersToCompare(playerNames);

  return { preSelectedPlayers, isEmpty: false };
}

export default function Compare({ loaderData }: Route.ComponentProps) {
  return <CompareLayout data={loaderData} />;
}