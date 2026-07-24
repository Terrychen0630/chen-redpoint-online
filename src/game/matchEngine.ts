import { Card } from "@/types/card";
import { isRed } from "@/game/utils/cardUtils";

const MATCH_RULES: Record<Card["rank"], Card["rank"][]> = {
  A: ["9"],
  "2": ["8"],
  "3": ["7"],
  "4": ["6"],
  "5": ["5"],
  "6": ["4"],
  "7": ["3"],
  "8": ["2"],
  "9": ["A"],
  "10": ["10"],
  J: ["J"],
  Q: ["Q"],
  K: ["K"],
};

export function canMatch(cardA: Card, cardB: Card): boolean {
  return MATCH_RULES[cardA.rank].includes(cardB.rank);
}

export function findMatches(
  handCard: Card,
  seaCards: Card[]
): Card[] {
  return seaCards.filter((card) => canMatch(handCard, card));
}

export function findPlayableSeaCards(
  handCard: Card,
  seaCards: Card[]
): Card[] {

  // 紅9只能配A
  if (
    handCard.rank === "9" &&
    isRed(handCard)
  ) {
    return seaCards.filter(
      (card) => card.rank === "A"
    );
  }

  const matches = findMatches(
    handCard,
    seaCards
  );

  const redCards = matches.filter(isRed);

  if (redCards.length > 0) {
    return redCards;
  }

  return matches;
}