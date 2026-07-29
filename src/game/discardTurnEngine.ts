import { Room } from "@/types/room";
import { Card } from "@/types/card";

import { Seat } from "@/game/types/seat";

import { discardCard } from "./discardEngine";
import { flipDeckCard } from "./deck/flipDeckCard";
import { resolveFlip } from "./resolveFlip";
import { getNextSeat } from "./utils/getNextSeat";

export function discardTurn(
  room: Room,
  playerSeat: Seat,
  card: Card
): Room {

  // 1. 玩家丟牌
  const discardedRoom = discardCard(
    room,
    playerSeat,
    card
  );

  // 2. 翻一張牌
  const flipResult = flipDeckCard(discardedRoom);

  // 3. 翻牌自摸
  let updatedRoom = flipResult.room;

  if (flipResult.flippedCard) {
    updatedRoom = resolveFlip(
      updatedRoom,
      playerSeat,
      flipResult.flippedCard
    );
  }

  // 4. 換下一位
  return {
    ...updatedRoom,
    currentTurn: getNextSeat(playerSeat),
  };
}