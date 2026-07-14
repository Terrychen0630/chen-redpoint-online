import { Card } from "@/types/card";
import { findMatches } from "./matchEngine";

export interface HighlightCard {
  card: Card;
  priority: boolean;
}

export function findSelectableMatches(
  handCard: Card,
  seaCards: Card[]
): HighlightCard[] {

  const matches = findMatches(handCard, seaCards);

  const hasRed = matches.some(
    (card) => card.suit === "heart" || card.suit === "diamond"
  );

  return matches.map((card) => ({
    card,
    priority:
      hasRed &&
      (card.suit === "heart" || card.suit === "diamond"),
  }));
}