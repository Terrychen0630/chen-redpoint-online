import { Card } from "@/types/card";
import { DealPattern } from "@/game/types/dealPattern";
import { Seat } from "@/game/types/seat";

export interface DealPlayer {
  id: string;
  seat: Seat;
  hand: Card[];
}

export interface DealResult {
  players: DealPlayer[];
  deck: Card[];
}

interface DealOptions {
  deck: Card[];
  players: DealPlayer[];
  pattern: DealPattern;
}

export function dealCards({
  deck,
  players,
  pattern,
}: DealOptions): DealResult {

  const workingDeck = [...deck];

  const workingPlayers = players.map(player => ({
    ...player,
    hand: [...player.hand],
  }));

  // TODO 下一步加入發牌邏輯

  return {
    players: workingPlayers,
    deck: workingDeck,
  };
}