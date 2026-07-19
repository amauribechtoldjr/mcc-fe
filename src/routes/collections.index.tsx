import { CollectionsPage } from "@features/collections/pages/CollectionsPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/collections/")({
  component: CollectionsPage,
});
