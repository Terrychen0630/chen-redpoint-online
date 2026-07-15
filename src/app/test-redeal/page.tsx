"use client";

import { Card } from "@/types/card";
import { Player } from "@/types/player";

import {
  checkSeaFourKind,
  checkPlayerFourKind,
  checkDealerFourKind,
} from "@/game/rules/redealEngine";

export default function TestRedealPage() {

  // =========================
  // Case 1：海底四張相同
  // =========================

  const seaFourCards: Card[] = [
    { suit: "club", rank: "5" },
    { suit: "diamond", rank: "5" },
    { suit: "heart", rank: "5" },
    { suit: "spade", rank: "5" },
  ];

  const seaResult = checkSeaFourKind(seaFourCards);

  // =========================
  // Case 2：玩家四張相同
  // =========================

  const player: Player = {
    id: "1",
    name: "測試玩家",
    seat: 1,
    connected: true,
    ready: true,
    isHost: false,
    score: 0,

    hand: [
      { suit: "club", rank: "7" },
      { suit: "diamond", rank: "7" },
      { suit: "heart", rank: "7" },
      { suit: "spade", rank: "K" },
      { suit: "club", rank: "2" },
      { suit: "diamond", rank: "9" },
    ],

    capturedCards: [],
  };

  const seaCards: Card[] = [
    { suit: "spade", rank: "7" },
    { suit: "club", rank: "5" },
    { suit: "heart", rank: "J" },
    { suit: "diamond", rank: "Q" },
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
    seat: 4,
    connected: true,
    ready: true,
    isHost: false,
    score: 0,

    hand: [
      { suit: "club", rank: "7" },
      { suit: "spade", rank: "7" },
      { suit: "heart", rank: "K" },
      { suit: "diamond", rank: "Q" },
      { suit: "club", rank: "2" },
      { suit: "heart", rank: "9" },
    ],

    capturedCards: [],
  };

  const dealerSeaCards: Card[] = [
    { suit: "diamond", rank: "7" },
    { suit: "club", rank: "5" },
    { suit: "heart", rank: "J" },
    { suit: "spade", rank: "A" },
  ];

  const bottomCard: Card = {
    suit: "heart",
    rank: "7",
  };

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

      {/* Case 1 */}

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

      {/* Case 2 */}

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

      {/* Case 3 */}

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