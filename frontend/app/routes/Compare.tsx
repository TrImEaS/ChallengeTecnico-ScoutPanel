import CompareLayout from "~/components/compare/CompareLayout";
import type { Route } from "./+types/Compare";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Compare Players - ScoutPanel" },
    { name: "description", content: "Compare player stats side by side" },
  ];
}

export async function clientLoader({ request }: Route.ClientLoaderArgs) {
  const response = await fetch(`http://localhost:3000/player`);
  
  if (!response.ok) throw new Error("Error fetching players");
  
  const players = await response.json();
  return players;
}

export default function Compare({ loaderData }: Route.ComponentProps) {
  return (
    <CompareLayout data={loaderData} />
  )
}
