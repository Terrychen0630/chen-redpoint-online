export interface FinalScoreResult {
  totalScore: number;
  finalScore: number;
}

export function calculateFinalScore(
  cardScore: number,
  bonusScore: number
): FinalScoreResult {

  const totalScore = cardScore + bonusScore;

  const finalScore = totalScore - 70;

  return {
    totalScore,
    finalScore,
  };
}