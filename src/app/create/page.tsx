'use client';

import { useState } from "react";
import { createRoom } from "@/firebase/roomService";

export default function CreateRoomPage() {
  const [playerName, setPlayerName] = useState("");
  const [roomCreated, setRoomCreated] = useState(false);
  const [roomCode, setRoomCode] = useState("");

  async function handleCreateRoom() {
    if (playerName.trim() === "") return;

    const code = await createRoom(playerName);

    setRoomCode(code);
    setRoomCreated(true);
  }

  if (roomCreated) {
    return (
      <main className="min-h-screen bg-green-800 flex items-center justify-center">
        <div className="w-96 rounded-2xl bg-green-700 p-8 text-center shadow-xl">
          <h1 className="mb-6 text-3xl font-bold text-white">
            🃏 房間建立成功
          </h1>

          <p className="text-xl text-white">
            歡迎 <b>{playerName}</b>
          </p>

          <p className="mt-6 text-2xl text-yellow-300">
            房號：{roomCode}
          </p>

          <p className="mt-6 text-gray-200">
            等待其他玩家加入...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-green-800 flex items-center justify-center">
      <div className="w-96 rounded-2xl bg-green-700 p-8 text-center shadow-xl">
        <h1 className="mb-6 text-3xl font-bold text-white">
          🏠 建立房間
        </h1>

        <input
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="請輸入你的名字"
          className="w-full rounded-lg p-3 text-black"
        />

        <button
          onClick={handleCreateRoom}
          disabled={playerName.trim() === ""}
          className="mt-6 w-full rounded-lg bg-red-600 py-3 text-lg font-bold text-white hover:bg-red-700 disabled:bg-gray-500"
        >
          建立房間
        </button>
      </div>
    </main>
  );
}