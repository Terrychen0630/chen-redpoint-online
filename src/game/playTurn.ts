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

  // 是否必須繼續連吃
  mustContinue: boolean;
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

// 先預設為翻牌後的房間
let roomAfterChain = flipResult.room;

// 若翻牌可以連吃，自動完成第一次連吃
if (
  flipResult.flippedCard &&
  chainCards.length > 0
) {
  roomAfterChain = captureCards(
    flipResult.room,
    playerSeat,
    flipResult.flippedCard,
    chainCards[0],
    {
      removeFromHand: false,
    }
  );
}

// 是否還需要玩家繼續操作
const mustContinue = false;

// 完成連吃後直接換下一位
const nextRoom = nextTurn(roomAfterChain);

return {
  room: nextRoom,
  flippedCard: flipResult.flippedCard,
  chainCards: [],
  mustContinue,
};
}