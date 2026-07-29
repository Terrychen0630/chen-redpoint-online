import { Room } from "@/types/room";
import { createCard } from "@/game/cardFactory";

export function applyRedFiveScenario(room: Room): Room {

  const updated = structuredClone(room);

  updated.players[0].capturedCards = [
    createCard("heart", "5"),
    createCard("diamond", "5"),
  ];

  return updated;
}