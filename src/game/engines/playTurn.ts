import { Room } from "@/types/room";
import { Card } from "@/types/card";

import { Seat } from "@/game/types/seat";
import { EngineResult } from "@/game/types/EngineResult";
import { PlayData } from "@/game/types/PlayData";

import { canMatch } from "./matchEngine";
import { captureCards } from "./captureEngine";
import { flipCard } from "./flipEngine";
import { findChainMatches } from "../chainEngine";
import { nextTurn } from "../turnEngine";
import { continueGame } from "../gameFlowEngine";

export function playTurn(
  room: Room,
  playerSeat: Seat,
  handCard: Card,
  seaCard: Card
): EngineResult<PlayData> {

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
  const flippedCard = flipResult.flippedCard;

  // 沒翻到牌，直接換下一位
  if (!flippedCard) {
    const nextRoom = nextTurn(flipResult.room);

    continueGame(nextRoom);

return {
  room: nextTurn(flipResult.room),
  data: {
    chainCards: [],
    mustContinue: false,
  },
};
  }

  // 判斷翻出的牌是否可以連吃
  const chainCards = findChainMatches(
    flippedCard,
    flipResult.room.seaCards
  );

  let currentRoom = flipResult.room;

  // 若可以連吃，自動完成第一次連吃
  if (chainCards.length > 0) {
    currentRoom = captureCards(
      currentRoom,
      playerSeat,
      flippedCard,
      chainCards[0],
      {
        removeFromHand: false,
      }
    );
  }

  // 是否還需要玩家繼續操作
  // (目前維持原本邏輯，之後再依規則調整)
  const mustContinue = false;

  // 換下一位玩家
  const nextRoom = nextTurn(currentRoom);

  continueGame(nextRoom);

  return {
    room: nextRoom,
    data: {
      flippedCard,
      chainCards,
      mustContinue,
    },
  };
}