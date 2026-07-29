import { Card } from "@/types/card";
import { Player } from "@/types/player";

export interface DealResult {
  players: Player[];
  seaCards: Card[];
  remainingDeck: Card[];
}

const SEA_CARD_COUNT = 4;

function drawCard(deck: Card[]): Card {
  const card = deck.shift();

  if (!card) {
    throw new Error("Deck is empty");
  }

  return card;
}

function dealRound(
  players: Player[],
  deck: Card[],
  rounds: number
): void {
  for (let round = 0; round < rounds; round++) {
    for (let seat = 0; seat < players.length; seat++) {
      players[seat].hand.push(drawCard(deck));
    }
  }
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
  for (let i = 0; i < SEA_CARD_COUNT; i++) {
    seaCards.push(drawCard(workingDeck));
  }

  // ===== 發牌 =====
  dealRound(updatedPlayers, workingDeck, 1);
  dealRound(updatedPlayers, workingDeck, 2);
  dealRound(updatedPlayers, workingDeck, 3);

  return {
    players: updatedPlayers,
    seaCards,
    remainingDeck: workingDeck,
  };
}