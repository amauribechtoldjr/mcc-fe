import type { Card } from "@features/mtg_cards/types/cards.types";
import type { ReactNode } from "react";

type CardTileProps = {
  card: Card;
  action?: ReactNode;
};

export const CardTile = ({ card, action }: CardTileProps) => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-mred/5 ring-1 ring-mred/10 transition hover:ring-2 hover:ring-morange">
      <img
        src={card.img_small_uri}
        alt={card.name}
        className="aspect-5/7 w-full object-cover"
      />
      {action && <div className="absolute right-3 bottom-3">{action}</div>}
    </div>
  );
};
