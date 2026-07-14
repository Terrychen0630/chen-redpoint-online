import { Player } from "./player";
import { Card } from "./card";

export interface Room {
  roomCode: string;

  status: "waiting" | "playing" | "finished";

  hostSeat: number;

  dealerSeat: number;

  currentTurn: number;

  createdAt: number;

  winner: number | null;

  players: Player[];

  deck: Card[];

  seaCards: Card[];

  bottomCard: Card | null;

  discardPile: Card[];
}