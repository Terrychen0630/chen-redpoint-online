"use client";

import { useState } from "react";

import { createCard } from "@/game/cardFactory";
import { findChainMatches } from "@/game/chainEngine";

export default function TestChainPage() {
  const [result, setResult] = useState("");

  const flippedCard = createCard("club", "2");

  const seaCards = [
    createCard("club", "2"),
    createCard("heart", "8"),
    createCard("diamond", "8"),
    createCard("spade", "K"),
  ];

  function handleTest() {
    const matches = findChainMatches(
      flippedCard,
      seaCards
    );

    setResult(JSON.stringify(matches, null, 2));
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        Chain Engine Test
      </h1>

      <button
        onClick={handleTest}
        className="mt-6 rounded bg-blue-600 px-4 py-2 text-white"
      >
        測試 Chain Match
      </button>

      <pre className="mt-6 rounded bg-gray-100 p-4 whitespace-pre-wrap">
        {result}
      </pre>
    </main>
  );
}