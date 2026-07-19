import { queryClient } from "@config/reactQuery";
import { addCardToCollection } from "@features/collections/api/addCardToCollection";
import { collectionsQueryKeys } from "@features/collections/constants/collections.constants";
import { useMutation } from "@tanstack/react-query";

export const useCardToCollectionMutation = () => {
  return useMutation({
    mutationFn: addCardToCollection,
    onSuccess(_, variables) {
      queryClient.invalidateQueries({
        queryKey: collectionsQueryKeys.cards({
          collectionId: variables.data.collection_id.toString(),
        }),
      });
    },
  });
};
