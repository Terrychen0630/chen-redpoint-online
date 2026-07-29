import { Room } from "@/types/room";
import { Card } from "@/types/card";

import { Seat } from "@/game/types/seat";

import { playTurn } from "./engines/playTurn";
import { discardTurn } from "./discardTurnEngine";

export function executePlayerAction(
  room: Room,
  playerSeat: Seat,
  handCard: Card,
  seaCard?: Card
) {
  if (!seaCard) {
    return {
      room: discardTurn(
        room,
        playerSeat,
        handCard
      ),
      flippedCard: null,
      chainCards: [],
      mustContinue: false,
    };
  }

  return playTurn(
    room,
    playerSeat,
    handCard,
    seaCard
  );
}