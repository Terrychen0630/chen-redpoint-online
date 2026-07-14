"use client";

import { nextTurn } from "@/game/turnEngine";
import { Room } from "@/types/room";
import { Card } from "@/types/card";
import { Player } from "@/types/player";

const emptyCards: Card[] = [];

const players: Player[] = [
  {
    id: "1",
    name: "頭家",
    seat: 1,
    connected: true,
    ready: true,
    isHost: true,
    score: 0,
    hand: [],
    capturedCards: [],
  },
  {
    id: "2",
    name: "二家",
    seat: 2,
    connected: true,
    ready: true,
    isHost: false,
    score: 0,
    hand: [],
    capturedCards: [],
  },
  {
    id: "3",
    name: "三家",
    seat: 3,
    connected: true,
    ready: true,
    isHost: false,
    score: 0,
    hand: [],
    capturedCards: [],
  },
  {
    id: "4",
    name: "尾家",
    seat: 4,
    connected: true,
    ready: true,
    isHost: false,
    score: 0,
    hand: [],
    capturedCards: [],
  },
];

export default function TestTurnPage() {
  const room: Room = {
    roomCode: "123456",
    status: "playing",
    hostSeat: 1,
    dealerSeat: 1,
    currentTurn: 1,
    createdAt: Date.now(),
    winner: null,
    players,
    deck: emptyCards,
    seaCards: emptyCards,
    bottomCard: null,
    discardPile: emptyCards,
  };

  const room2 = nextTurn(room);
  const room3 = nextTurn(room2);
  const room4 = nextTurn(room3);
  const room5 = nextTurn(room4);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        Turn Engine Test
      </h1>

      <div className="mt-6 space-y-2">
        <p>開始：Seat {room.currentTurn}</p>
        <p>第一次：Seat {room2.currentTurn}</p>
        <p>第二次：Seat {room3.currentTurn}</p>
        <p>第三次：Seat {room4.currentTurn}</p>
        <p>第四次：Seat {room5.currentTurn}</p>
      </div>
    </main>
  );
}