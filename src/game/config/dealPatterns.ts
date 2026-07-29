import { DealPattern } from "@/game/types/dealPattern";

export const DealPatterns = {
  Single: {
    id: "single",
    name: "單張發",
    pattern: [1, 1, 1, 1, 1, 1],
  },

  Double: {
    id: "double",
    name: "雙張發",
    pattern: [2, 2, 2],
  },

  OneThreeTwo: {
    id: "132",
    name: "132 發",
    pattern: [1, 3, 2],
  },

  FourTwo: {
    id: "42",
    name: "42 發",
    pattern: [4, 2],
  },

  ThreeThree: {
    id: "33",
    name: "33 發",
    pattern: [3, 3],
  },
} satisfies Record<string, DealPattern>;