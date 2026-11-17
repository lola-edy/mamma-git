import type { Ingredient } from "../../types/pizza";
import { ingredients } from "../../data/ingredients";
import "./PizzaPreview.css";

type PizzaPreviewProps = {
  selectedIds: string[];
  size?:number;
};

const COPIES = 5; // nombre d'emojis posés pour chaque ingrédient

// Calcule la position (en %) d'un emoji sur la pizza.
// ingredientIndex : 1er ingrédient choisi, 2e, 3e...
// copyIndex : 1re copie, 2e copie... de cet ingrédient
function getPosition(ingredientIndex: number, copyIndex: number) {
  // Les copies sont réparties en cercle, et chaque ingrédient est
  // un peu tourné par rapport au précédent pour ne pas se superposer
  const angle = (copyIndex * 360) / COPIES + ingredientIndex * 37;
  const radius = copyIndex % 2 === 0 ? 30 : 17; // un emoji sur deux plus près du centre
  const radians = (angle * Math.PI) / 180;

  return {
    left: 50 + radius * Math.cos(radians),
    top: 50 + radius * Math.sin(radians),
  };
}

export default function PizzaPreview({ selectedIds , size=280}: PizzaPreviewProps) {
  const hasSauce = selectedIds.includes("tomate");

  // Les ingrédients choisis, dans l'ordre où on les a cliqués (sans la sauce)
  const toppings: Ingredient[] = [];
  for (const id of selectedIds) {
    const ingredient = ingredients.find(item => item.id === id);
    if (ingredient && ingredient.id !== "tomate") {
      toppings.push(ingredient);
    }
  }

  return (
    <div className="pizza" style={{width:`${size}px`}}>
      {hasSauce && <div className="sauce" />}

      {toppings.map((ingredient, ingredientIndex) =>
        Array.from({ length: COPIES }, (_, copyIndex) => {
          const position = getPosition(ingredientIndex, copyIndex);
          return (
            <span
              key={`${ingredient.id}-${copyIndex}`}
              className="topping"
              style={{ left: `${position.left}%`, top: `${position.top}%` , fontSize:`${size*0.09}px`}}
            >
              {ingredient.emoji}
            </span>
          );
        })
      )}
    </div>
  );
}