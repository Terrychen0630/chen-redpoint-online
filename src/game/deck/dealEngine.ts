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
    ...player,
    hand: [],
    capturedCards: [...player.capturedCards],
  }));

  const seaCards: Card[] = [];

  // ===== 發海底 =====
  for (let i = 0; i < 4; i++) {
    seaCards.push(workingDeck.shift()!);
  }

  // ===== 第一輪：每人 1 張 =====
  for (let seat = 0; seat < 4; seat++) {
    updatedPlayers[seat].hand.push(workingDeck.shift()!);
  }

  // ===== 第二輪：每人 2 張 =====
  for (let round = 0; round < 2; round++) {
    for (let seat = 0; seat < 4; seat++) {
      updatedPlayers[seat].hand.push(workingDeck.shift()!);
    }
  }

  // ===== 第三輪：每人 3 張 =====
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