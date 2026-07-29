import { Card } from "@/types/card";
import { Room } from "@/types/room";

import { Seat } from "@/game/types/seat";

import { executePlayerAction } from "./actionEngine";
import { flipCapture } from "./flipCaptureEngine";
import { nextTurn } from "./turnEngine";

export interface RoundResult {
  room: Room;
}

export function executeRound(
  room: Room,
  playerSeat: Seat,
  handCard: Card,
  seaCard?: Card
): RoundResult {

  // 玩家動作
  const actionResult = executePlayerAction(
    room,
    playerSeat,
    handCard,
    seaCard
  );

  // 翻牌
  const flipResult = flipCapture(
    actionResult.room,
    playerSeat
  );

  // 換下一位玩家
  const updatedRoom = nextTurn(
    flipResult.room
  );

  return {
    room: updatedRoom,
  };
}