import { Room } from "@/types/room";
import { Card } from "@/types/card";

import { Seat } from "@/game/types/seat";

import { captureCards } from "../captureEngine";
import { nextTurn } from "../turnEngine";

export function confirmChainCapture(
  room: Room,
  playerSeat: Seat,
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