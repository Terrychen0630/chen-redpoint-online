import { Room } from "@/types/room";

import { dealCards } from "@/game/deck/dealEngine";
import { checkRedeal } from "@/game/rules/redealEngine";
import { buildDeck } from "@/game/deckEngine";

export function startGameEngine(
  room: Room
): Room {

  // 1. 建立並洗牌
  const deck = buildDeck();

  // 2. 發牌
  const dealResult = dealCards(
    deck,
    room.players
  );

  // 3. 建立遊戲中的 Room
  const playingRoom: Room = {

    ...room,

    status: "playing",

    players: dealResult.players,

    seaCards: dealResult.seaCards,

    deck: dealResult.remainingDeck,

  };

  // 4. 檢查是否需要重發
  const redeal = checkRedeal(
    playingRoom
  );

  // 5. 需要重發則重新開始
  if (redeal.canRedeal) {

    console.log("重新發牌：", redeal.reason);

    return startGameEngine(room);

  }

  // 6. 發牌完成
  return playingRoom;

}