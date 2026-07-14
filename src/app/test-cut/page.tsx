"use client";

import { createDeck } from "@/game/deckFactory";
import { shuffleDeck } from "@/game/shuffle";
import { cutDeck } from "@/game/deck/cutEngine";

export default function TestCutPage() {
  const deck = shuffleDeck(createDeck());

  const result = cutDeck(deck, 23, true);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        Cut Engine Test
      </h1>

      <div className="mt-6">
        <p>原始牌數：{deck.length}</p>

        <p>上堆：{result.topPile.length}</p>

        <p>下堆：{result.bottomPile.length}</p>

        <p>
          底牌：
          {result.bottomCard.suit} {result.bottomCard.rank}
        </p>

        <p>新牌庫：{result.deck.length}</p>
      </div>
    </main>
  );
}