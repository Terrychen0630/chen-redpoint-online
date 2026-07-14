"use client";

import { captureCards } from "@/game/captureEngine";
import { Room } from "@/types/room";
import { Player } from "@/types/player";
import { Card } from "@/types/card";

const handCard: Card = {
  suit: "club",
  rank: "4",
};

const seaCard: Card = {
  suit: "heart",
  rank: "6",
};

const player: Player = {
  id: "1",
  name: "聖文",
  seat: 1,
  connected: true,
  ready: true,
  isHost: true,
  score: 0,
  hand: [handCard],
  capturedCards: [],
};

const room: Room = {
  roomCode: "123456",
  status: "playing",
  hostSeat: 1,
  dealerSeat: 1,
  currentTurn: 1,
  createdAt: Date.now(),
  winner: null,
  players: [player],
  deck: [],
  seaCards: [seaCard],
  bottomCard: null,
  discardPile: [],
};

export default function TestCapturePage() {
  const result = captureCards(
    room,
    1,
    handCard,
    seaCard
  );

  return (
    <main className="p-8">

      <h1 className="text-3xl font-bold">
        Capture Engine Test
      </h1>

      <div className="mt-6">

        <p>
          手牌：
          {result.players[0].hand.length}
        </p>

        <p>
          已吃牌：
          {result.players[0].capturedCards.length}
        </p>

        <p>
          海底：
          {result.seaCards.length}
        </p>

      </div>

    </main>
  );
}