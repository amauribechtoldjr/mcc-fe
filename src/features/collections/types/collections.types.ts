export type Collection = {
  id: string;
  name: string;
  createdAt: string;
};

export type CollectionCard = {
  id: string;
  name: string;
  quantity: number;
};

/**
 * View models below describe what the frames render, which is more than the API
 * currently returns. They are fed by mocks until the backend exposes owner,
 * card count and artwork.
 */

export type CollectionSummary = {
  id: string;
  name: string;
  owner: string;
  cardCount: number;
  imageUrl: string;
};

export type CollectionCardEntry = {
  id: string;
  name: string;
  quantity: number;
  highlighted?: boolean;
};
