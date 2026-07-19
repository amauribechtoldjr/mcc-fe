export type Card = {
  id: string;
  name: string;
  created_at: string;
};

/**
 * What the frames render for a card. Fed by mocks until the backend exposes
 * artwork.
 */
export type CardView = {
  id: string;
  name: string;
  imageUrl: string;
};
