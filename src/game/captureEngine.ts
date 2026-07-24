import { Room } from "@/types/room";
import { Card } from "@/types/card";

interface CaptureOptions {
  removeFromHand?: boolean;
}

export function captureCards(
  room: Room,
  playerSeat: number,
  sourceCard: Card,
  seaCard: Card,
  options: CaptureOptions = {}
): Room {
  const { removeFromHand = true } = options;

  const players = room.players.map((player) => {
    if (player.seat !== playerSeat) {
      return player;
    }

    const updatedHand = removeFromHand
      ? player.hand.filter(
          (card) =>
            !(
              card.suit === sourceCard.suit &&
              card.rank === sourceCard.rank
            )
        )
      : player.hand;

    return {
      ...player,

      hand: updatedHand,

      capturedCards: [
        ...player.capturedCards,
        sourceCard,
        seaCard,
      ],
    };
  });

const seaCards = room.seaCards.filter((card) => {

  // 一定要移除被吃的海底牌
  const isSeaCard =
    card.suit === seaCard.suit &&
    card.rank === seaCard.rank;

  // 翻牌連吃時，翻出的牌也在海底，要一起移除
  const isSourceCard =
    !removeFromHand &&
    card.suit === sourceCard.suit &&
    card.rank === sourceCard.rank;

  return !(isSeaCard || isSourceCard);

});

  return {
    ...room,
    players,
    seaCards,
  };
}