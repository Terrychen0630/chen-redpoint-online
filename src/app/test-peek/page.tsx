"use client";

import { createDeck } from "@/game/deckFactory";
import { shuffleDeck } from "@/game/shuffle";
import { cutDeck } from "@/game/deck/cutEngine";
import { peekBottomCard } from "@/game/deck/peekEngine";

export default function TestPeekPage() {

  const deck = shuffleDeck(createDeck());

  const cutResult = cutDeck(deck, 25, true);

  const peek = peekBottomCard(
    cutResult.bottomCard
  );

  return (

    <main className="p-8">

      <h1 className="text-3xl font-bold">
        Peek Engine Test
      </h1>

      <p className="mt-6">

        底牌：

        {peek.bottomCard.suit}

        {" "}

        {peek.bottomCard.rank}

      </p>

      <p>

        Black8：

        {peek.isBlackEight ? "YES" : "NO"}

      </p>

    </main>

  );
}