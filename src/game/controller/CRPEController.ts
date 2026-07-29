import { Room } from "@/types/room";
import { Card } from "@/types/card";

import { playTurn } from "@/game/playTurn";

import { EngineResult } from "@/game/types/EngineResult";
import { PlayData } from "@/game/types/PlayData";

export class CRPEController {
  private room: Room;

  constructor(room: Room) {
    this.room = room;
  }

  getRoom(): Room {
    return this.room;
  }

  setRoom(room: Room): void {
    this.room = room;
  }

  play(
    handCard: Card,
    seaCard: Card
  ): EngineResult<PlayData> {
    const result = playTurn(
      this.room,
      this.room.currentTurn,
      handCard,
      seaCard
    );

    this.room = result.room;

    return result;
  }
}