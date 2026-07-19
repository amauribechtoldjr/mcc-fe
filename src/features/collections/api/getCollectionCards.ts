import { api } from "@config/api.ts";

import type { PaginatedResponse } from "@app-types/axios.types.ts";
import type { CollectionCard } from "@features/collections/types/collections.types";

export type GetCollectionsCardsProps = {
  collectionId: string;
};

export const getCollectionsCards = async ({
  collectionId,
}: GetCollectionsCardsProps) => {
  const { data } = await api.get<PaginatedResponse<CollectionCard>>(
    `/collections/${collectionId}/cards`,
  );

  return data;
};
