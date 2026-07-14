"use client";

import { Card } from "@/types/card";
import { findSelectableMatches } from "@/game/highlightEngine";

export default function TestHighlightPage() {

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

  const result = findSelectableMatches(handCard, seaCards);

  return (
    <main className="p-8">

      <h1 className="text-3xl font-bold">
        Highlight Engine Test
      </h1>

      <div className="mt-6">

        {result.map((item, index) => (
          <div key={index}>
            {item.card.suit} {item.card.rank}
            {" "}
            {item.priority ? "⭐ 優先" : ""}
          </div>
        ))}

      </div>

    </main>
  );
}