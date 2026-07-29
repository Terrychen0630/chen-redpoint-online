import { Card } from "@/types/card";
import { getCardValue } from "@/game/utils/cardValue";

export function canMatch(
  handCard: Card,
  seaCard: Card
): boolean {

  const handValue = getCardValue(handCard.rank);
  const seaValue = getCardValue(seaCard.rank);

  // A 與 9
  if (
    (handValue === 1 && seaValue === 9) ||
    (handValue === 9 && seaValue === 1)
  ) {
    return true;
  }

  // 10 J Q K
  if (
    handValue >= 10 ||
    seaValue >= 10
  ) {
    return handValue === seaValue;
  }

  // 一般牌
  return handValue + seaValue === 10;
}