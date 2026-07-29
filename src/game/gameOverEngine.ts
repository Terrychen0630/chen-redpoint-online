import { Room } from "@/types/room";

export function isGameOver(room: Room): boolean {

  const noCardsInDeck = room.deck.length === 0;

  const noCardsInHand = room.players.every(
    (player) => player.hand.length === 0
  );

  console.log("deck =", room.deck.length);

  console.log(
    "hands =",
    room.players.map((p) => p.hand.length)
  );

  return noCardsInDeck && noCardsInHand;
}