import { Card } from "./card";

export interface Player {
  id: string;

  name: string;

  connected: boolean;

  ready: boolean;

  isHost: boolean;

  score: number;

  hand: Card[];

  matchedCards: Card[];
}