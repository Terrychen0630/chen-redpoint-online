import { Card } from "@/types/card";

export interface PeekResult {
  bottomCard: Card;

  isBlackEight: boolean;
}

export function peekBottomCard(
  bottomCard: Card
): PeekResult {

  const isBlackEight =
    bottomCard.suit === "spade" &&
    bottomCard.rank === "8";

  return {
    bottomCard,
    isBlackEight,
  };
}