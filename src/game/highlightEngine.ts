import { Card } from "@/types/card";
import { findPlayableSeaCards } from "./matchEngine";

export interface HighlightCard {
  card: Card;
  priority: boolean;
}

export function findSelectableMatches(
  handCard: Card,
  seaCards: Card[]
): HighlightCard[] {

  const matches = findPlayableSeaCards(
    handCard,
    seaCards
  );

  return matches.map((card) => ({
    card,
    priority: true,
  }));

}