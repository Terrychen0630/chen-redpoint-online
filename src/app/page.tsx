'use client';

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-green-800 flex items-center justify-center">
      <div className="w-96 rounded-2xl bg-green-700 p-8 text-center shadow-xl">

        <h1 className="mb-3 text-4xl font-bold text-white">
          🃏 檢紅點 Online
        </h1>

        <p className="mb-8 text-yellow-300">
          Chen Family Rules v1.0
        </p>

        <button
          onClick={() => router.push("/create")}
          className="w-full rounded-lg bg-red-600 py-3 text-xl font-bold text-white hover:bg-red-700"
        >
          建立房間
        </button>

      </div>
    </main>
  );
}