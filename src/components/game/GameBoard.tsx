"use client";

import { useState } from "react";

import { Room } from "@/types/room";
import { Card } from "@/types/card";

import HandCards from "./HandCards";
import SeaCards from "./SeaCards";

import { executeRound } from "@/game/roundEngine";
import { Seat } from "@/game/types/seat";

interface GameBoardProps {
  room: Room;
  playerSeat: Seat;
}

export default function GameBoard({
  room,
  playerSeat,
}: GameBoardProps) {

  const [gameRoom, setGameRoom] = useState(room);

  const [selectedHandCard, setSelectedHandCard] =
    useState<Card | null>(null);

  const [selectedSeaCard, setSelectedSeaCard] =
    useState<Card | null>(null);

  const me =
    gameRoom.players.find(
      p => p.seat === playerSeat
    );

  // ==========================
  // 點手牌 (可取消)
  // ==========================
  function handleHandCardClick(card: Card) {

    if (selectedHandCard?.id === card.id) {
      setSelectedHandCard(null);
      return;
    }

    setSelectedHandCard(card);

  }

  // ==========================
  // 點海底 (可取消)
  // ==========================
  function handleSeaCardClick(card: Card) {

    if (selectedSeaCard?.id === card.id) {
      setSelectedSeaCard(null);
      return;
    }

    setSelectedSeaCard(card);

  }

  // ==========================
  // 出牌
  // ==========================
  function handlePlay() {

    if (
      !selectedHandCard ||
      !selectedSeaCard
    ) {
      return;
    }

    const result =
      executeRound(
        gameRoom,
        playerSeat,
        selectedHandCard,
        selectedSeaCard
      );

    setGameRoom(result.room);

    setSelectedHandCard(null);
    setSelectedSeaCard(null);

  }

  return (

    <div className="space-y-8">

      {/* 海底 */}
      <section>

        <h2 className="mb-3 text-2xl font-bold">

          海底牌

        </h2>

        <SeaCards
          cards={gameRoom.seaCards}
          selectedCardId={selectedSeaCard?.id}
          onCardClick={handleSeaCardClick}
        />

      </section>

      {/* 手牌 */}
      <section>

        <h2 className="mb-3 text-2xl font-bold">

          我的手牌

        </h2>

        <HandCards
          cards={me?.hand ?? []}
          selectedCardId={selectedHandCard?.id}
          onCardClick={handleHandCardClick}
        />

      </section>

      {/* 按鈕 */}
      <div className="flex gap-4">

        <button
          onClick={handlePlay}
          disabled={
            !selectedHandCard ||
            !selectedSeaCard
          }
          className="
            rounded-lg
            bg-blue-600
            px-6
            py-3
            font-bold
            text-white
            disabled:bg-gray-400
          "
        >
          出牌
        </button>

        <button
          disabled={!selectedHandCard}
          className="
            rounded-lg
            bg-red-600
            px-6
            py-3
            font-bold
            text-white
            disabled:bg-gray-400
          "
        >
          棄牌
        </button>

      </div>

      {/* Debug Panel */}
      <div className="rounded-lg bg-gray-100 p-4 text-sm">

        <h3 className="font-bold mb-2">
          Debug
        </h3>

        <p>
          Current Turn：
          {gameRoom.currentTurn}
        </p>

        <p>
          Selected Hand：
          {selectedHandCard
            ? `${selectedHandCard.suit} ${selectedHandCard.rank}`
            : "無"}
        </p>

        <p>
          Selected Sea：
          {selectedSeaCard
            ? `${selectedSeaCard.suit} ${selectedSeaCard.rank}`
            : "無"}
        </p>

        <p>
          Sea Cards：
          {gameRoom.seaCards.length}
        </p>

        <p>
          Deck：
          {gameRoom.deck.length}
        </p>

      </div>

    </div>

  );

}