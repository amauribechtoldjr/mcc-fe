import {
  getMTGCards,
  type GetMTGCardsProps,
} from "@features/mtg_cards/api/getCards";
import { cardsQueryKeys } from "@features/mtg_cards/constants/cards.constants";
import { useQuery } from "@tanstack/react-query";

type UseMTGCardsQueryProps = GetMTGCardsProps & {
  enabled?: boolean;
};

export const useMTGCardsQuery = ({
  enabled = true,
  ...params
}: UseMTGCardsQueryProps) => {
  return useQuery({
    queryKey: cardsQueryKeys.all({ ...params }),
    queryFn: () => getMTGCards({ ...params }),
    enabled,
  });
};
