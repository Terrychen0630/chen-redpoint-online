import { Card } from "@/types/card";

interface PlayerHandProps {
  title: string;
  cards: Card[];
  capturedCards: Card[];
  selectedCard: Card | null;
  onSelect: (card: Card) => void;

  isCurrentTurn: boolean;
}

export default function PlayerHand({
  title,
  cards,
  capturedCards,
  selectedCard,
  onSelect,
  isCurrentTurn,
}: PlayerHandProps) {
  return (
    <div
  className={`rounded p-4 ${
    isCurrentTurn
      ? "bg-green-700 ring-4 ring-yellow-400"
      : "bg-green-900 opacity-60"
  }`}
>

      <h3 className="mb-3 text-xl font-bold">
        {title}
      </h3>

      <p className="mb-2 font-bold">
        手牌
      </p>

      <div className="mb-4 flex flex-wrap gap-2">

        {cards.map((card, index) => (

          <button
  disabled={!isCurrentTurn}
            key={index}
            onClick={() => onSelect(card)}
className={`
  rounded
  px-3
  py-2
  text-black

  ${
    selectedCard === card
      ? "bg-blue-300"
      : "bg-white"
  }

  ${
    !isCurrentTurn
      ? "cursor-not-allowed opacity-50"
      : "hover:bg-yellow-200"
  }
`}
          >
            {card.suit} {card.rank}
          </button>

        ))}

      </div>

      <hr className="my-4" />

      <p className="mb-2 font-bold">
        吃牌
      </p>

      <div className="flex flex-wrap gap-2">

        {capturedCards.map((card, index) => (

          <div
            key={index}
            className="rounded bg-red-600 px-3 py-2"
          >
            {card.suit} {card.rank}
          </div>

        ))}

      </div>

    </div>
  );
}