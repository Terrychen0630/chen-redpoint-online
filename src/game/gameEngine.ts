import { Room } from "@/types/room";
import { Card } from "@/types/card";

import { playTurn } from "./playTurn";
import { discardTurn } from "./discardTurnEngine";

export interface GameActionResult {
  room: Room;
}

export function executePlayerAction(
  room: Room,
  playerSeat: number,
  handCard: Card,
  seaCard?: Card
): GameActionResult {

  // 沒有配牌 → 棄牌
  if (!seaCard) {

    return {
      room: discardTurn(
        room,
        playerSeat,
        handCard
      ),
    };

  }

  // 有配牌 → 吃牌
  const result = playTurn(
    room,
    playerSeat,
    handCard,
    seaCard
  );

  return {
    room: result.room,
  };

}