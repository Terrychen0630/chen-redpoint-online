import { Card } from "@/types/card";
import { findMatches } from "./matchEngine";

/**
 * 判斷翻出的牌是否可以繼續吃
 */
export function findChainMatches(
  flippedCard: Card,
  seaCards: Card[]
): Card[] {
  // 不可以跟自己配
  const availableSeaCards = seaCards.filter(
    (card) =>
      !(
        card.suit === flippedCard.suit &&
        card.rank === flippedCard.rank
      )
  );

  return findMatches(flippedCard, availableSeaCards);
}