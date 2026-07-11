'use client';
import { useRouter } from "next/navigation";
export default function HomePage() {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-green-800 flex items-center justify-center">
      <div className="bg-green-700 border-4 border-yellow-700 rounded-2xl p-10 shadow-2xl text-center w-[380px]">

        <h1 className="text-4xl font-bold text-white mb-2">
          🃏 檢紅點 Online
        </h1>

        <p className="text-yellow-300 mb-8">
          Chen Family Rules v1.0
        </p>

        <div className="space-y-4">

          <button onClick={() => router.push("/create")}
          className="w-full rounded-xl bg-red-600 py-3 text-xl font-bold text-white hover:bg-red-700 transition"
           >
             建立房間
          </button>

          <button className="w-full rounded-xl bg-blue-600 py-3 text-xl font-bold text-white hover:bg-blue-700 transition">
            加入房間
          </button>

          <button className="w-full rounded-xl bg-gray-700 py-3 text-xl font-bold text-white hover:bg-gray-800 transition">
            遊戲規則
          </button>

        </div>

        <p className="mt-8 text-sm text-gray-300">
          Version 0.1 Alpha
        </p>

      </div>
    </main>
  );
}