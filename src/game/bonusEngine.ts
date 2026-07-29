import { Player } from "@/types/player";
import { hasRedFivePair } from "./specialRules";

export interface BonusResult {
  bonus: number;
  penalty: number;
  details: string[];
}

export function calculateBonus(
  player: Player
): BonusResult {

  let bonus = 0;
  let penalty = 0;

  const details: string[] = [];

  // -----------------------------
  // R007 過紅5
  // -----------------------------
  if (hasRedFivePair(player.capturedCards)) {
    bonus += 30;
    details.push("過紅5 +30");
  }

  return {
    bonus,
    penalty,
    details,
  };
}