import { Player } from "@/types/player";
import { ScoreResult } from "./engines/scoreEngine";

export interface GameResult {

  scores: ScoreResult[];

  winner: Player;

  winnerIndex: number;

  winnerScore: number;

}