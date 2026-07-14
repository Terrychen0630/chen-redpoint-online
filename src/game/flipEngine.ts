import { Room } from "@/types/room";
import { Card } from "@/types/card";

export interface FlipResult {
  room: Room;
  flippedCard: Card | null;
}

export function flipCard(room: Room): FlipResult {
  if (room.deck.length === 0) {
    return {
      room,
      flippedCard: null,
    };
  }

  const flippedCard = room.deck[0];

  const newDeck = room.deck.slice(1);

  return {
    room: {
      ...room,
      deck: newDeck,
      seaCards: [...room.seaCards, flippedCard],
    },
    flippedCard,
  };
}