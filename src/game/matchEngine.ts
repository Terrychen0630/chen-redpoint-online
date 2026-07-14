import { Card } from "@/types/card";

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

/**
 * 判斷兩張牌是否可以配對
 */
export function canMatch(cardA: Card, cardB: Card): boolean {
  return MATCH_RULES[cardA.rank].includes(cardB.rank);
}

/**
 * 找出海底所有可配對的牌
 */
export function findMatches(
  handCard: Card,
  seaCards: Card[]
): Card[] {
  return seaCards.filter((card) => canMatch(handCard, card));
}