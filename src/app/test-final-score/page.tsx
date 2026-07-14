"use client";

import { calculateFinalScore } from "@/game/finalScoreEngine";

export default function TestFinalScorePage() {

  const result1 = calculateFinalScore(85, 0);

  const result2 = calculateFinalScore(65, 0);

  const result3 = calculateFinalScore(55, 30);

  const result4 = calculateFinalScore(85, 60);

  return (
    <main className="p-8">

      <h1 className="text-3xl font-bold">
        Final Score Test
      </h1>

      <div className="mt-6 space-y-4">

        <div>
          85 分 → {result1.finalScore > 0 ? "+" : ""}
          {result1.finalScore}
        </div>

        <div>
          65 分 → {result2.finalScore}
        </div>

        <div>
          55+30 → {result3.finalScore > 0 ? "+" : ""}
          {result3.finalScore}
        </div>

        <div>
          85+60 → +{result4.finalScore}
        </div>

      </div>

    </main>
  );
}