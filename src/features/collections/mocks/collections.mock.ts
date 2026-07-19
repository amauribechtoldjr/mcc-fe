import cardPlaceholder from "@assets/card-placeholder.svg";
import type {
  CollectionCardEntry,
  CollectionSummary,
} from "@features/collections/types/collections.types";

/** Owner and count come from the frames; there is no auth or aggregate yet. */
const MOCK_OWNER = "AmauribechJr";
const MOCK_CARD_COUNT = 3490;

/**
 * Layout-only fixture. Ids are stable because navigation to
 * `/collections/$id` depends on them.
 */
export const MOCK_COLLECTIONS: CollectionSummary[] = [
  { id: "jhoira-artifacts", name: "Jhoira, Weatherlight Captain" },
  { id: "minsc-and-boo-tokens", name: "Minsc & Boo, Timeless Heroes" },
  { id: "atraxa-superfriends", name: "Atraxa, Praetors' Voice" },
  { id: "kaalia-of-the-vast", name: "Kaalia of the Vast" },
].map((collection) => ({
  ...collection,
  owner: MOCK_OWNER,
  cardCount: MOCK_CARD_COUNT,
  imageUrl: cardPlaceholder,
}));

export const MOCK_COLLECTION_ENTRIES: CollectionCardEntry[] = [
  { id: "bonders-enclave", name: "Bonders' Enclave", quantity: 1 },
  { id: "minsc-and-boo", name: "Minsc & Boo, Timeless Heroes", quantity: 1 },
  {
    id: "jhoira-weatherlight-captain",
    name: "Jhoira, Weatherlight Captain",
    quantity: 1,
    highlighted: true,
  },
  { id: "sol-ring", name: "Sol Ring", quantity: 1 },
  { id: "arcane-signet", name: "Arcane Signet", quantity: 1 },
  { id: "command-tower", name: "Command Tower", quantity: 1 },
];
