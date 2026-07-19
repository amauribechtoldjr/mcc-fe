import { api } from "@config/api.ts";

import type { PaginatedResponse } from "@app-types/axios.types.ts";
import type { Collection } from "@features/collections/types/collections.types";

export type GetCollectionsProps = {
  userId: string;
};

export const getCollections = async ({ userId }: GetCollectionsProps) => {
  const { data } = await api.get<PaginatedResponse<Collection>>(
    `/collections/${userId}`,
  );

  return data;
};
