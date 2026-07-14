"use client";

import { findMatches } from "@/game/matchEngine";
import { Card } from "@/types/card";

export default function TestMatchPage() {

  const handCard: Card = {
    suit: "club",
    rank: "2",
  };

  const seaCards: Card[] = [
    { suit: "heart", rank: "2" },
    { suit: "spade", rank: "8" },
    { suit: "diamond", rank: "8" },
    { suit: "club", rank: "K" },
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

        {result.map((card, index) => (
          <div key={index}>
            {card.suit} {card.rank}
          </div>
        ))}

      </div>

    </main>
  );
}