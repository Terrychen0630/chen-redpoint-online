import { Card } from "@/types/card";
import { Room } from "@/types/room";

export interface ActionValidationResult {

  valid: boolean;

  reason?: string;

}

export function validateAction(
  room: Room,
  playerSeat: number,
  handCard: Card,
  seaCard?: Card
): ActionValidationResult {

  // TODO

  return {

    valid: true,

  };

}