import { Room } from "@/types/room";

export interface EngineResult<T = void> {
  room: Room;
  data?: T;
}