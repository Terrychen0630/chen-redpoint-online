import { Seat } from "@/game/types/seat";
import { CLOCKWISE_SEATS } from "./seatOrder";

export function getNextSeat(current: Seat): Seat {
  const index = CLOCKWISE_SEATS.indexOf(current);
  return CLOCKWISE_SEATS[(index + 1) % CLOCKWISE_SEATS.length];
}