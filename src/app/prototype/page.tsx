"use client";

import { useState } from "react";

import { Card } from "@/types/card";

import { createTestRoom } from "@/game/testRoomFactory";
import { startGame } from "@/game/gameManager";
import { playTurn } from "@/game/playTurn";
import { nextTurn } from "@/game/turnEngine";
import { applyDebugScenario } from "@/debug/debugEngine";
import {
  HighlightCard,
  findSelectableMatches,
  toHighlightCards,
} from "@/game/highlightEngine";

import PlayerHand from "@/components/PlayerHand";
import SeaCards from "@/components/SeaCards";
import { discardTurn } from "@/game/discardTurnEngine";
import ScorePanel from "@/components/ScorePanel";
import { ScoreResult, calculatePlayerScore } from "@/game/scoreEngine";
import { confirmChainCapture } from "@/game/chainCaptureEngine";

export default function PrototypePage() {


 const DEBUG_MODE : number = 5; // 0 = 關閉 Debug

  const [room, setRoom] = useState(() => {
  console.log("PAGE DEBUG_MODE =", DEBUG_MODE);

  let gameRoom = startGame(createTestRoom());

  gameRoom = applyDebugScenario(gameRoom, DEBUG_MODE);

  return gameRoom;
});

  const [selectedCard, setSelectedCard] =
    useState<Card | null>(null);

  const [selectableCards, setSelectableCards] =
    useState<HighlightCard[]>([]);

    const [scoreResult, setScoreResult] =
  useState<ScoreResult | null>(null);

  if (!room) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-green-900 text-white text-3xl">
        建立遊戲中...
      </main>
    );
  }
console.log("ROOM SEA =", room.seaCards);
console.log("ROOM HAND =", room.players[0].hand);
console.log("ROOM DECK =", room.deck);

  function handleCardSelect(card: Card) {

  const matches = findSelectableMatches(
    card,
    room.seaCards
  );

  // 沒有可以吃
  if (matches.length === 0) {

    const newRoom = discardTurn(
    room,
    room.currentTurn,
    card
);

    setRoom(newRoom);
    setSelectedCard(null);
    setSelectableCards([]);   // 清除高亮

    return;
  }

  // 有可以吃
  setSelectedCard(card);
  setSelectableCards(matches);   // 顯示可選海底牌

}

function handleSeaCardClick(seaCard: Card) {

  if (!selectedCard) return;
  const currentPlayer = room.players.find(
  (p) => p.seat === room.currentTurn
);

const waitingChain =
  currentPlayer
    ? !currentPlayer.hand.some(
        (card) =>
          card.suit === selectedCard.suit &&
          card.rank === selectedCard.rank
      )
    : false;

if (waitingChain) {

  const newRoom = confirmChainCapture(
    room,
    room.currentTurn,
    selectedCard,
    seaCard
  );

  setRoom(newRoom);
  setSelectedCard(null);
  setSelectableCards([]);

  return;
}

  // =============================
  // 第一階段：正常出牌
  // =============================
  try {

    const result = playTurn(
      room,
      room.currentTurn,
      selectedCard,
      seaCard
    );

    setRoom(result.room);

    if (result.mustContinue) {

      console.log("🔄 等待玩家確認連吃");

      setSelectedCard(result.flippedCard);

      setSelectableCards(
        toHighlightCards(result.chainCards)
      );

    } else {

      setSelectedCard(null);
      setSelectableCards([]);

    }

  } catch {

    alert("不能配牌");

  }

}

  return (

    <main className="min-h-screen bg-green-900 p-8 text-white">

      <h1 className="mb-8 text-4xl font-bold">
        🃏 Chen Red Point Prototype
      </h1>

      <h2 className="mb-6 text-2xl">
        目前回合：Player {room.currentTurn}
      </h2>

      <div className="grid grid-cols-2 gap-8">

        {room.players.map((player) => (

          <PlayerHand
            key={player.seat}
            title={`Player ${player.seat}`}
            cards={player.hand}
            capturedCards={player.capturedCards}
            selectedCard={selectedCard}
            isCurrentTurn={player.seat === room.currentTurn}
            onSelect={handleCardSelect}
          />

        ))}

      </div>

      <hr className="my-8" />

<SeaCards
  seaCards={room.seaCards}
  selectableCards={selectableCards}
  onSelect={handleSeaCardClick}
/>

<div className="mt-8 flex gap-4">

  <button
    className="rounded bg-blue-600 px-4 py-2 font-bold hover:bg-blue-700"
    onClick={() => {

      const result = calculatePlayerScore(
        room.players[0]
      );

      setScoreResult(result);

    }}
  >
    🧮 計算 Player1 分數
  </button>

  <button
    className="rounded bg-green-600 px-4 py-2 font-bold hover:bg-green-700"
    onClick={() => {

      setRoom(
        nextTurn(room)
      );

    }}
  >
    ▶ 下一位
  </button>

</div>
<ScorePanel
  playerName="Player 1"
  result={scoreResult}
/>

    </main>

  );

}
