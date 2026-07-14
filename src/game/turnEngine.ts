import { Room } from "@/types/room";

/**
 * 取得目前輪到的玩家
 */
export function getCurrentPlayer(room: Room) {
  return room.players.find(
    (player) => player.seat === room.currentTurn
  );
}

/**
 * 換下一位玩家
 */
export function nextTurn(room: Room): Room {
  const nextSeat =
    room.currentTurn === 4 ? 1 : room.currentTurn + 1;

  return {
    ...room,
    currentTurn: nextSeat,
  };
}