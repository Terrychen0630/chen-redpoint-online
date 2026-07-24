import { Card, Suit } from "@/types/card";

/**
 * 是否為紅牌
 */
export function isRed(card: Card): boolean {
  return card.suit === "heart" || card.suit === "diamond";
}

/**
 * 是否為黑牌
 */
export function isBlack(card: Card): boolean {
  return card.suit === "club" || card.suit === "spade";
}

/**
 * 花色轉符號
 */
export function getSuitSymbol(suit: Suit): string {
  switch (suit) {
    case "heart":
      return "♥";
    case "diamond":
      return "♦";
    case "club":
      return "♣";
    case "spade":
      return "♠";
    default:
      throw new Error(`Unknown suit: ${suit}`);
  }
}

/**
 * 牌轉字串
 */
export function cardToString(card: Card): string {
  return `${getSuitSymbol(card.suit)}${card.rank}`;
}