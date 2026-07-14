"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-green-900 flex flex-col items-center justify-center text-white">
      <h1 className="text-5xl font-bold mb-4">
        🃏 檢紅點 Online
      </h1>

      <p className="text-xl mb-10">
        Chen Family Rules v1.0
      </p>

      <div className="flex flex-col gap-4 w-72">
        <Link
          href="/create"
          className="bg-blue-600 hover:bg-blue-700 rounded-lg py-4 text-center text-xl font-bold"
        >
          建立房間
        </Link>

        <Link
          href="/join"
          className="bg-green-600 hover:bg-green-700 rounded-lg py-4 text-center text-xl font-bold"
        >
          加入房間
        </Link>

        <Link
          href="/test-deal"
          className="bg-yellow-600 hover:bg-yellow-700 rounded-lg py-4 text-center text-xl font-bold"
        >
          🧪 Deal Engine Test
        </Link>
      </div>
    </main>
  );
}