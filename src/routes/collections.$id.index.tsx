import { CollectionViewPage } from "@features/collections/pages/CollectionViewPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/collections/$id/")({
  component: CollectionViewPage,
});
