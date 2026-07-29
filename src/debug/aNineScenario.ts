import { Room } from "@/types/room";
import { createCard } from "@/game/cardFactory";

export function applyANineScenario(room: Room): Room {

  const updated = structuredClone(room);

  updated.players.forEach(player => {
    player.hand = [];
    player.capturedCards = [];
  });

  // Player1 手牌：♥9
  updated.players[0].hand = [
    createCard("heart", "9"),
  ];

  // 海底
  updated.seaCards = [
    createCard("club", "A"),
    createCard("heart", "A"),
  ];

  updated.currentTurn = 1;

  return updated;
}