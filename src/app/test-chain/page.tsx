"use client";

import { Card } from "@/types/card";
import { findChainMatches } from "@/game/chainEngine";

export default function TestChainPage() {

  const flippedCard: Card = {
    suit: "club",
    rank: "2",
  };

  const seaCards: Card[] = [
    {
      suit: "club",
      rank: "2",
    },
    {
      suit: "heart",
      rank: "8",
    },
    {
      suit: "diamond",
      rank: "8",
    },
    {
      suit: "spade",
      rank: "K",
    },
  ];

  const result = findChainMatches(
    flippedCard,
    seaCards
  );

  return (
    <main className="p-8">

      <h1 className="text-3xl font-bold">
        Chain Engine Test
      </h1>

      <p className="mt-4">
        翻牌：
        {flippedCard.suit} {flippedCard.rank}
      </p>

      <div className="mt-6">

        <h2 className="font-bold">
          可以連吃：
        </h2>

        {result.map((card, index) => (
          <div key={index}>
            {card.suit} {card.rank}
          </div>
        ))}

      </div>

    </main>
  );
}