import { Card } from "./card";
import { Seat } from "@/game/types/seat";

export interface Player {
  id: string;
  name: string;

  seat: Seat;

  connected: boolean;
  ready: boolean;
  isHost: boolean;

  score: number;

  hand: Card[];

  capturedCards: Card[];
}