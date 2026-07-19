import { api } from "@config/api.ts";

import type {
  PaginatedParams,
  PaginatedResponse,
} from "@app-types/axios.types.ts";
import type { Card } from "@features/mtg_cards/types/cards.types";

export type GetMTGCardsProps = PaginatedParams & {
  search: string;
};

export const getMTGCards = async ({ ...params }: GetMTGCardsProps) => {
  const { data } = await api.get<PaginatedResponse<Card>>(`/mtg_cards`, {
    params,
  });

  return data;
};
