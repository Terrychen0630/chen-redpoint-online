import { Card, Suit, Rank } from "@/types/card";

export function createCard(
  suit: Suit,
  rank: Rank
): Card {
  return {
    id: `${suit}-${rank}`,
    suit,
    rank,
  };
}