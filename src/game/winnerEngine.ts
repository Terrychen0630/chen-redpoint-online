import { Player } from "@/types/player";
import {
  calculatePlayerScore,
  ScoreResult,
} from "./engines/scoreEngine";

export interface WinnerResult {

  winner: Player;

  winnerIndex: number;

  scores: ScoreResult[];

}

export function calculateWinner(
  players: Player[]
): WinnerResult {

  const scores =
    players.map(calculatePlayerScore);

  let winnerIndex = 0;

  let highestScore =
    scores[0].finalScore;

  for (let i = 1; i < scores.length; i++) {

    if (
      scores[i].finalScore >
      highestScore
    ) {

      highestScore =
        scores[i].finalScore;

      winnerIndex = i;

    }

  }

  return {

    winner: players[winnerIndex],

    winnerIndex,

    scores,

  };

}