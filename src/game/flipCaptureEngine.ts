import { Room } from "@/types/room";
import { Seat } from "@/game/types/seat";

import { flipDeckCard } from "@/game/deck/flipDeckCard";
import { findMatchingSeaCard } from "@/game/utils/findMatchingSeaCard";
import { captureCards } from "@/game/captureEngine";

export interface FlipCaptureResult {
  room: Room;
  captured: boolean;
}

export function flipCapture(
  room: Room,
  playerSeat: Seat
): FlipCaptureResult {

  // 翻牌
  const flipResult = flipDeckCard(room);

  // 沒牌可翻
  if (!flipResult.flippedCard) {
    return {
      room: flipResult.room,
      captured: false,
    };
  }

  // 找可配對的海底牌
  const seaCard = findMatchingSeaCard(
    flipResult.flippedCard,
    flipResult.room.seaCards
  );

  // 沒找到配對
  if (!seaCard) {
    return {
      room: flipResult.room,
      captured: false,
    };
  }

  // 收牌
  const updatedRoom = captureCards(
    flipResult.room,
    playerSeat,
    flipResult.flippedCard,
    seaCard,
    {
      removeFromHand: false,
    }
  );

  return {
    room: updatedRoom,
    captured: true,
  };
}