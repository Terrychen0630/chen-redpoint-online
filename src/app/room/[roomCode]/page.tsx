"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase/config";

export default function RoomPage() {
  const { roomCode } = useParams<{
    roomCode: string;
  }>();

  const [room, setRoom] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!roomCode) return;

    const roomRef = doc(db, "rooms", roomCode);

    const unsubscribe = onSnapshot(roomRef, (snapshot) => {
      if (!snapshot.exists()) {
        setRoom(null);
        setLoading(false);
        return;
      }

      setRoom(snapshot.data());
      setLoading(false);
    });

    return () => unsubscribe();
  }, [roomCode]);

  if (loading) {
    return (
      <main className="min-h-screen bg-green-800 flex items-center justify-center text-white text-2xl">
        載入房間中...
      </main>
    );
  }

  if (!room) {
    return (
      <main className="min-h-screen bg-red-900 flex items-center justify-center text-white text-2xl">
        找不到房間
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-green-800 text-white">

      {/* Header */}
      <div className="bg-green-900 shadow-lg px-6 py-5">

        <h1 className="text-4xl font-bold">
          🃏 檢紅點 Online
        </h1>

        <p className="mt-2 text-xl">
          房號：{roomCode}
        </p>

        <p className="mt-1 text-yellow-300">
          狀態：{room.status}
        </p>

      </div>

      <div className="max-w-7xl mx-auto p-6">

        {/* 玩家 */}
        <section className="bg-green-700 rounded-xl p-5 mb-6">

          <h2 className="text-2xl font-bold mb-4">
            👥 玩家
          </h2>

          <div className="grid grid-cols-2 gap-4">

            {room.players?.map((player: any, index: number) => (

              <div
                key={index}
                className="rounded-lg bg-green-600 p-4"
              >

                <div className="text-xl font-bold">
                  {player.name}
                </div>

                <div className="mt-2 text-yellow-300">
                  座位：{player.seat}
                </div>

                <div className="text-gray-200">
                  手牌：
                  {player.hand?.length ?? 0}
                  張
                </div>

                <div className="text-gray-200">
                  得分：
                  {player.score ?? 0}
                </div>

              </div>

            ))}

          </div>

        </section>

        {/* 海底牌 */}
        <section className="bg-green-700 rounded-xl p-5 mb-6">

          <h2 className="text-2xl font-bold mb-4">
            🂠 海底牌
          </h2>

          <div className="flex flex-wrap gap-3">

            {room.seaCards?.length > 0 ? (

              room.seaCards.map((card: any) => (

                <div
                  key={card.id}
                  className="rounded-lg bg-white text-black px-4 py-5 shadow text-center min-w-[70px]"
                >
                  <div className="font-bold">
                    {card.suit}
                  </div>

                  <div className="text-2xl">
                    {card.rank}
                  </div>

                </div>

              ))

            ) : (

              <p>目前沒有海底牌</p>

            )}

          </div>

        </section>

        {/* 我的手牌 */}
        <section className="bg-green-700 rounded-xl p-5">

          <h2 className="text-2xl font-bold mb-4">
            🃏 我的手牌
          </h2>

          <p className="text-gray-200">
            （下一步開始接 executeRound）
          </p>

        </section>

      </div>

    </main>
  );
}