import { Card } from "@/types/card";
import { canMatch } from "../rules/matchRule";

export function findMatchingSeaCard(
  handCard: Card,
  seaCards: Card[]
): Card | undefined {

  return seaCards.find((seaCard) =>
    canMatch(handCard, seaCard)
  );

}