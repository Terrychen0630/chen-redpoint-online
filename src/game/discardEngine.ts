import { Room } from "@/types/room";
import { Card } from "@/types/card";

export function discardCard(
  room: Room,
  playerSeat: number,
  card: Card
): Room {

  const players = room.players.map(player => {

    if (player.seat !== playerSeat) {
      return player;
    }

    return {
      ...player,
      hand: player.hand.filter(c => c !== card)
    };

  });

  return {
    ...room,
    players,
    seaCards: [...room.seaCards, card]
  };
}