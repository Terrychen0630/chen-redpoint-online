import { Card } from "@/types/card";
import { Player } from "@/types/player";

export interface DealResult {
  players: Player[];
  seaCards: Card[];
  remainingDeck: Card[];
}

export function dealCards(
  deck: Card[],
  players: Player[]
): DealResult {

  const workingDeck = [...deck];

  const updatedPlayers: Player[] = players.map((player) => ({
  id: player.id,
  name: player.name,
  seat: player.seat,
  connected: player.connected,
  ready: player.ready,
  isHost: player.isHost,
  score: player.score,
  hand: [],
  capturedCards: [...player.capturedCards],
}));

  const seaCards: Card[] = [];

  // ===== 發海底 =====
  for (let i = 0; i < 4; i++) {
    seaCards.push(workingDeck.shift()!);
  }

  // ===== 第一輪：每人1張 =====
  for (let seat = 0; seat < 4; seat++) {
    updatedPlayers[seat].hand.push(workingDeck.shift()!);
  }

  // ===== 第二輪：每人2張 =====
  for (let round = 0; round < 2; round++) {
    for (let seat = 0; seat < 4; seat++) {
      updatedPlayers[seat].hand.push(workingDeck.shift()!);
    }
  }

  // ===== 第三輪：每人3張 =====
  for (let round = 0; round < 3; round++) {
    for (let seat = 0; seat < 4; seat++) {
      updatedPlayers[seat].hand.push(workingDeck.shift()!);
    }
  }

  return {
    players: updatedPlayers,
    seaCards,
    remainingDeck: workingDeck,
  };
}