"use client";

import { Card as GameCard } from "@/types/card";
import Card from "./Card";

interface HandCardsProps {
  cards: GameCard[];
  selectedCardId?: string;
  onCardClick?: (card: GameCard) => void;
}

export default function HandCards({
  cards,
  selectedCardId,
  onCardClick,
}: HandCardsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          selected={card.id === selectedCardId}
          onClick={() => onCardClick?.(card)}
        />
      ))}
    </div>
  );
}