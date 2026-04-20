import SearchLayout from "~/components/search/SearchLayout";
import type { Route } from "./+types/Search";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Search Players - ScoutPanel" },
    { name: "description", content: "Search for players in the database" },
  ];
}

export async function clientLoader({ }: Route.ClientLoaderArgs) {
  const response = await fetch(`http://localhost:3000/player`);
  
  if (!response.ok) throw new Error("Error fetching players");
  
  const players = await response.json();
  return players;
}

export default function Search({ loaderData }: Route.ComponentProps) {
  return (
    <SearchLayout data={loaderData} />
  )
}
