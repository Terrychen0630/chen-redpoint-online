"use client";

import { Card as GameCard } from "@/types/card";

interface CardProps {
  card: GameCard;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const suitColor = {
  heart: "text-red-600",
  diamond: "text-red-600",
  club: "text-black",
  spade: "text-black",
};

const suitIcon = {
  heart: "♥",
  diamond: "♦",
  club: "♣",
  spade: "♠",
};

export default function Card({
  card,
  selected = false,
  disabled = false,
  onClick,
}: CardProps) {

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-20
        h-28
        rounded-xl
        border-2
        bg-white
        shadow-md
        transition-all
        duration-200

        ${selected
          ? "border-yellow-400 -translate-y-3 scale-105 shadow-xl"
          : "border-gray-300 hover:-translate-y-1 hover:shadow-lg"}

        ${disabled
          ? "opacity-50"
          : "cursor-pointer"}
      `}
    >
      <div
        className={`
          flex
          h-full
          flex-col
          items-center
          justify-center
          font-bold
          ${suitColor[card.suit]}
        `}
      >
        <div className="text-3xl">
          {suitIcon[card.suit]}
        </div>

        <div className="mt-2 text-2xl">
          {card.rank}
        </div>
      </div>
    </button>
  );
}