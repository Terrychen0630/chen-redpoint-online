"use client";

import { createCard } from "@/game/cardFactory";
import { findMatches } from "@/game/matchEngine";

export default function TestMatchPage() {
  const handCard = createCard("club", "2");

  const seaCards = [
    createCard("heart", "2"),
    createCard("spade", "8"),
    createCard("diamond", "8"),
    createCard("club", "K"),
  ];

  const result = findMatches(handCard, seaCards);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        Match Engine Test
      </h1>

      <div className="mt-6">
        <p>
          手牌：
          {handCard.suit} {handCard.rank}
        </p>

        <p className="mt-4 font-bold">
          可以吃：
        </p>

        {result.map((card) => (
          <div key={card.id}>
            {card.suit} {card.rank}
          </div>
        ))}
      </div>
    </main>
  );
}