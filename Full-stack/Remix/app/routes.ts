import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("api/demo", "routes/api.demo.ts"),
] satisfies RouteConfig;
