import { Card } from "@/types/card";
import { Player } from "@/types/player";
import { RedealReason, RedealResult } from "@/types/redeal";
import { countRanks } from "@/game/utils/rankCounter";

// =========================
// 海底四張相同（強制重發）
// =========================
export function checkSeaFourKind(
  seaCards: Card[]
): RedealResult {

  if (seaCards.length !== 4) {
    return {
      canRedeal: false,
      forceRedeal: false,
      reason: null,
    };
  }

  const firstRank = seaCards[0].rank;

  const isFourKind = seaCards.every(
    (card) => card.rank === firstRank
  );

  if (isFourKind) {
    return {
      canRedeal: true,
      forceRedeal: true,
      reason: RedealReason.SeaFourKind,
    };
  }

  return {
    canRedeal: false,
    forceRedeal: false,
    reason: null,
  };
}

// =========================
// 玩家四張相同
// =========================
export function checkPlayerFourKind(
  player: Player,
  seaCards: Card[]
): RedealResult {

  const rankCount = countRanks([
    ...player.hand,
    ...seaCards,
  ]);

  const hasFourKind = Object.values(rankCount).some(
    (count) => count >= 4
  );

  if (hasFourKind) {
    return {
      canRedeal: true,
      forceRedeal: false,
      reason: RedealReason.FourKind,
    };
  }

  return {
    canRedeal: false,
    forceRedeal: false,
    reason: null,
  };
}

// =========================
// 尾家四張相同
// =========================
export function checkDealerFourKind(
  player: Player,
  seaCards: Card[],
  bottomCard: Card | null
): RedealResult {

  if (!bottomCard) {
    return {
      canRedeal: false,
      forceRedeal: false,
      reason: null,
    };
  }

  const rankCount = countRanks([
    ...player.hand,
    ...seaCards,
    bottomCard,
  ]);

  for (const [rank, count] of Object.entries(rankCount)) {

    if (count >= 4) {

      // 手牌必須參與
      const hasInHand = player.hand.some(
        (card) => card.rank === rank
      );

      if (hasInHand) {
        return {
          canRedeal: true,
          forceRedeal: false,
          reason: RedealReason.DealerFourKind,
        };
      }
    }
  }

  return {
    canRedeal: false,
    forceRedeal: false,
    reason: null,
  };
}

// =========================
// 全黑（下一步完成）
// =========================
export function checkAllBlack(
  player: Player
): RedealResult {

  for (const card of player.hand) {

    // A 或 9 不能喊全黑
    if (card.rank === "A" || card.rank === "9") {
      return {
        canRedeal: false,
        forceRedeal: false,
        reason: null,
      };
    }

    // 只允許黑桃、梅花
    if (
      card.suit !== "spade" &&
      card.suit !== "club"
    ) {
      return {
        canRedeal: false,
        forceRedeal: false,
        reason: null,
      };
    }

  }

  return {
    canRedeal: true,
    forceRedeal: false,
    reason: RedealReason.AllBlack,
  };

}

// =========================
// 重發總檢查
// =========================
export function checkRedeal(
  players: Player[],
  seaCards: Card[],
  bottomCard: Card | null
): RedealResult {

  // 1. 海底四張相同（強制）
  const seaResult = checkSeaFourKind(seaCards);

  if (seaResult.canRedeal) {
    return seaResult;
  }

  // 2. 玩家四張相同
  for (const player of players) {

    const result = checkPlayerFourKind(
      player,
      seaCards
    );

    if (result.canRedeal) {
      return result;
    }

  }

  // 3. 尾家四張相同
  const dealer = players.find(
    (player) => player.seat === 4
  );

  if (dealer) {

    const result = checkDealerFourKind(
      dealer,
      seaCards,
      bottomCard
    );

    if (result.canRedeal) {
      return result;
    }

  }

// 4. 全黑

for (const player of players) {

  const result = checkAllBlack(player);

  if (result.canRedeal) {
    return result;
  }

}

return {
  canRedeal: false,
  forceRedeal: false,
  reason: null,
};

}