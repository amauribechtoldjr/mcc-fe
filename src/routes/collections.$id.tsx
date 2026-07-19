import { createFileRoute, Outlet } from "@tanstack/react-router";

/**
 * Layout route only. The view lives in `collections.$id.index.tsx` so that
 * `/collections/$id/edit` renders on its own instead of nesting inside it.
 */
export const Route = createFileRoute("/collections/$id")({
  component: Outlet,
});
