import { Router, Route, RootRoute } from "@tanstack/react-router";
import InitialPage from "./pages/InitialPage";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import ProfilePage from "./pages/Profile";
import Root from "./App";

const rootRoute = new RootRoute({
  component: Root,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: InitialPage,
});

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/home",
  component: HomePage,
});

const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
});

const profileRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/profile",
  component: ProfilePage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  homeRoute,
  loginRoute,
  profileRoute,
]);

export const router = new Router({ routeTree });

export default router;
