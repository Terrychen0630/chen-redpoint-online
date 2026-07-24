import { Room } from "@/types/room";

/**
 * 下一位玩家座位
 */
export function getNextPlayerSeat(
  room: Room
): number {

  return (
    room.currentTurn %
    room.players.length
  ) + 1;

}

/**
 * 是否最後一位玩家
 */
export function isLastPlayer(
  room: Room
): boolean {

  return (
    room.currentTurn === room.players.length
  );

}

/**
 * 換下一位玩家
 */
export function nextTurn(
  room: Room
): Room {

  const updated = structuredClone(room);

  updated.currentTurn =
    getNextPlayerSeat(updated);

  return updated;

}