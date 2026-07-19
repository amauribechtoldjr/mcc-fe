import { CollectionEditPage } from "@features/collections/pages/CollectionEditPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/collections/$id/edit")({
  component: CollectionEditPage,
});
