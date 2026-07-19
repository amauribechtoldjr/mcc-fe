import { getCollectionsCards } from "@features/collections/api/getCollectionCards";
import { collectionsQueryKeys } from "@features/collections/constants/collections.constants.ts";
import { useQuery } from "@tanstack/react-query";

type UseCollectionsCardsQueryProps = Parameters<typeof getCollectionsCards>[0];

export const useCollectionsCardsQuery = ({
  ...params
}: UseCollectionsCardsQueryProps) => {
  return useQuery({
    queryKey: collectionsQueryKeys.cards({ ...params }),
    queryFn: () => getCollectionsCards({ ...params }),
    enabled: !!params.collectionId,
  });
};
