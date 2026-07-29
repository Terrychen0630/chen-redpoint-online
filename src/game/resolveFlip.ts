import { Room } from "@/types/room";
import { Card } from "@/types/card";

import { Seat } from "@/game/types/seat";

import { findPlayableSeaCards } from "./matchEngine";
import { captureCards } from "./engines/captureEngine";

export function resolveFlip(
  room: Room,
  playerSeat: Seat,
  flippedCard: Card
): Room {

  console.log("=== resolveFlip 執行 ===");
  console.log("翻出的牌：", flippedCard);

  // 排除剛翻出的牌，避免自己配自己
  const seaCards = room.seaCards.filter(
    (card) =>
      !(
        card.suit === flippedCard.suit &&
        card.rank === flippedCard.rank
      )
  );

  console.log("海底牌：", seaCards);

  const matches = findPlayableSeaCards(
    flippedCard,
    seaCards
  );

  console.log("可配對：", matches);

  // 沒有可以吃
  if (matches.length === 0) {
    console.log("沒有可配對，翻牌結束");
    return room;
  }

  console.log("準備吃：", matches[0]);

  // 先完成吃牌
  const updatedRoom = captureCards(
    room,
    playerSeat,
    flippedCard,
    matches[0],
    {
      removeFromHand: false,
    }
  );

  // 再把翻出的牌從海底移除
  return {
    ...updatedRoom,
    seaCards: updatedRoom.seaCards.filter(
      (card) =>
        !(
          card.suit === flippedCard.suit &&
          card.rank === flippedCard.rank
        )
    ),
  };
}