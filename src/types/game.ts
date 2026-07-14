import { Card } from "./card";
import { Player } from "./player";

export type GameState =
  | "waiting"
  | "cutting"
  | "dealing"
  | "redeal"
  | "playing"
  | "finished";

export interface GameSettings {
  seaCardCount: number;
}

export interface SpecialEvent {
  type: "RED_FIVE" | "BLACK_EIGHT";
  playerId: string;
  message: string;
}

export interface GameRoom {
  roomCode: string;

  state: GameState;

  players: Player[];

  deck: Card[];

  seaCards: Card[];

  discardPile: Card[];

  events: SpecialEvent[];

  settings: GameSettings;

  currentTurn: number;

  dealer: number;

  tailPlayer: number;

  winner?: string;
}