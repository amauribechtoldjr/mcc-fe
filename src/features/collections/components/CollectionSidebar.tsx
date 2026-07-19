import { Icon } from "@components/Icon";
import { Surface } from "@components/Surface";
import { Typography } from "@components/Typography";
import type { CollectionCardEntry } from "@features/collections/types/collections.types";

type CollectionSidebarProps = {
  entries: CollectionCardEntry[];
};

export const CollectionSidebar = ({ entries }: CollectionSidebarProps) => {
  return (
    <Surface as="aside" color="red" padding="lg" radius="lg" className="h-full">
      {entries.length === 0 ? (
        <Typography colors="white" size="sm">
          Nenhuma carta nesta coleção ainda.
        </Typography>
      ) : (
        <ul className="flex flex-col gap-3">
          {entries.map((entry) => (
            <li key={entry.id} className="flex items-center gap-3">
              <Typography
                colors="orange"
                size="sm"
                weight="bold"
                className="w-7 shrink-0"
              >
                {entry.quantity}x
              </Typography>
              <span className="text-morange">
                <Icon icon="card" size="sm" />
              </span>
              <Typography
                colors="white"
                size="sm"
                weight={entry.highlighted ? "bold" : "normal"}
                className="truncate"
              >
                {entry.name}
              </Typography>
            </li>
          ))}
        </ul>
      )}
    </Surface>
  );
};
