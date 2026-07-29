import { Card } from "@/types/card";

/**
 * Prototype 專用
 * 暫時不洗牌，避免 Next.js Hydration Error
 */
export function shuffleDeck(
  deck: Card[],
  random: () => number = Math.random
): Card[] {
  const shuffled = [...deck];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));

    [shuffled[i], shuffled[j]] = [
      shuffled[j],
      shuffled[i],
    ];
  }

  return shuffled;
}