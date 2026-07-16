"use client";

import { createTestRoom } from "@/game/testRoomFactory";
import { startGame } from "@/game/gameManager";

export default function TestGameStartPage() {

 const room = createTestRoom();

  const startedRoom = startGame(room);

  return (
    <main className="min-h-screen bg-green-900 p-8 text-white">

      <h1 className="text-4xl font-bold mb-8">
        🧪 Game Start Engine Test
      </h1>

      <p>
        Room：
        {startedRoom.roomCode}
      </p>

      <p>
        Status：
        {startedRoom.status}
      </p>

      <p>
        Sea Cards：
        {startedRoom.seaCards.length}
      </p>

      <p>
        Remaining Deck：
        {startedRoom.deck.length}
      </p>

      <hr className="my-8" />

      {startedRoom.players.map((player) => (

        <div
          key={player.seat}
          className="mb-6 rounded bg-gray-800 p-4"
        >

          <h2 className="text-xl font-bold">

            Seat {player.seat}

          </h2>

          <p>

            {player.name || "(空位)"}

          </p>

          <p>

            手牌：

            {player.hand.length}

            張

          </p>

        </div>

      ))}

    </main>
  );
}