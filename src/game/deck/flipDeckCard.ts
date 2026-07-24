import { Room } from "@/types/room";
import { Card } from "@/types/card";

export interface FlipResult {
  room: Room;
  flippedCard: Card | null;
}

export function flipDeckCard(room: Room): FlipResult {

  if (room.deck.length === 0) {
    return {
      room,
      flippedCard: null,
    };
  }

  const deck = [...room.deck];

  const flippedCard = deck.shift()!;

  return {
    flippedCard,
    room: {
      ...room,
      deck,
      seaCards: [...room.seaCards, flippedCard],
    },
  };
}