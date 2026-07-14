import { Card } from "@/types/card";

export interface ScoreDetail {
  card: Card;
  score: number;
}

export interface ScoreResult {
  total: number;
  details: ScoreDetail[];
}

export function calculateScore(cards: Card[]): ScoreResult {
  let total = 0;

  const details: ScoreDetail[] = [];

  for (const card of cards) {
    let score = 0;

    // 黑A
    if (card.suit === "club" && card.rank === "A") {
      score = 40;
    } else if (card.suit === "spade" && card.rank === "A") {
      score = 30;
    }

    // 紅A
    else if (
      (card.suit === "heart" || card.suit === "diamond") &&
      card.rank === "A"
    ) {
      score = 20;
    }

    // 紅9
    else if (
      (card.suit === "heart" || card.suit === "diamond") &&
      card.rank === "9"
    ) {
      score = 10;
    }

    // 紅10~K
    else if (
      (card.suit === "heart" || card.suit === "diamond") &&
      ["10", "J", "Q", "K"].includes(card.rank)
    ) {
      score = 10;
    }

    // 紅2~8
    else if (
      (card.suit === "heart" || card.suit === "diamond") &&
      ["2", "3", "4", "5", "6", "7", "8"].includes(card.rank)
    ) {
      score = Number(card.rank);
    }

    total += score;

    details.push({
      card,
      score,
    });
  }

  return {
    total,
    details,
  };
}