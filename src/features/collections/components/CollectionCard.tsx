import { Surface } from "@components/Surface";
import { Typography } from "@components/Typography";
import type { CollectionSummary } from "@features/collections/types/collections.types";

type CollectionCardProps = {
  collection: CollectionSummary;
};

/**
 * Presentational: it never links anywhere. The Home wraps it in a link to the
 * public view, the Collections page wraps it in a link to the editor.
 */
export const CollectionCard = ({ collection }: CollectionCardProps) => {
  return (
    <Surface
      color="red"
      padding="md"
      radius="lg"
      shadow="sm"
      className="h-full transition hover:-translate-y-1 hover:ring-2 hover:ring-morange"
    >
      <img
        src={collection.imageUrl}
        alt={collection.name}
        className="aspect-5/6 w-full rounded-md object-cover"
      />
      <div className="mt-4 flex flex-col gap-1">
        <Typography as="p" colors="white" size="sm">
          {collection.owner}
        </Typography>
        <Typography as="p" colors="orange" size="sm">
          {collection.cardCount} cartas
        </Typography>
      </div>
    </Surface>
  );
};
