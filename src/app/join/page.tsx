'use client';

import { useState } from "react";

export default function JoinRoomPage() {
  const [playerName, setPlayerName] = useState("");
  const [roomCode, setRoomCode] = useState("");

  return (
    <main className="min-h-screen bg-green-800 flex items-center justify-center">
      <div className="w-96 rounded-2xl bg-green-700 p-8 text-center shadow-xl">

        <h1 className="mb-6 text-3xl font-bold text-white">
          🚪 加入房間
        </h1>

        <input
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="請輸入你的名字"
          className="mb-4 w-full rounded-lg p-3 text-black"
        />

        <input
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value)}
          placeholder="請輸入六位房號"
          className="mb-6 w-full rounded-lg p-3 text-black"
        />

        <button
          className="w-full rounded-lg bg-blue-600 py-3 text-lg font-bold text-white hover:bg-blue-700"
        >
          加入房間
        </button>

      </div>
    </main>
  );
}