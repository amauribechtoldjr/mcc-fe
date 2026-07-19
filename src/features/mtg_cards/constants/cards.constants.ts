import type { getMTGCards } from "@features/mtg_cards/api/getCards";

export const cardsQueryKeys = {
  all(params: Parameters<typeof getMTGCards>[0]) {
    return ["cards", { params }];
  },
};
