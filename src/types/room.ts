import { Players } from "./players";
import { Card } from "./card";

export interface Room {
  roomCode: string;

  status: "waiting" | "playing" | "finished";

  hostSeat: number;

  dealerSeat: number;

  currentTurn: number;

  createdAt: number;

  winner: number | null;

  players: Players;

  deck: Card[];

  seaCards: Card[];

  bottomCard: Card | null;

  discardPile: Card[];
}