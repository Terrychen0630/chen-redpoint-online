export type EventType =
  | "redFive"
  | "blackEight"
  | "zeroScore";

export interface GameEvent {
  type: EventType;

  winnerSeat: number;

  score: number;
}