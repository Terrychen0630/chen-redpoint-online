import { Room } from "@/types/room";
import { createCard } from "@/game/cardFactory";

export function applyRedPriorityScenario(room: Room): Room {
  console.log("✅ Red Priority Scenario 執行了");

  const updated = structuredClone(room);

  updated.players.forEach(player => {
    player.hand = [];
    player.capturedCards = [];
  });

  updated.players[0].hand = [
    createCard("diamond", "4"),
  ];

  updated.seaCards = [
    createCard("heart", "6"),
    createCard("club", "6"),
  ];

  updated.currentTurn = 1;

  return updated;
}