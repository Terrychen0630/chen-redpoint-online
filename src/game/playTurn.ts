import { Room } from "@/types/room";
import { Card } from "@/types/card";

import { canMatch } from "./matchEngine";
import { captureCards } from "./captureEngine";
import { flipCard } from "./flipEngine";
import { findChainMatches } from "./chainEngine";
import { nextTurn } from "./turnEngine";

export interface PlayTurnResult {
  room: Room;
  flippedCard: Card | null;
  chainCards: Card[];
}

export function playTurn(
  room: Room,
  playerSeat: number,
  handCard: Card,
  seaCard: Card
): PlayTurnResult {

  // 檢查是否合法
  if (!canMatch(handCard, seaCard)) {
    throw new Error("這兩張牌不能配對");
  }

  // 吃牌
  const capturedRoom = captureCards(
    room,
    playerSeat,
    handCard,
    seaCard
  );

  // 翻牌
  const flipResult = flipCard(capturedRoom);

  // 判斷是否可以連吃
  const chainCards =
    flipResult.flippedCard === null
      ? []
      : findChainMatches(
          flipResult.flippedCard,
          flipResult.room.seaCards
        );

  // 換下一位
  const nextRoom = nextTurn(flipResult.room);

  return {
    room: nextRoom,
    flippedCard: flipResult.flippedCard,
    chainCards,
  };
}