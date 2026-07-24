import { Room } from "@/types/room";
import { Card } from "@/types/card";

import { discardCard } from "./discardEngine";
import { flipDeckCard } from "./deck/flipDeckCard";
import { resolveFlip } from "./resolveFlip";

export function discardTurn(
  room: Room,
  playerSeat: number,
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

    currentTurn:
      playerSeat === 4
        ? 1
        : playerSeat + 1,
  };
}