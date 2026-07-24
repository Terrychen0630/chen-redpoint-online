import { Room } from "@/types/room";
import { Card } from "@/types/card";
import { captureCards } from "./captureEngine";
import { nextTurn } from "./turnEngine";

export function confirmChainCapture(
  room: Room,
  playerSeat: number,
  flippedCard: Card,
  seaCard: Card
): Room {

  const capturedRoom = captureCards(
    room,
    playerSeat,
    flippedCard,
    seaCard,
    {
      removeFromHand: false,
    }
  );

  return nextTurn(capturedRoom);
}