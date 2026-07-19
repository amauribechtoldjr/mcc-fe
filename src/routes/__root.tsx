import { NotFound } from "@features/misc/pages/NotFound";
import { RootLayout } from "@features/misc/components/RootLayout";
import { createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
});
