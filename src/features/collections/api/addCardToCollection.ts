import { api } from "@config/api.ts";

export type GetCollectionsCardsProps = {
  data: {
    collection_id: string;
    card_id: string;
    quantity: number;
  };
};

export const addCardToCollection = async ({
  data,
}: GetCollectionsCardsProps) => {
  await api.post(`/collections/cards`, {
    ...data,
  });
};
