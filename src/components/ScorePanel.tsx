import { ScoreResult } from "@/game/scoreEngine";

interface ScorePanelProps {
  playerName: string;
  result: ScoreResult | null;
}

export default function ScorePanel({
  playerName,
  result,
}: ScorePanelProps) {

  if (!result) {
    return null;
  }

  return (
    <div className="mt-8 rounded-lg border border-white bg-black/30 p-6">

      <h2 className="mb-4 text-2xl font-bold">
        📊 {playerName} 分數
      </h2>

      <div className="space-y-2 text-lg">

        <div>
          基本分：
          <span className="font-bold ml-2">
            {result.baseScore}
          </span>
        </div>

        <div>
          特殊加分：
          <span className="font-bold ml-2 text-green-400">
            +{result.bonusScore}
          </span>
        </div>

        <div>
          特殊扣分：
          <span className="font-bold ml-2 text-red-400">
            -{result.penaltyScore}
          </span>
        </div>

        <hr className="my-2" />

        <div className="text-2xl font-bold">

          總分：

          <span className="ml-3 text-yellow-300">
            {result.finalScore}
          </span>

        </div>

      </div>

    </div>
  );
}