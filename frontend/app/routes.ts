import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("components/layout/Layout.tsx", [
    index("routes/Home.tsx"),
    route("login", "routes/Login.tsx"),
    route("player-stats", "routes/PlayerStats.tsx"),
    route("search", "routes/Search.tsx"),
    route("compare", "routes/Compare.tsx"),
  ]),
] satisfies RouteConfig;
