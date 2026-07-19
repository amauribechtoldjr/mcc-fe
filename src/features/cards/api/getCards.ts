import { api } from "@config/api.ts";

import type { PaginatedResponse } from "@app-types/axios.types.ts";
import type { Card } from "@features/cards/types/cards.types";

export const getCards = async () => {
  const { data } = await api.get<PaginatedResponse<Card>>(`/cards`);

  return data;
};
