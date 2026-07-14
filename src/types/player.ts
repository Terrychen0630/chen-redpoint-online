import { Card } from "./card";

export interface Player {
  id: string;

  name: string;

  seat: number;

  connected: boolean;

  ready: boolean;

  isHost: boolean;

  score: number;

  hand: Card[];

  matchedCards: Card[];
}