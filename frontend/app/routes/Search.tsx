import SearchLayout from "~/components/search/SearchLayout";
import { getPlayers } from "~/api/player";
import type { Route } from "./+types/Search";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Search Players - ScoutPanel" },
    { name: "description", content: "Search for players in the database" },
  ];
}

export async function clientLoader({ request }: Route.ClientLoaderArgs) {
  const url = new URL(request.url);
  const params = ["page", "name", "position", "nationality", "minAge", "maxAge"];
  
  const query = new URLSearchParams();
  params.forEach(param => {
    const value = url.searchParams.get(param);
    if (value) query.set(param, value);
  });
  query.set("includeTeam", "true");
  query.set("includeStats", "true");

  return await getPlayers(query);
}

export default function Search({ loaderData }: Route.ComponentProps) {
  return <SearchLayout loaderData={loaderData} />;
}