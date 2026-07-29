import { Card } from "@/types/card";
import { findPlayableSeaCards } from "./engines/matchEngine";

export type HighlightType =
  | "match"
  | "selected"
  | "bonus";

export interface HighlightCard {
  card: Card;
  type: HighlightType;
}

export function findSelectableMatches(
  handCard: Card,
  seaCards: Card[]
): HighlightCard[] {

  return findPlayableSeaCards(
    handCard,
    seaCards
  ).map(card => ({
    card,
    type: "match",
  }));

}

export function toHighlightCards(
  cards: Card[],
  type: HighlightType = "match"
): HighlightCard[] {

  return cards.map(card => ({
    card,
    type,
  }));

}