import { Card } from "@/types/card";
import { createDeck } from "./deckFactory";
import { shuffleDeck } from "./shuffle";
import { GAME_CONFIG } from "@/config/gameConfig";

/**
 * 建立一副可遊玩的牌組
 *
 * 流程：
 * 1. 建立52張牌
 * 2. 洗牌（Prototype 目前不洗）
 */
export function buildDeck(): Card[] {
  const deck = createDeck();

  if (!GAME_CONFIG.SHUFFLE_DECK) {
    return deck;
  }

  return shuffleDeck(deck);
}