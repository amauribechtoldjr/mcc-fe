import { getCollections } from "@features/collections/api/getCollections.ts";
import { collectionsQueryKeys } from "@features/collections/constants/collections.constants.ts";
import { useQuery } from "@tanstack/react-query";

type UseCollectionsQueryProps = Parameters<typeof getCollections>[0];

export const useCollectionsQuery = ({
  ...params
}: UseCollectionsQueryProps) => {
  return useQuery({
    queryKey: collectionsQueryKeys.all(),
    queryFn: () => getCollections({ ...params }),
    enabled: !!params.userId,
  });
};
