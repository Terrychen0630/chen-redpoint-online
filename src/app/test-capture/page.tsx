"use client";

import { captureCards } from "@/game/engines/captureEngine";
import { createCard } from "@/game/cardFactory";
import { Seat } from "@/game/types/seat";

import { Room } from "@/types/room";
import { Player } from "@/types/player";

const handCard = createCard("club", "4");
const seaCard = createCard("heart", "6");

const player: Player = {
  id: "1",
  name: "聖文",
  seat: Seat.West,
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
  hostSeat: Seat.West,
  dealerSeat: Seat.West,
  currentTurn: Seat.West,
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
    Seat.West,
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