import { Card } from "@/types/card";

/**
 * 是否同時吃到 ♥5、♦5
 */
export function hasRedFivePair(
  capturedCards: Card[]
): boolean {

  const hasHeartFive =
    capturedCards.some(
      card =>
        card.suit === "heart" &&
        card.rank === "5"
    );

  const hasDiamondFive =
    capturedCards.some(
      card =>
        card.suit === "diamond" &&
        card.rank === "5"
    );

  return (
    hasHeartFive &&
    hasDiamondFive
  );

}