import { Room } from "@/types/room";
import { Card } from "@/types/card";

import { findPlayableSeaCards } from "./matchEngine";
import { discardCard } from "./discardEngine";
import { playTurn } from "./playTurn";

export interface TurnFlowResult {
  room: Room;
  waitingSeaCard: boolean;
  selectableCards: Card[];
  flippedCard: Card | null;
  chainCards: Card[];
}

export function turnFlow(
  room: Room,
  handCard: Card,
  seaCard?: Card
): TurnFlowResult {

  const matches = findPlayableSeaCards(
    handCard,
    room.seaCards
  );

  // 沒有可以吃 → 丟牌
  if (matches.length === 0) {

    return {
      room: discardCard(
        room,
        room.currentTurn,
        handCard
      ),
      waitingSeaCard: false,
      selectableCards: [],
      flippedCard: null,
      chainCards: [],
    };

  }

  // 已經選好海牌
  if (seaCard) {

    const result = playTurn(
      room,
      room.currentTurn,
      handCard,
      seaCard
    );

    return {
      room: result.room,
      waitingSeaCard: false,
      selectableCards: [],
      flippedCard: result.data?.flippedCard ?? null,
      chainCards: result.data?.chainCards ?? [],
    };

  }

  // 等玩家選海牌
  return {
    room,
    waitingSeaCard: true,
    selectableCards: matches,
    flippedCard: null,
    chainCards: [],
  };

}