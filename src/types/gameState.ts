export type GamePhase =
  | "waiting"
  | "cut"
  | "peek"
  | "deal"
  | "redeal"
  | "playing"
  | "settlement"
  | "finished";

export interface GameState {
  phase: GamePhase;

  animation: string | null;

  currentSeat: number;
}