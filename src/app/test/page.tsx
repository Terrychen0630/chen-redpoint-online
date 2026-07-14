"use client";

import { createDeck } from "@/game/deckFactory";
import { shuffleDeck } from "@/game/shuffle";
import { dealCards } from "@/game/deck/dealEngine";
import { createEmptyRoom } from "@/game/roomFactory";

export default function TestDealPage() {

  const room = createEmptyRoom("123456", "聖文");

  const deck = shuffleDeck(createDeck());

  const result = dealCards(deck, room.players);

  return (
    <main className="min-h-screen bg-green-900 p-8 text-white">

      <h1 className="text-3xl font-bold mb-6">
        🃏 Deal Engine Test
      </h1>

      <p>海底：{result.seaCards.length}</p>

      <p>Seat1：{result.players[0].hand.length}</p>

      <p>Seat2：{result.players[1].hand.length}</p>

      <p>Seat3：{result.players[2].hand.length}</p>

      <p>Seat4：{result.players[3].hand.length}</p>

      <p>剩餘牌庫：{result.remainingDeck.length}</p>

    </main>
  );
}