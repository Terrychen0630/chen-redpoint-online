import { Room } from "@/types/room";
import { applyFlipScenario } from "./flipScenario";
import { applyRedPriorityScenario } from "./redPriorityScenario";
import { applyANineScenario } from "./aNineScenario";

export function applyDebugScenario(
  room: Room,
  type: number
): Room {

  console.log("DEBUG TYPE =", type);

  switch (type) {
    case 1:
      console.log("➡️ case 1");
      return applyFlipScenario(room);

    case 2:
      console.log("➡️ case 2");
      return applyRedPriorityScenario(room);

      case 3:
        console.log("➡️ case 3");
  return applyANineScenario(room);

case 5:
    return applyFlipScenario(room);

    default:
      console.log("➡️ default");
      return room;
  }
}