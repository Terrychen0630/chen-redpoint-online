import { Card } from "@/types/card";

export interface CutResult {
  deck: Card[];

  topPile: Card[];

  bottomPile: Card[];

  bottomCard: Card;
}

export function cutDeck(
  deck: Card[],
  cutIndex: number,
  peekTopPile: boolean
): CutResult {

  if (cutIndex < 1 || cutIndex >= deck.length) {
    throw new Error("Invalid cut index.");
  }

  const topPile = deck.slice(0, cutIndex);

  const bottomPile = deck.slice(cutIndex);

  let newDeck: Card[];
  let peekPile: Card[];

  if (peekTopPile) {

    // 尾家偷看上面那疊
    // 發牌從下面那疊開始

    peekPile = topPile;

    newDeck = [...bottomPile, ...topPile];

  } else {

    // 尾家偷看下面那疊
    // 發牌從上面那疊開始

    peekPile = bottomPile;

    newDeck = [...topPile, ...bottomPile];
  }

  const bottomCard = peekPile[peekPile.length - 1];

  return {
    deck: newDeck,
    topPile,
    bottomPile,
    bottomCard,
  };
}