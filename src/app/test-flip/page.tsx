"use client";

import { flipCard } from "@/game/flipEngine";
import { Card } from "@/types/card";
import { Player } from "@/types/player";
import { Room } from "@/types/room";

const deck: Card[] = [
  {
    suit: "heart",
    rank: "5",
  },
  {
    suit: "club",
    rank: "A",
  },
];

const players: Player[] = [];

const room: Room = {
  roomCode: "123456",
  status: "playing",
  hostSeat: 1,
  dealerSeat: 1,
  currentTurn: 1,
  createdAt: Date.now(),
  winner: null,
  players,
  deck,
  seaCards: [],
  bottomCard: null,
  discardPile: [],
};

export default function TestFlipPage() {
  const result = flipCard(room);

  return (
    <main className="p-8">

      <h1 className="text-3xl font-bold">
        Flip Engine Test
      </h1>

      <div className="mt-6">

        <p>
          翻出的牌：
          {result.flippedCard?.suit}
          {" "}
          {result.flippedCard?.rank}
        </p>

        <p>
          剩餘牌庫：
          {result.room.deck.length}
        </p>

        <p>
          海底：
          {result.room.seaCards.length}
        </p>

      </div>

    </main>
  );
}