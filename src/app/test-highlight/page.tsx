"use client";

import { createCard } from "@/game/cardFactory";
import { findSelectableMatches } from "@/game/highlightEngine";

export default function TestHighlightPage() {

  const handCard = createCard("club", "2");

  const seaCards = [
    createCard("heart", "2"),
    createCard("spade", "8"),
    createCard("diamond", "8"),
    createCard("club", "K"),
  ];

  const result =
    findSelectableMatches(
      handCard,
      seaCards
    );

  return (

    <main className="p-8">

      <h1 className="text-3xl font-bold">
        Highlight Engine Test
      </h1>

      <div className="mt-6 space-y-2">

        {result.map((item) => (

          <div key={item.card.id}>

            {item.card.suit} {item.card.rank}

            {" "}

            {item.type === "match" && "🟢 Match"}

            {item.type === "selected" && "🔵 Selected"}

            {item.type === "bonus" && "🟡 Bonus"}

          </div>

        ))}

      </div>

    </main>

  );

}