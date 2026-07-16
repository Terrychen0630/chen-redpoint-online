import { Room } from "@/types/room";

import { createDeck } from "@/game/deckFactory";
import { shuffleDeck } from "@/game/shuffle";
import { dealCards } from "@/game/deck/dealEngine";
import { checkRedeal } from "@/game/rules/redealEngine";

export function startGame(room: Room): Room {

  // 1. 建立牌組
  const deck = createDeck();

  // 2. 洗牌
  const shuffledDeck = shuffleDeck(deck);

  // 3. 發牌
  const dealResult = dealCards(
    shuffledDeck,
    room.players
  );

  // 4. 建立新的 Room
  const updatedRoom: Room = {
    ...room,

    status: "playing",

    players: dealResult.players,

    seaCards: dealResult.seaCards,

    deck: dealResult.remainingDeck,
  };

  // 5. 檢查是否需要重發
  const redeal = checkRedeal(
    updatedRoom.players,
    updatedRoom.seaCards,
    updatedRoom.bottomCard
  );

  if (redeal.canRedeal) {

    console.log("Redeal:", redeal.reason);

    // 下一版改成真正重新洗牌
  }

  return updatedRoom;

}