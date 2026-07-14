"use client";

import { createEmptyRoom } from "@/game/roomFactory";
import { startGame } from "@/game/gameManager";

export default function TestGameStartPage() {
  const room = createEmptyRoom("123456", "聖文");

  const startedRoom = startGame(room);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        Game Start Test
      </h1>

      <div className="mt-6 space-y-2">
        <p>房號：{startedRoom.roomCode}</p>

        <p>狀態：{startedRoom.status}</p>

        <p>玩家數：{startedRoom.players.length}</p>

        <p>目前回合：{startedRoom.currentTurn}</p>
      </div>
    </main>
  );
}