"use client";

import { calculateScore } from "@/game/scoreEngine";
import { Card } from "@/types/card";

const cards: Card[] = [
  { suit: "club", rank: "A" },
  { suit: "spade", rank: "A" },
  { suit: "heart", rank: "A" },
  { suit: "diamond", rank: "9" },
  { suit: "heart", rank: "5" },
  { suit: "club", rank: "K" },
];

export default function TestScorePage() {
  const result = calculateScore(cards);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        Score Engine Test
      </h1>

      <div className="mt-6">
        {result.details.map((item, index) => (
          <div key={index}>
            {item.card.suit} {item.card.rank} = {item.score}
          </div>
        ))}

        <h2 className="mt-6 text-2xl font-bold">
          總分：{result.total}
        </h2>
      </div>
    </main>
  );
}