import { Card } from "@/types/card";

/**
 * 統計每個點數出現次數
 */
export function countRanks(cards: Card[]): Record<string, number> {

  const counter: Record<string, number> = {};

  for (const card of cards) {
    counter[card.rank] = (counter[card.rank] ?? 0) + 1;
  }

  return counter;
}