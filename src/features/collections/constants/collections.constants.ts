import type { GetCollectionsCardsProps } from "@features/collections/api/getCollectionCards";

export const collectionsQueryKeys = {
  all() {
    return ["collections"];
  },
  cards(params: GetCollectionsCardsProps) {
    return [...collectionsQueryKeys.all(), "cards", { params }];
  },
};
