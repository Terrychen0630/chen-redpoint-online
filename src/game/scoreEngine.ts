import { Card } from "@/types/card";
import { Player } from "@/types/player";
import { calculateBonus } from "./bonusEngine";

export interface ScoreResult {
  baseScore: number;
  bonusScore: number;
  penaltyScore: number;
  finalScore: number;
}

/**
 * 計算基本牌分
 */
export function calculateBaseScore(
  capturedCards: Card[]
): number {

  let score = 0;

  for (const card of capturedCards) {

    const isRed =
      card.suit === "heart" ||
      card.suit === "diamond";

    switch (card.rank) {

      // ===== A =====
      case "A":

        if (card.suit === "club") {
          score += 40;
        }
        else if (card.suit === "spade") {
          score += 30;
        }
        else {
          score += 20;
        }

        break;

      // ===== 紅9 =====
      case "9":

        if (isRed) {
          score += 10;
        }

        break;

      // ===== 紅10~K =====
      case "10":
      case "J":
      case "Q":
      case "K":

        if (isRed) {
          score += 10;
        }

        break;

      // ===== 紅2~8 =====
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":

        if (isRed) {
          score += Number(card.rank);
        }

        break;

    }

  }

  return score;

}

/**
 * 計算玩家總分
 */
export function calculatePlayerScore(
  player: Player
): ScoreResult {

  // 基本分
  const baseScore =
    calculateBaseScore(
      player.capturedCards
    );

  // 特殊規則(Bonus / Penalty)
  const bonusResult =
    calculateBonus(player);

  const bonusScore =
    bonusResult.bonus;

  const penaltyScore =
    bonusResult.penalty;

  // 最終分數
  const finalScore =
    baseScore +
    bonusScore -
    penaltyScore;

  return {

    baseScore,

    bonusScore,

    penaltyScore,

    finalScore,

  };

}