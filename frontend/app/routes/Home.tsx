import type { Route } from "./+types/Home";
import HomeLayout from "~/components/home/HomeLayout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home - ScoutPanel" },
    { name: "description", content: "Welcome to ScoutPanel" },
  ];
}

export default function Home() {
  return (
    <HomeLayout />
  )
}