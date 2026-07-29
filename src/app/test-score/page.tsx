"use client";

import { createCard } from "@/game/cardFactory";
import { calculateBaseScore } from "@/game/engines/scoreEngine";
import { Card } from "@/types/card";

const cards: Card[] = [
  createCard("club", "A"),
  createCard("spade", "A"),
  createCard("heart", "A"),
  createCard("diamond", "9"),
  createCard("heart", "5"),
  createCard("club", "K"),
];

export default function TestScorePage() {
  const score = calculateBaseScore(cards);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        Score Engine Test
      </h1>

      <h2 className="mt-6 text-2xl font-bold">
        基本分：{score}
      </h2>
    </main>
  );
}