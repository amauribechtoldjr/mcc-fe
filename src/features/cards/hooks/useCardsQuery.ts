import { getCards } from "@features/cards/api/getCards";
import { cardsQueryKeys } from "@features/cards/constants/cards.constants";
import { useQuery } from "@tanstack/react-query";

export const useCardsQuery = () => {
  return useQuery({
    queryKey: cardsQueryKeys.all(),
    queryFn: getCards,
  });
};
