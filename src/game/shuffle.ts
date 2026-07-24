import { Card } from "@/types/card";

/**
 * Prototype 專用
 * 暫時不要洗牌，避免 Hydration Error
 */
export function shuffleDeck(deck: Card[]): Card[] {
  return [...deck];
}