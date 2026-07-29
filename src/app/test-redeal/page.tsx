"use client";

import { Card } from "@/types/card";
import { Player } from "@/types/player";

import { Seat } from "@/game/types/seat";

import {
  checkSeaFourKind,
  checkPlayerFourKind,
  checkDealerFourKind,
} from "@/game/rules/redealEngine";

import { createCard } from "@/game/cardFactory";

export default function TestRedealPage() {

  // =========================
  // Case 1：海底四張相同
  // =========================

  const seaFourCards: Card[] = [
    createCard("club", "5"),
    createCard("diamond", "5"),
    createCard("heart", "5"),
    createCard("spade", "5"),
  ];

  const seaResult = checkSeaFourKind(seaFourCards);

  // =========================
  // Case 2：玩家四張相同
  // =========================

  const player: Player = {
    id: "1",
    name: "測試玩家",
    seat: Seat.West,
    connected: true,
    ready: true,
    isHost: false,
    score: 0,

    hand: [
      createCard("club", "7"),
      createCard("diamond", "7"),
      createCard("heart", "7"),
      createCard("spade", "K"),
      createCard("club", "2"),
      createCard("diamond", "9"),
    ],

    capturedCards: [],
  };

  const seaCards: Card[] = [
    createCard("spade", "7"),
    createCard("club", "5"),
    createCard("heart", "J"),
    createCard("diamond", "Q"),
  ];

  const playerResult = checkPlayerFourKind(
    player,
    seaCards
  );

  // =========================
  // Case 3：尾家四張相同
  // =========================

  const dealerPlayer: Player = {
    id: "2",
    name: "尾家",
    seat: Seat.South,
    connected: true,
    ready: true,
    isHost: false,
    score: 0,

    hand: [
      createCard("club", "7"),
      createCard("spade", "7"),
      createCard("heart", "K"),
      createCard("diamond", "Q"),
      createCard("club", "2"),
      createCard("heart", "9"),
    ],

    capturedCards: [],
  };

  const dealerSeaCards: Card[] = [
    createCard("diamond", "7"),
    createCard("club", "5"),
    createCard("heart", "J"),
    createCard("spade", "A"),
  ];

  const bottomCard: Card = createCard("heart", "7");

  const dealerResult = checkDealerFourKind(
    dealerPlayer,
    dealerSeaCards,
    bottomCard
  );

  return (
    <main className="min-h-screen bg-green-900 p-8 text-white">

      <h1 className="mb-8 text-4xl font-bold">
        🧪 Redeal Engine Test
      </h1>

      <div className="mb-8 rounded bg-gray-800 p-6">

        <h2 className="mb-4 text-2xl font-bold">
          Case 1：海底四張相同
        </h2>

        <p>
          Can Redeal：
          {seaResult.canRedeal ? " YES" : " NO"}
        </p>

        <p>
          Force Redeal：
          {seaResult.forceRedeal ? " YES" : " NO"}
        </p>

        <p>
          Reason：
          {seaResult.reason ?? "None"}
        </p>

      </div>

      <div className="mb-8 rounded bg-gray-800 p-6">

        <h2 className="mb-4 text-2xl font-bold">
          Case 2：玩家四張相同
        </h2>

        <p>
          Can Redeal：
          {playerResult.canRedeal ? " YES" : " NO"}
        </p>

        <p>
          Force Redeal：
          {playerResult.forceRedeal ? " YES" : " NO"}
        </p>

        <p>
          Reason：
          {playerResult.reason ?? "None"}
        </p>

      </div>

      <div className="rounded bg-gray-800 p-6">

        <h2 className="mb-4 text-2xl font-bold">
          Case 3：尾家四張相同
        </h2>

        <p>
          Can Redeal：
          {dealerResult.canRedeal ? " YES" : " NO"}
        </p>

        <p>
          Force Redeal：
          {dealerResult.forceRedeal ? " YES" : " NO"}
        </p>

        <p>
          Reason：
          {dealerResult.reason ?? "None"}
        </p>

      </div>

    </main>
  );
}