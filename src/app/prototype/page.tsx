"use client";

import { useState } from "react";
import { Card } from "@/types/card";

import { createTestRoom } from "@/game/testRoomFactory";
import { startGame } from "@/game/gameManager";
import { findSelectableMatches } from "@/game/highlightEngine";

import PlayerHand from "@/components/PlayerHand";
import SeaCards from "@/components/SeaCards";
import { playTurn } from "@/game/playTurn";

export default function PrototypePage() {

 const [room, setRoom] = useState(() =>
  startGame(createTestRoom())
);

  const [selectedCard, setSelectedCard] =
    useState<Card | null>(null);

  const selectableCards =
    selectedCard
      ? findSelectableMatches(
          selectedCard,
          room.seaCards
        )
      : [];
function handleSeaCardClick(seaCard: Card) {

  if (!selectedCard) {
    return;
  }

  try {

    const result = playTurn(
      room,
      room.currentTurn,
      selectedCard,
      seaCard
    );

    setRoom(result.room);

    setSelectedCard(null);

  } catch (error) {

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
  title={`Player ${player.seat}`}
  cards={player.hand}
  capturedCards={player.capturedCards}
  selectedCard={selectedCard}
  onSelect={setSelectedCard}
/>

        ))}

      </div>

      <hr className="my-8" />

<SeaCards
  seaCards={room.seaCards}
  selectableCards={selectableCards}
  onSelect={handleSeaCardClick}
/>

    </main>

  );

}