import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("components/layout/DashboardLayout.tsx", [
    index("routes/Home.tsx"),
    route("player-stats", "routes/PlayerStats.tsx"),
    route("search", "routes/Search.tsx"),
    route("compare", "routes/Compare.tsx"),
  ]),
] satisfies RouteConfig;
