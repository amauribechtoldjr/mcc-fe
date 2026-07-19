import cardPlaceholder from "@assets/card-placeholder.svg";
import type { CardView } from "@features/cards/types/cards.types";

/**
 * Layout-only fixture. Replace with `useCardsQuery` once the backend exposes
 * card artwork.
 */
export const MOCK_CARDS: CardView[] = [
  { id: "bonders-enclave", name: "Bonders' Enclave" },
  { id: "minsc-and-boo", name: "Minsc & Boo, Timeless Heroes" },
  { id: "jhoira-weatherlight-captain", name: "Jhoira, Weatherlight Captain" },
  { id: "sol-ring", name: "Sol Ring" },
  { id: "arcane-signet", name: "Arcane Signet" },
  { id: "command-tower", name: "Command Tower" },
  { id: "cultivate", name: "Cultivate" },
  { id: "swords-to-plowshares", name: "Swords to Plowshares" },
  { id: "lightning-greaves", name: "Lightning Greaves" },
  { id: "rhystic-study", name: "Rhystic Study" },
  { id: "smothering-tithe", name: "Smothering Tithe" },
  { id: "cyclonic-rift", name: "Cyclonic Rift" },
].map((card) => ({ ...card, imageUrl: cardPlaceholder }));
