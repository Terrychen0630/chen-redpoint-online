import { Room } from "@/types/room";
import { Card } from "@/types/card";

import { playTurn } from "@/game/playTurn";

import { EngineResult } from "@/game/types/EngineResult";
import { PlayData } from "@/game/types/PlayData";
import { confirmChainCapture } from "@/game/chainCaptureEngine";

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
  confirmChain(
  flippedCard: Card,
  seaCard: Card
): void {

  this.room = confirmChainCapture(
    this.room,
    this.room.currentTurn,
    flippedCard,
    seaCard
  );

}
}